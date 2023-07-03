<template>
  <q-page>
    <div class="subscription-page">
      <div class="column content-center">
        <q-img
          src="~assets/logo_initial.png"
          style="height: 75px; width: 130px"
          fit="scale-down"
        />
        <div class="text-subtitle1 text-center">
          <span class="prompt-color">Prompt </span>
          <span class="pal-color">Pal</span>
        </div>
      </div>

      <div v-if="!active">
        <div class="row justify-center">
          <div class="text-body1 q-mb-xl">
            Transform your world with PromptPal!
          </div>
        </div>
      </div>

      <div v-else>
        <div class="row justify-center">
          <div class="text-body1 q-mb-xl">
            You are currently subscribed to our
            <span
              class="text-gradient-primary text-positive active credit-border large-font"
              >{{ subName }}</span
            >
          </div>
        </div>
        <div class="row justify-center q-mb-sm">
          <div class="col-2">
            <div class="row justify-end">
              <div class="col-2">
                <q-btn-dropdown
                  color="positive"
                  flat
                  label="Options"
                  class="q-mr-lg q-ml-sm"
                  size="sm"
                  id="dropdown-menu"
                >
                  <q-list>
                    <q-item
                      @click="getCustomerPortal()"
                      clickable
                      v-close-popup
                    >
                      <q-item-section avatar>
                        <q-avatar
                          icon="edit_note"
                          color="positive"
                          text-color="white"
                          size="md"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label style="font-size: 16px"
                          >Update Billing</q-item-label
                        >
                        <q-item-label caption
                          >Update your billing details</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                      <q-item-section avatar>
                        <q-avatar
                          icon="block"
                          color="negative"
                          text-color="white"
                          size="md"
                        />
                      </q-item-section>
                      <q-item-section @click="cancel()">
                        <q-item-label style="font-size: 16px"
                          >Cancel Subscription</q-item-label
                        >
                        <q-item-label caption
                          >Opt out from your plan</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-12">
            <div class="row q-mb-lg justify-center">
              <div class="col-2">
                <CreditCard
                  v-if="cards.length"
                  :data="cards[0].card"
                  :name="`${user.data.firstName} ${user.data.lastName}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-center q-mb-md" v-if="!active">
        <div
          v-for="(plan, i) in subscriptionPlans"
          :key="plan.id"
          :style="{ order: i == 0 ? 2 : 1 }"
          class="col-xs-12 col-sm-12 col-md-5 col-lg-3"
        >
          <q-card class="subscription-card">
            <div
              v-if="plan.stripe_metadata_plan == 'annual'"
              class="ribbon ribbon-top-left"
            >
              <span>Best Seller</span>
            </div>

            <q-card-section class="subscription-header">
              <div class="text-h4 q-mt-xl padding_sm">
                {{ plan.name }}
              </div>
              <p class="price">{{ plan.pricing?.price }}</p>
              <p>{{ plan.description }}</p>
              <q-btn
                @click="subscribeToPlan(plan)"
                color="white"
                text-color="dark"
                label="Subscribe"
                class="subscribe-btn q-mb-md"
              ></q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row" v-if="active || subscriptions.length">
        <div class="col-12">
          <div class="row justify-center">
            <div class="col-6">
              <div>
                <q-table
                  style="height: 205px"
                  flat
                  bordered
                  title="Subscription Details"
                  virtual-scroll
                  :rows="subsRows"
                  :columns="columns"
                  id="subscription-table"
                  row-key="name"
                  class="q-mb-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted, watch } from "vue";
import { useSubStore } from "stores/subscription";
import { useUserStore } from "stores/user";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import moment from "moment";
import CreditCard from "src/components/CreditCard.vue";

export default defineComponent({
  name: "SubscriptionPage",
  components: {
    CreditCard,
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const subStore = useSubStore();
    const userStore = useUserStore();

    const { user } = storeToRefs(userStore);

    const { subscribe, getCustomerPortal, cancelSubscription } = subStore;
    const {
      cards,
      active,
      subName,
      payments,
      subscriptions,
      subscriptionPlans,
    } = storeToRefs(subStore);

    const subsRows = ref([]);

    const columns = [
      {
        name: "name",
        required: true,
        label: "Name",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "amount",
        align: "center",
        label: "Amount",
        field: "amount",
        sortable: true,
      },
      {
        name: "effective_date",
        label: "Effective Date",
        field: "effective_date",
      },
      {
        name: "next_invoice_date",
        label: "Next Invoice Date",
        field: "next_invoice_date",
      },
      { name: "status", label: "status", field: "status" },
    ];

    watch(
      () => subscriptions.value,
      (data) => {
        if (data.length)
          subsRows.value = subscriptions.value.map((sub) => {
            return {
              name: sub.items[0].price.product.name,
              amount: formatPrice(
                sub.items[0].plan.currency,
                sub.items[0].plan.amount,
                sub.items[0].plan.interval
              ),
              effective_date: convertDate(sub.current_period_start),
              next_invoice_date: convertDate(sub.current_period_end),
              status: sub.status,
            };
          });
      }
    );
    onMounted(() => {
      if (subscriptions?.value?.length) {
        subsRows.value = subscriptions.value.map((sub) => {
          return {
            name: sub.items[0].price.product.name,
            amount: formatPrice(
              sub.items[0].plan.currency,
              sub.items[0].plan.amount,
              sub.items[0].plan.interval
            ),
            effective_date: convertDate(sub.current_period_start),
            next_invoice_date: convertDate(sub.current_period_end),
            status: sub.status,
          };
        });
      }
    });

    function formatPrice(currency, amount, interval) {
      return `${new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format((amount / 100).toFixed(2))}/${interval}`;
    }
    function subscribeToPlan(plan) {
      if (!user.value.loggedIn) router.push("/login");
      else subscribe(plan);
    }

    function cancel() {
      $q.dialog({
        title: "Warning!",
        message: "Are you sure you want to cancel your subscription?",
        ok: {
          label: "Yes",
          color: "negative",
          push: false,
        },
        cancel: {
          color: "positive",
          label: "no",
          push: false,
        },
      }).onOk(() => {
        cancelSubscription(subscriptions.value[0].items[0].subscription);
      });
    }

    function convertDate(date) {
      let converted;

      try {
        converted = date.toDate();
      } catch {
        converted = date;
      }

      return moment(converted).format("MMM D, YYYY");
    }

    return {
      user,
      cards,
      active,
      cancel,
      subName,
      columns,
      payments,
      subsRows,
      subscribe,
      subscriptions,
      subscribeToPlan,
      getCustomerPortal,
      subscriptionPlans,
    };
  },
});
</script>

<style scoped>
/* .subscription-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
} */

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.subscription-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.subscription-card {
  margin: 10px;
  position: relative;
}

/* common */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: "";
  display: block;
  border: 5px solid #2980b9;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #3498db;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 18px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

.subscription-header {
  background: rgb(231, 229, 183);
  background: linear-gradient(
    0deg,
    rgba(231, 229, 183, 1) 0%,
    rgba(239, 147, 58, 1) 100%
  );
  padding: 10px;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.price {
  font-size: 2.5rem;
  margin: 10px 0;
}

.subscribe-btn {
  width: 150px;
}
</style>
