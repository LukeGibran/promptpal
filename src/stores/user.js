import { defineStore } from "pinia";
import {
  db,
  doc,
  auth,
  setDoc,
  getDoc,
  addDoc,
  signOut,
  updateDoc,
  collection,
  updateEmail,
  updateProfile,
  updatePassword,
  EmailAuthProvider,
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  createUserWithEmailAndPassword,
} from "../utils/firebaseProxy";

import { Loading, Notify } from "quasar";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      loggedIn: false,
      data: null,
      id: null,
    },
    registering: false,
    loggingIn: false,
  }),
  getters: {
    affiliateLink: (state) =>
      `${window.location.origin}/#/register?ref=${state.user.id}`,
    hasCredits: (state) => {
      if (state.user && state.user?.value?.data?.credits == -1) return true;

      if (state.user && state.user?.data?.credits)
        return !!state.user.data.credits;
    },
  },
  actions: {
    async register({
      email,
      refBy,
      lastName,
      password,
      firstName,
      industryId,
      occupation = "None",
    }) {
      this.registering = true;

      let data = {
        refBy,
        email,
        lastName,
        firstName,
        occupation,
        credits: 3,
        industryId,
        role: "user",
        updatedAt: Date.now(),
        displayName: `${firstName} ${lastName[0]}.`,
      };

      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (response) {
          updateProfile(auth.currentUser, {
            displayName: `${firstName} ${lastName[0]}.`,
          });

          await setDoc(doc(db, "users", response.user.uid), data);
          this.user.data = {
            ...data,
          };
        } else {
          throw new Error("Unable to login");
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        this.registering = false;
      }
    },

    async logIn({ email, password }) {
      this.loggingIn = true;

      try {
        await signInWithEmailAndPassword(auth, email, password);

        auth.onAuthStateChanged(async (user) => {
          const ref = collection(db, "logins");
          await addDoc(ref, { user: user.uid, date: Date.now() });
          this.loggingIn = false;
        });
      } catch (error) {
        throw new Error(error);
      } finally {
        this.loggingIn = false;
      }
    },

    async logOut() {
      await signOut(auth);
      this.user.loggedIn = false;
      this.user.data = null;
    },

    async getUserData(user) {
      try {
        const ref = doc(db, "users", user);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          this.user.data = {
            ...this.user.data,
            ...snap.data(),
          };
        } else {
          this.user.data = null;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchUser(user) {
      if (user) {
        this.user.loggedIn = user !== null;
        this.user.id = user.uid;
      } else {
        this.user.data = null;
      }
    },

    async updateBasicInfos({
      firstName,
      lastName,
      occupation,
      industryId,
      email,
    }) {
      Loading.show({
        message: "Updating your profile..",
      });
      try {
        const ref = doc(db, "users", auth.currentUser.uid);
        const data = {
          email,
          lastName,
          firstName,
          occupation,
          industryId,
          updatedAt: Date.now(),
          displayName: `${firstName} ${lastName[0]}.`,
        };

        await updateDoc(ref, data);

        await updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName[0]}.`,
        });

        this.user.data = {
          ...this.user.data,
          ...data,
        };

        Notify.create({
          message: "Successfully updated your profile!",
          color: "positive",
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
        Notify.create({
          message: "Something went wrong, please try again.",
          color: "negative",
          position: "top-right",
        });
      } finally {
        Loading.hide();
      }
    },

    async updateEmail({ email, password }) {
      Loading.show({
        message: "Updating your Email..",
      });
      try {
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          password
        );
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updateEmail(auth.currentUser, email);
        Notify.create({
          message: "Successfully updated your email!",
          color: "positive",
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
        Notify.create({
          message: "Wrong password given, please try again.",
          color: "negative",
          position: "top-right",
        });
        throw new Error();
      } finally {
        Loading.hide();
      }
    },

    async updateUserPass({ newPass, password }) {
      Loading.show({
        message: "Updating your password..",
      });
      try {
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          password
        );
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updatePassword(auth.currentUser, newPass);
        Notify.create({
          message: "Successfully updated your password!",
          color: "positive",
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
        Notify.create({
          message: "Wrong password given, please try again.",
          color: "negative",
          position: "top-right",
        });
        throw new Error();
      } finally {
        Loading.hide();
      }
    },
    async updateCredits(credit) {
      try {
        const ref = doc(db, "users", auth.currentUser.uid);
        await updateDoc(ref, { credits: credit });

        this.user.data.credits = credit;
      } catch (error) {
        console.log(errror);
      }
    },

    // updateFreeCredits(credit) {
    //   this.freeCredits = credit;
    //   if (LocalStorage.getItem("free_credits")) {
    //     LocalStorage.set("free_credits", { credits: credit, date: Date.now() });
    //   }
    // },
  },
});
