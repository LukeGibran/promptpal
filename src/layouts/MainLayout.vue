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
        <router-link to="/">
          <q-btn class="text-info" flat label="Home" />
        </router-link>
        <router-link to="">
          <q-btn class="text-primary" flat label="Terms & Service" />
        </router-link>
        <q-toolbar-title class="text-dark"> </q-toolbar-title>
        <div
          class="custom-border credit-border"
          :class="
            user?.data?.credits
              ? 'text-positive active'
              : 'text-negative inactive'
          "
          v-if="user.data && user.loggedIn"
        >
          <i class="material-icons">generating_tokens</i> Credits:
          {{ user?.data?.credits }}
        </div>
        <div class="custom-border credit-border free">
          <i class="material-icons">generating_tokens</i> Free Credits: 3
        </div>
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
          icon="person"
          class="q-mr-lg"
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
            <q-item v-if="user.data.role == 'admin'" clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar
                  icon="add"
                  color="positive"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section @click="$router.push('add')">
                <q-item-label style="font-size: 16px">Add</q-item-label>
                <q-item-label caption>Add new Menu/sub topic</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar
                  icon="logout"
                  color="negative"
                  text-color="white"
                  size="md"
                />
              </q-item-section>
              <q-item-section @click="signOut()">
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
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { auth } from "../utils/firebaseProxy";
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/user";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const userStore = useUserStore();
    const { fetchUser, logOut, getUserData } = userStore;
    const { user } = storeToRefs(userStore);
    const router = useRouter();

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await fetchUser(user);

        await getUserData(user.uid);
      }
    });

    async function signOut() {
      await logOut();
      router.push("/login");
    }

    return {
      user,
      signOut,
    };
  },
});
</script>
