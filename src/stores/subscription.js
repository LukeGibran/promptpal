import { defineStore, storeToRefs } from "pinia";
import { loadStripe } from "@stripe/stripe-js";
import { useUserStore } from "./user";
import { orderBy as _orderBy } from "lodash";
import {
  db,
  doc,
  auth,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
  collection,
  onSnapshot,
} from "../utils/firebaseProxy";
import { Loading, Notify } from "quasar";
import { httpsCallable } from "firebase/functions";
import { functions } from "../utils/firebaseProxy";

export const useSubStore = defineStore("subscription", {
  state: () => ({
    subscriptionPlans: [],
    subscriptions: [],
    payments: [],
    customer: null,
    cards: [],
  }),
  getters: {
    active: (state) => {
      const useStore = useUserStore();
      const { user } = storeToRefs(useStore);

      if (user && user?.value?.data?.role == "admin") return true;

      if (!state.subscriptions.length) return false;

      return state.subscriptions[0].status == "active" ? true : false;
    },
    subName: (state) => state.subscriptions[0].items[0].price.product.name,
  },
  actions: {
    async getSubscriptionPlans() {
      this.subscriptionPlans = [];
      try {
        const ref = query(
          collection(db, "subscriptions"),
          where("active", "==", true)
        );

        const snap = await getDocs(ref);

        let i = 0;
        snap.forEach(async (subDoc) => {
          if (subDoc.exists()) {
            this.subscriptionPlans.push(subDoc.data());

            const priceRef = collection(db, `${subDoc.ref.path}/prices`);

            const prices = await getDocs(priceRef);

            prices.forEach((doc) => {
              if (doc.exists()) {
                let price = {
                  priceId: doc.id,
                  priceData: doc.data(),
                  price: doc.data()?.interval
                    ? `$${doc.data().unit_amount / 100} ${doc
                        .data()
                        .currency.toUpperCase()} / ${doc.data().interval}`
                    : `$${doc.data().unit_amount / 100}`,
                  // price: `${new Intl.NumberFormat("en-US", {
                  //   style: "currency",
                  //   currency: doc.data().currency,
                  // }).format((doc.data().unit_amount / 100).toFixed(0))}/${
                  //   doc.data().interval
                  // }`,
                };

                this.subscriptionPlans[i].id = subDoc.id;
                this.subscriptionPlans[i].pricing = price;
              }
            });

            i++;
          }
        });
      } catch (error) {
        Notify.create({
          message: "Something went wrong. Please refresh",
          color: "negative",
          position: "top-right",
        });
        console.log(error);
      }
    },

    async getSubscriptions() {
      const currentUser = auth.currentUser.uid;
      try {
        const ref = query(
          collection(db, `customers/${currentUser}/subscriptions`),
          where("status", "in", ["trialing", "active", "canceled"])
        );

        const snap = await getDocs(ref);

        let subs = [];
        snap.forEach((doc) => {
          subs.push(doc.data());
        });

        subs.sort((a, b) => b.created - a.created);

        this.subscriptions = subs;
      } catch (error) {
        Notify.create({
          message: "Something went wrong. Please refresh",
          color: "negative",
          position: "top-right",
        });
        console.log(error);
      }
    },

    async subscribe(plan) {
      Loading.show({
        message: "Please wait..",
      });

      const currentUser = auth.currentUser.uid;

      try {
        let data = {
          price: plan.pricing.priceId,
          success_url: `${window.location.origin}/#/subscription?sub=success`,
          cancel_url: `${window.location.origin}/#/subscription`,
          metadata: {
            plan: plan.id,
          },
        };

        const ref = collection(
          db,
          `customers/${currentUser}/checkout_sessions`
        );

        const sessionRef = await addDoc(ref, data);

        onSnapshot(ref, (docSnap) => {
          docSnap.forEach(async (doc) => {
            if (doc.id == sessionRef.id) {
              const { sessionId } = doc.data();

              if (sessionId) {
                const stripe = await loadStripe(process.env.STRIPE_API_KEY);
                stripe.redirectToCheckout({ sessionId });
              }
            }
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        Loading.hide();
      }
    },

    async getPayments() {
      const currentUser = auth.currentUser.uid;
      try {
        const ref = query(
          collection(db, `customers/${currentUser}/payments`),
          where("status", "==", "succeeded")
        );

        const snap = await getDocs(ref);

        let pays = [];
        snap.forEach((doc) => {
          pays.push(doc.data());
        });

        pays.sort((a, b) => b.created - a.created);

        this.payments = pays;
      } catch (error) {
        Notify.create({
          message: "Something went wrong. Please refresh",
          color: "negative",
          position: "top-right",
        });
        console.log(error);
      }
    },

    async getCustomerData() {
      const currentUser = auth.currentUser.uid;

      try {
        const ref = doc(db, "customers", currentUser);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          this.customer = snap.data();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async cancelSubscription(sub) {
      Loading.show({
        message: "Please wait...",
      });

      try {
        const cancelSub = httpsCallable(functions, "cancelSubscription");

        await cancelSub({ text: sub });

        await this.getSubscriptions();

        Notify.create({
          message: "You have successfully canceled your subscription",
          color: "warning",
          position: "top",
        });

        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
      } catch (error) {
        console.log(error);
      }
    },

    async getCustomerPortal() {
      const currentUser = auth.currentUser.uid;
      Loading.show({
        message: "Getting your info. Please wait...",
      });

      try {
        let getFunc = httpsCallable(functions, "customerPortal");

        const session = await getFunc({
          customer: this.customer.stripeId,
          url: `${window.location.origin}/#/subscription`,
        });

        window.open(session.data.url, "_self");
      } catch (error) {
        console.log(error);
      } finally {
        Loading.hide();
      }
    },

    async getCards() {
      try {
        let getFunc = httpsCallable(functions, "listAllCards");

        const cards = await getFunc({ customer: this.customer.stripeId });

        this.cards = cards.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    resetSubState() {
      this.subscriptionPlans = [];
      this.subscriptions = [];
      this.payments = [];
      this.customer = null;
      this.cards = [];
    },
  },
});
