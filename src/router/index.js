import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
//import Book from "../views/CreateBook.vue";
import CreateAdmin from "../views/CreateAdmin.vue";
import CreateUser from "../views/CreateUser.vue";
import BookList from "../views/BookList.vue";
import UserList from "../views/UserList.vue";
import Transaction from "../views/Transaction.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/createBook",
    name: "Book",
    component: () =>
      import(/* webpackChunkName: "book" */ "../views/CreateBook.vue")
  },
  {
    path: "/createAdmin",
    name: "createAdmin",
    component: CreateAdmin
  },
  {
    path: "/createUser",
    name: "createUser",
    component: CreateUser
  },
  {
    path: "/bookList",
    name: "bookList",
    component: BookList
  },
  {
    path: "/userList",
    name: "userList",
    component: UserList
  },
  {
    path: "/transaction",
    name: "transaction",
    component: Transaction
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
