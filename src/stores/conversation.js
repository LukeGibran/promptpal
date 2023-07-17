import { defineStore } from "pinia";

import {
  collection,
  arrayUnion,
  updateDoc,
  getDocs,
  orderBy,
  addDoc,
  query,
  where,
  doc,
  db,
} from "../utils/firebaseProxy";

export const useConversationStore = defineStore("conversation", {
  state: () => ({
    conversations: [],
    fileConversations: [],
    gettingConversations: false,
  }),
  actions: {
    async addConversation(data, user) {
      try {
        const ref = collection(db, "conversations");
        await addDoc(ref, {
          user,
          ...data,
          archive: false,
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
          where("archive", "==", false),
          orderBy("updateAt", "asc")
        );

        const snap = await getDocs(ref);

        snap.forEach(async (doc) => {
          if (doc.exists()) {
            this.conversations.push({ ...doc.data(), id: doc.id });
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.gettingConversations = false;
      }
    },

    async addFileConversation(data, user) {
      let d = {
        user,
        ...data,
        updateAt: Date.now(),
      };

      try {
        const ref = collection(db, "fileconversations");
        await addDoc(ref, d);
        this.fileConversations.push(d);
      } catch (error) {
        console.log(error);
      }
    },

    async getFileConversations(user) {
      this.fileConversations = [];
      try {
        const ref = query(
          collection(db, "fileconversations"),
          where("user", "==", user),
          orderBy("updateAt", "asc")
        );

        const snap = await getDocs(ref);

        snap.forEach((doc) => {
          if (doc.exists()) {
            this.fileConversations.push(doc.data());
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    async archiveChatAsync(id) {
      try {
        const ref = doc(db, "conversations", id);
        await updateDoc(ref, { archive: true });
      } catch (error) {
        console.log(error);
      }
    },

    async archiveNewConv(item) {
      try {
        const ref = query(
          collection(db, "conversations"),
          where("user", "==", item.user),
          where("date", "==", item.date),
          orderBy("updateAt", "asc")
        );
        const snap = await getDocs(ref);

        snap.forEach(async (doc) => {
          if (doc.exists()) {
            console.log(doc.data());
            this.archiveChatAsync(doc.id);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    async updatefileConvo(sourceId, message) {
      try {
        const ref = query(
          collection(db, "fileconversations"),
          where("sourceId", "==", sourceId)
        );
        const snap = await getDocs(ref);

        snap.forEach(async (doc) => {
          if (doc.exists()) {
            console.log(doc.data());
            await updateDoc(doc.ref, {
              messages: arrayUnion(message),
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
