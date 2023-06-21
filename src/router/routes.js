import AddPrompt from "src/pages/AddPrompt.vue";
import LoginPage from "src/pages/LoginPage.vue";
import RegisterPage from "src/pages/RegisterPage.vue";
import ProfilePage from "src/pages/Profile.vue";
import TermsService from "src/pages/TermsService.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: { requiresAuth: false },
      },
      {
        path: "/add",
        component: AddPrompt,
        meta: { requiresAuth: true },
      },
      {
        path: "/profile",
        component: ProfilePage,
        meta: { requiresAuth: true },
      },
      {
        path: "/login",
        component: LoginPage,
        meta: { requiresAuth: false },
      },
      {
        path: "/register",
        component: RegisterPage,
        meta: { requiresAuth: false },
      },
      {
        path: "/terms",
        component: TermsService,
        meta: { requiresAuth: false },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
