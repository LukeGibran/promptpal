import { defineStore } from "pinia";

import {
  collection,
  getDocs,
  orderBy,
  addDoc,
  query,
  where,
  db,
} from "../utils/firebaseProxy";

export const useConversationStore = defineStore("conversation", {
  state: () => ({
    conversations: [],
    gettingConversations: false,
  }),
  actions: {
    async addConversation(data, user) {
      this.addingSuggestion = true;
      try {
        const ref = collection(db, "conversations");
        await addDoc(ref, {
          user,
          ...data,
          updateAt: Date.now(),
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getConversations(user) {
      this.conversations = [];
      this.gettingConversations = true;
      try {
        const ref = query(
          collection(db, "conversations"),
          where("user", "==", user),
          orderBy("updateAt", "asc")
        );

        const snap = await getDocs(ref);

        snap.forEach((doc) => {
          if (doc.exists()) {
            this.conversations.push(doc.data());
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.gettingConversations = false;
      }
    },
  },
});
