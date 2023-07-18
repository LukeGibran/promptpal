<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <router-link to="/">
          <q-img
            src="~assets/logo.png"
            style="height: 75px; width: 130px"
            fit="scale-down"
            class="gt-sm"
          />
        </router-link>
        <router-link to="/">
          <q-img
            src="~assets/logo.png"
            style="height: 55px; width: 90px"
            fit="scale-down"
            class="lt-md"
          />
        </router-link>
        <div
          class="credit-border row items-center justif-center no-wrap lt-md"
          :class="
            active || hasCredits
              ? 'text-positive active'
              : 'text-negative inactive'
          "
          v-if="user.data && user.loggedIn"
          style="gap: 5px"
        >
          <q-icon name="generating_tokens" />
          {{
            active
              ? "unli"
              : hasCredits
              ? user.data.credits == -1
                ? "unli"
                : user.data.credits
              : "none"
          }}
        </div>
        <div class="q-mx-lg"></div>
        <router-link v-if="user.data && user.loggedIn" to="/">
          <q-btn class="text-info gt-sm" flat label="Prompt" />
        </router-link>
        <router-link
          to="subscription"
          v-if="user.data && user?.data?.role != 'admin'"
        >
          <q-btn class="text-primary gt-sm" flat label="Subscription" />
        </router-link>
        <router-link to="subscription" v-if="!user.data">
          <q-btn class="text-primary gt-sm" flat label="Our Pricing" />
        </router-link>
        <q-btn
          class="text-info gt-sm"
          flat
          label="Suggest a Prompt"
          v-if="user.data && user.loggedIn"
          @click="suggestionPrompt = true"
        />

        <q-toolbar-title class="text-dark"> </q-toolbar-title>
        <div
          class="credit-border gt-sm"
          :class="
            active || hasCredits
              ? 'text-positive active'
              : 'text-negative inactive'
          "
          v-if="user.data && user.loggedIn"
        >
          <q-icon name="generating_tokens" />
          Credits:
          {{
            active
              ? "Unlimited"
              : hasCredits
              ? user.data.credits == -1
                ? "Unlimited"
                : user.data.credits
              : "None"
          }}
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
          class="text-info gt-sm"
          flat
          label="Login"
          to="login"
        />
        <q-btn
          v-if="!user.loggedIn"
          class="text-primary gt-sm"
          flat
          label="Register"
          to="register"
        />
        <q-btn
          flat
          @click="drawer = !drawer"
          class="lt-md"
          v-if="!user.data && !user.loggedIn"
          round
          dense
          icon="menu"
          color="grey-9"
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
            <q-item @click="$router.push('/')" clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar
                  icon="home"
                  color="primary"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-size: 16px">Prompt</q-item-label>
                <q-item-label caption>Enter a new prompt</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item
              @click="$router.push('subscription')"
              clickable
              v-close-popup
              v-if="user.data.role != 'admin'"
            >
              <q-item-section avatar>
                <q-avatar
                  icon="payments"
                  color="info"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-size: 16px"
                  >Subcriptions</q-item-label
                >
                <q-item-label caption>View your subscriptions</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator v-if="user.data.role != 'admin'" />
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
            <q-separator v-if="user.data.role != 'admin'" />
            <q-item
              v-if="user.data.role != 'admin'"
              @click="suggestionPrompt = true"
              clickable
              v-close-popup
            >
              <q-item-section avatar>
                <q-avatar
                  icon="lightbulb"
                  color="yellow-9"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-size: 16px">Suggest</q-item-label>
                <q-item-label caption>You can suggest a prompt</q-item-label>
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
    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      overlay
      bordered
      class="lt-md"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      v-if="!user.data && !user.loggedIn"
    >
      <q-scroll-area class="fit">
        <q-list v-if="!user.data && !user.loggedIn">
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable @click="$router.push(menuItem.route)" v-ripple>
              <q-item-section avatar>
                <q-avatar
                  :color="menuItem.iconColor"
                  text-color="white"
                  :icon="menuItem.icon"
                />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
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
            class="text-primary gt-sm"
            flat
            label="Terms & Conditions"
          />
        </router-link>
        <router-link to="privacypolicy">
          <q-btn
            size="12px"
            class="text-secondary gt-sm"
            flat
            label="Privacy Policy"
          />
        </router-link>
        <router-link to="terms">
          <q-btn
            size="xs"
            class="text-primary lt-md"
            flat
            label="Terms & Conditions"
          />
        </router-link>
        <router-link to="privacypolicy">
          <q-btn
            size="xs"
            class="text-secondary lt-md"
            flat
            label="Privacy Policy"
          />
        </router-link>
      </q-toolbar>
    </q-footer>
    <q-dialog v-model="suggestionPrompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Suggest a prompt</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            type="textarea"
            outlined
            dense
            v-model="suggestion"
            autofocus
            @keyup.enter="suggestionPrompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn color="grey-8" flat label="Close" v-close-popup />
          <q-btn
            :loading="addingSuggestion"
            :disable="!suggestion"
            color="secondary"
            flat
            label="Suggest"
            @click="suggest"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { auth } from "../utils/firebaseProxy";
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/user";
import { useSubStore } from "stores/subscription";
import { useRouter } from "vue-router";
import { useMenuStore } from "stores/menu";
import { useConversationStore } from "stores/conversation";
import { useQuasar } from "quasar";
import JSConfetti from "js-confetti";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const drawer = ref(false);
    const suggestion = ref("");
    const suggestionPrompt = ref(false);
    const userStore = useUserStore();
    const subStore = useSubStore();
    const menuStore = useMenuStore();
    const convoStore = useConversationStore();
    const jsConfetti = new JSConfetti();
    const { addingSuggestion } = storeToRefs(menuStore);
    const { addSuggestion } = menuStore;

    const menuList = [
      {
        icon: "login",
        label: "Login",
        separator: false,
        iconColor: "primary",
        route: "login",
      },
      {
        icon: "edit_note",
        label: "Register",
        separator: true,
        iconColor: "secondary",
        route: "register",
      },
      {
        icon: "payments",
        label: "Our Pricing",
        separator: false,
        iconColor: "primary",
        route: "subscription",
      },
      {
        icon: "feed",
        label: "Terms & Condition",
        separator: false,
        iconColor: "secondary",
        route: "terms",
      },
      {
        icon: "policy",
        label: "Privay Policy",
        separator: false,
        iconColor: "primary",
        route: "privacypolicy",
      },
    ];

    const { fetchUser, logOut, getUserData } = userStore;
    const {
      getCards,
      getPayments,
      resetSubState,
      getCustomerData,
      getSubscriptions,
      getSubscriptionPlans,
    } = subStore;
    const { user, hasCredits } = storeToRefs(userStore);
    const { active, subscriptionPlans, customer } = storeToRefs(subStore);
    const { getConversations, getFileConversations } = convoStore;
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

        await getConversations(user.uid);

        await getFileConversations(user.uid);

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

    async function suggest() {
      if (!suggestion.value) return;

      await addSuggestion(suggestion.value, user.value.data);

      suggestion.value = "";
    }

    return {
      user,
      drawer,
      active,
      signOut,
      menuList,
      hasCredits,
      suggest,
      suggestion,
      addingSuggestion,
      suggestionPrompt,
    };
  },
});
</script>
