import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/HomePage"),
  },
  {
    path: "/cartList",
    name: "CartList",
    component: () =>
      import(/* webpackChunkName: "cartList" */ "../views/cartList/CartList"),
  },
  {
    path: "/orderConfirmation/:id",
    name: "OrderConfirmation",
    component: () =>
      import(
        /* webpackChunkName: "orderConfirmation" */ "../views/orderConfirmation/OrderConfirmation"
      ),
  },
  {
    path: "/orderList",
    name: "OrderList",
    component: () =>
      import(
        /* webpackChunkName: "orderList" */ "../views/orderList/OrderList"
      ),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "../views/shop/Shop"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/register/RegisterPage"
      ),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/LoginPage"),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/address",
    name: "Address",
    component: () =>
      import(/* webpackChunkName: "address" */ "../views/address/Address"),
  },
  {
    path: "/addressEdit",
    name: "AddressEdit",
    component: () =>
      import(
        /* webpackChunkName: "addressEdit" */ "../views/addressEdit/AddressEdit"
      ),
  },
  {
    path: "/addressSelect",
    name: "addressSelect",
    component: () =>
      import(
        /* webpackChunkName: "addressSelect" */ "../views/addressSelect/AddressSelect"
      ),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = name === "Login" || name === "Register";
  isLogin || isLoginOrRegister ? next() : next({ name: "Login" });
});

export default router;
