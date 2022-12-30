<template>
  <q-page>
    <p class="information">Payment Selection</p>
    <p class="explain">
      Fill the form below in oreder to send you order's invoice.
    </p>
    <div class="checkbox2">
      <div class="checking">
        <q-radio
          v-model="shape1"
          val="line1"
          label="Pay with Paypal"
          style="font-size: 15px; font-weight: bold; color: grey"
        />
        <div class="checkinfo">
          <div>
            You will be redirected to PayPal website to complete your purchase
            securely.
          </div>
        </div>
      </div>
      <div class="image">
        <img src="../assets/paypal.png" style="width: 120px" />
      </div>
    </div>

    <br />

    <div class="creditbox">
      <div class="credit">
        <div class="checking">
          <q-radio
            v-model="shape1"
            val="line2"
            label="Credit / Debit Card"
            style="font-size: 15px; font-weight: bold; color: grey"
          />
          <div class="checkinfo">
            <div>
              Safe Money transfer using your bank account. We<br />
              support mastercard, Visa, Discover and Stripe.
            </div>
          </div>
        </div>
        <div class="image">
          <img src="../assets/mastercard.jpg" style="width: 120px" />
        </div>
      </div>
      <br />
      <br />

      <div style="font-size: 15px; color: grey">
        Card Number
        <span>
          <q-input
            outlined
            v-mode="text"
            placeholder="e.g. 4242 4242 4242 4242"
          />
        </span>
      </div>

      <br />
      <br />
      <div>
        <span class="form1">
          <span class="town"> Name on Card </span>
          <span class="town"> Expiry date </span>
          <span class="town"> CVV </span>
        </span>
      </div>
      <div>
        <span class="form1">
          <span class="town">
            <q-input
              outlined
              v-mode="text"
              placeholder="Enter your first name"
            />
          </span>
          <span class="town">
            <q-input
              outlined
              v-mode="text"
              placeholder="Enter your last name"
            />
          </span>
          <span class="town">
            <q-input
              outlined
              v-mode="text"
              placeholder="Enter your last name"
            />
          </span>
        </span>
      </div>
    </div>

    <br />

    <div class="checkbox2">
      <div class="checking">
        <q-radio
          v-model="shape2"
          val="line3"
          label="Pay with Payoneer"
          style="font-size: 15px; font-weight: bold; color: grey"
        />
        <div class="checkinfo">
          <div>
            You will be redirected to PayPal website to complete your purchase
            securely.
          </div>
        </div>
      </div>
      <div class="image">
        <img src="../assets/payoneer.png" style="width: 120px" />
      </div>
    </div>

    <br />

    <div class="checkbox2">
      <div class="checking">
        <q-radio
          v-model="shape2"
          val="line4"
          label="Cash on Delivery"
          style="font-size: 15px; font-weight: bold; color: grey"
        />
        <div class="checkinfo">
          <div>
            You will be redirected to PayPal website to complete your purchase
            securely.
          </div>
        </div>
      </div>
      <div class="image">
        <img src="../assets/cod.png" style="width: 120px" />
      </div>
    </div>

    <div class="bottom">
      <div class="go">&larr; Back to Shopping Cart</div>
      <div class="click">
        <q-btn style="background-color: #ff0080; color: white">
          <q-icon left size="1em" name="money" />
          Complete Order
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      shape1: ref("line1"),
      shape2: ref("line3"),
    };
  },
};
</script>

<style lang="scss">
.information {
  font-size: 20px;
  font-weight: bold;
  color: grey;
}
.explain {
  color: $grey-6;
}

.checkbox2 {
  display: flex;
  padding: 20px;
  border: solid 1px $grey-5;
  border-radius: 5px 5px 5px 5px / 5px 5px 5px 5px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.creditbox {
  padding: 20px;
  border: solid 1px $grey-5;
  border-radius: 5px 5px 5px 5px / 5px 5px 5px 5px;
  width: 100%;
}
.credit {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.checking {
  width: 80%;
}
.checkinfo {
  color: $grey-7;
}
.form1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 15px;
  color: $grey-7;
}
.desc {
  display: block;
  width: 48%;
}
.town {
  display: block;
  width: 31%;
}
.click {
  margin-top: 40px;
  float: right;
}
</style>
