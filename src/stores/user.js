import { defineStore } from "pinia";
import {
  auth,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  getDoc,
  doc,
  db,
  collection,
  addDoc,
} from "../utils/firebaseProxy";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      loggedIn: false,
      data: null,
    },
    registering: false,
    loggingIn: false,
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
      } else {
        this.user.data = null;
      }
    },
  },
});
