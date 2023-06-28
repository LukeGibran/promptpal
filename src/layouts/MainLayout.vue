<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <router-link to="/">
          <q-img
            src="~assets/logo.png"
            style="height: 75px; width: 130px"
            fit="scale-down"
          />
        </router-link>
        <div class="q-mx-lg"></div>
        <router-link v-if="user.data && user.loggedIn" to="/">
          <q-btn class="text-info" flat label="Prompt" />
        </router-link>
        <router-link
          to="subscription"
          v-if="user.data && user?.data?.role != 'admin'"
        >
          <q-btn class="text-primary" flat label="Subscription" />
        </router-link>
        <router-link to="subscription" v-if="!user.data">
          <q-btn class="text-primary" flat label="Our Pricing" />
        </router-link>
        <q-toolbar-title class="text-dark"> </q-toolbar-title>
        <div
          class="credit-border"
          :class="active ? 'text-positive active' : 'text-negative inactive'"
          v-if="user.data && user.loggedIn"
        >
          <q-icon name="generating_tokens" />
          Credits:
          {{ active ? "Unlimited" : "None" }}
        </div>
        <!-- <div
          class="custom-border credit-border free"
          v-if="!user.data && !user.loggedIn"
        >
          <i class="material-icons">generating_tokens</i> Free Credits:
          {{ freeCredits }}
        </div> -->
        <q-btn
          v-if="!user.loggedIn"
          class="text-info"
          flat
          label="Login"
          to="login"
        />
        <q-btn
          v-if="!user.loggedIn"
          class="text-primary"
          flat
          label="Register"
          to="register"
        />
        <q-btn-dropdown
          v-if="user.loggedIn && user.data"
          text-color="dark"
          flat
          :label="user?.data.displayName"
          class="q-mr-lg q-ml-sm"
          id="dropdown-menu"
        >
          <q-list>
            <q-item @click="$router.push('profile')" clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar
                  icon="account_box"
                  color="secondary"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-size: 16px">Profile</q-item-label>
                <q-item-label caption>View Profile</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator v-if="user.data.role == 'admin'" />
            <q-item
              v-if="user.data.role == 'admin'"
              clickable
              v-close-popup
              @click="$router.push('add')"
            >
              <q-item-section avatar>
                <q-avatar
                  icon="add"
                  color="positive"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-size: 16px">Add</q-item-label>
                <q-item-label caption>Add new Menu/sub topic</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="signOut()" v-close-popup>
              <q-item-section avatar>
                <q-avatar
                  icon="logout"
                  color="negative"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-size: 16px">Signout</q-item-label>
                <q-item-label caption>Signout from the app</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-app">
      <router-view />
    </q-page-container>
    <q-footer class="bg-grey-9 text-white">
      <q-toolbar style="min-height: 15px">
        <q-toolbar-title style="font-size: 13px"
          >Copyright © 2023</q-toolbar-title
        >
        <router-link to="terms">
          <q-btn
            size="12px"
            class="text-primary"
            flat
            label="Terms & Conditions"
          />
        </router-link>
        <router-link to="privacypolicy">
          <q-btn
            size="12px"
            class="text-secondary"
            flat
            label="Privacy Policy"
          />
        </router-link>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { auth } from "../utils/firebaseProxy";
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/user";
import { useSubStore } from "stores/subscription";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import JSConfetti from "js-confetti";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const userStore = useUserStore();
    const subStore = useSubStore();
    const jsConfetti = new JSConfetti();

    const { fetchUser, logOut, getUserData } = userStore;
    const {
      getCards,
      getPayments,
      resetSubState,
      getCustomerData,
      getSubscriptions,
      getSubscriptionPlans,
    } = subStore;
    const { user } = storeToRefs(userStore);
    const { active, subscriptionPlans, customer } = storeToRefs(subStore);
    const router = useRouter();

    const $q = useQuasar();

    // onMounted(() => {
    //   if ($q.localStorage.getItem("free_credits")) {
    //     const credits = $q.localStorage.getItem("free_credits");

    //     updateFreeCredits(credits.credits);
    //   }
    // });

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        $q.loading.show({
          message: "Fetching data. Please wait...",
        });
        await fetchUser(user);

        await getUserData(user.uid);

        if (!subscriptionPlans?.value?.length) await getSubscriptionPlans();

        await getCustomerData();

        await getSubscriptions();

        await getPayments();

        if (customer.value) await getCards();

        if (router.currentRoute.value.query?.sub) {
          jsConfetti.addConfetti();
          $q.dialog({
            title: "Success!",
            message: "You are now subscribed to the plan!",
            cancel: false,
          }).onDismiss(() => {
            router.replace({ query: "" });
          });
        }
        $q.loading.hide();
      } else {
        $q.loading.show({
          message: "Fetching data. Please wait...",
        });

        if (!subscriptionPlans?.value?.length) await getSubscriptionPlans();

        $q.loading.hide();
      }
    });

    async function signOut() {
      await logOut();
      resetSubState();
      router.push("/login");
    }

    return {
      user,
      active,
      signOut,
    };
  },
});
</script>
