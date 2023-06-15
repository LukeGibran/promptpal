import { defineStore } from "pinia";
import { db, collection, getDocs, addDoc } from "../utils/firebaseProxy";
import { Notify } from "quasar";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menus: [],
    menu: "",
    subMenus: [],
    loading: false,
    loadingMenus: false,
    addingSubMenu: false,
    gettingSubMenus: false,
  }),
  actions: {
    async addMenu() {
      this.loading = true;
      let data = {};
      data.menu = this.menu;
      data.uptatedAt = Date.now();
      try {
        const ref = collection(db, "menus");
        await addDoc(ref, data);
        Notify.create({
          message: "Menu Added Successfully!",
          color: "positive",
          position: "top-right",
        });
        this.menus.push(this.menu);
      } catch (error) {
        console.log(error);
        Notify.create({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
      } finally {
        this.loading = false;
        this.menu = "";
      }
    },

    async getMenus() {
      this.loadingMenus = true;
      try {
        const ref = collection(db, "menus");
        const snap = await getDocs(ref);

        snap.forEach((doc) => {
          this.menus.push(doc.data().menu);
        });
      } catch (error) {
        console.log(error);
        Notify.create({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
      } finally {
        this.loadingMenus = false;
      }
    },

    async addSubMenu(data) {
      this.addingSubMenu = true;
      return new Promise(async (res, rej) => {
        try {
          const ref = collection(db, "submenus");
          await addDoc(ref, data);
          Notify.create({
            message: "Sub Menu Added Successfully!",
            color: "positive",
            position: "top-right",
          });
          this.subMenus.push(data);
          res();
        } catch (error) {
          console.log(error);
          Notify.create({
            message: "Something went wrong. Please try again",
            color: "negative",
            position: "top-right",
          });
          rej();
        } finally {
          this.addingSubMenu = false;
        }
      });
    },

    async getSubMenus() {
      this.gettingSubMenus = true;
      try {
        const ref = collection(db, "submenus");
        const snap = await getDocs(ref);

        snap.forEach((doc) => {
          this.subMenus.push(doc.data());
        });
      } catch (error) {
        console.log(error);
        Notify.create({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
      } finally {
        this.gettingSubMenus = false;
      }
    },
  },
});
