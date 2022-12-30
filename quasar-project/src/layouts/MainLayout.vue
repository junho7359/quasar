<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-toolbar>
        <q-toolbar-title class="title"> Checkout </q-toolbar-title>
        <div class="step">Hyper > eCommerce > Checkout</div>
      </q-toolbar>
    </q-header>

    <q-page-container class="container">
      <div class="tabs">
        <span
          class="tab"
          :class="{ active: menuName === 'BillingPage' }"
          @click="menuName = 'BillingPage'"
        >
          <router-link to="/BillingPage">
            <div class="icon1">A</div>
            Billing Info
          </router-link>
        </span>

        <span
          class="tab"
          :class="{ active: menuName === 'ShippingPage' }"
          @click="menuName = 'ShippingPage'"
        >
          <router-link to="/ShippingPage">
            <div class="icon1">B</div>
            Shipping Info
          </router-link>
        </span>

        <span
          class="tab"
          :class="{ active: menuName === 'PaymentPage' }"
          @click="menuName = 'PaymentPage'"
        >
          <router-link to="/PaymentPage">
            <div class="icon1">C</div>
            Payment Info
          </router-link>
        </span>
      </div>

      <div class="content">
        <div>
          <router-view class="view" />
        </div>
        <div class="order">
          <div style="font-size: 15px; font-weight: 500">ORDER SUMMARY</div>
          <br />
          <br />
          <div>
            <span class="row1">
              <span class="picture">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
              </span>
              <span class="product"> Amazing Modern Chair </span>
              <span class="price"> $743.30 </span>
            </span>
          </div>
          <div class="seperate">
            <q-separator inset />
          </div>
          <div>
            <span class="row1">
              <span class="picture">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
              </span>
              <span class="product"> Amazing Modern Chair </span>
              <span class="price"> $198.00 </span>
            </span>
          </div>
          <div class="seperate">
            <q-separator inset />
          </div>
          <div>
            <span class="row1">
              <span class="picture">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
              </span>
              <span class="product"> Amazing Modern Chair </span>
              <span class="price"> $499.90 </span>
            </span>
          </div>
          <div class="seperate">
            <q-separator inset />
          </div>
          <span class="row2">
            <div class="sub">Sub Total:</div>
            <div class="price">$1071.29</div>
          </span>
          <div class="seperate">
            <q-separator inset />
          </div>
          <span class="row2">
            <div class="sub">Shipping:</div>
            <div class="price">FREE</div>
          </span>
          <div class="seperate">
            <q-separator inset />
          </div>
          <span class="row2">
            <div class="sub">Total:</div>
            <div class="price" fon>$1071.29</div>
          </span>
          <div class="seperate">
            <q-separator inset />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuName = ref("BillingPage");
    return {
      menuName,
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: $blue-1;
}
.title {
  padding: 20px 0px 20px 10px;
  color: $grey-7;
  font-size: 18px;
  font-weight: bold;
}
.header {
  padding: 10px 10px 10px 10px;
  background-color: $blue-1;
}
.step {
  color: $grey-6;
  word-spacing: 8px;
  font-size: 15px;
}

.container {
  color: black;
  background-color: white;
  margin: 20px;
}
.tabs {
  display: flex;
  margin: 20px;
}
.tab {
  background-color: $blue-2;
  font-weight: bold;
  flex-grow: 1;
}

a:visited {
  color: $grey-7;
}

.tab.active {
  background-color: $indigo-11;
  color: white;
}

.icon1 {
  padding: 10px 0px 0px 0px;
  text-align: center;
  text-decoration: none;
}
.tab a {
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 0px 0px 10px 0px;
}

a:hover {
  color: $indigo-12;
}
.content {
  padding: 0px 20px 0px 20px;
  display: flex;
  gap: 20px;
}
.content > div:first-child {
  width: 80%;
}
.order {
  color: $grey-7;
  margin-top: 10px;
  width: 30%;
  padding: 20px;
  border: 1px solid $grey-5;
  border-radius: 5px 5px 5px 5px / 5px 5px 5px 5px;
  height: 520px;
  font-weight: 500;
}
.row1 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.picture {
  width: 50px;
}
.product {
  flex: 30%;
}
.price {
  width: 70px;
  align-self: right;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
}
.seperate {
  margin: 20px 0px;
  width: 100%;
}
.row2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 60px;
}
</style>
