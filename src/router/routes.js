import ChatPage from "src/pages/ChatPage.vue";
import AddPrompt from "src/pages/AddPrompt.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/add",
        component: AddPrompt,
      },
    ],
  },
  {
    path: "/chat",
    component: ChatPage,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
