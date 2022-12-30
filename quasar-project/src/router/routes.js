const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "BillingPage",
        component: () => import("../pages/BillingPage.vue"),
      },
      {
        path: "ShippingPage",
        component: () => import("../pages/ShippingPage.vue"),
      },
      {
        path: "PaymentPage",
        component: () => import("../pages/PaymentPage.vue"),
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
