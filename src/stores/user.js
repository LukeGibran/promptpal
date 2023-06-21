import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
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
    },
    registering: false,
    loggingIn: false,
    freeCredits: 0,
  }),
  actions: {
    async register({
      email,
      password,
      firstName,
      lastName,
      occupation = "None",
      industryId,
    }) {
      this.registering = true;

      let data = {
        email,
        occupation,
        credits: 3,
        role: "user",
        firstName,
        lastName,
        industryId,
        displayName: `${firstName} ${lastName[0]}.`,
        updatedAt: Date.now(),
      };

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response) {
        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName[0]}.`,
        });

        try {
          await setDoc(doc(db, "users", response.user.uid), data);
          this.user.data = {
            ...data,
          };
        } catch (error) {
          console.log(error);
          throw new Error("Unable to register user");
        } finally {
          this.registering = false;
        }
      } else {
        this.registering = false;
        throw new Error("Unable to register user");
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
      Loading.show({
        message: "Getting user data..",
      });
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
      } finally {
        Loading.hide();
      }
    },

    async fetchUser(user) {
      if (user) {
        this.user.loggedIn = user !== null;
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

    updateFreeCredits(credit) {
      this.freeCredits = credit;
      if (LocalStorage.getItem("free_credits")) {
        LocalStorage.set("free_credits", { credits: credit, date: Date.now() });
      }
    },
  },
});
