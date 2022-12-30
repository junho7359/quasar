<template>
  <q-page>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <p class="information">Billing information</p>
      <p class="explain">
        Fill the form below in oreder to send you order's invoice.
      </p>
      <br />
      <form>
        <div>
          <span class="form1">
            <span class="desc"> First Name </span>
            <span class="desc"> Last Name </span>
          </span>
        </div>
        <div class="row12">
          <span class="form1">
            <span class="desc">
              <q-input
                outlined
                v-model="firstname"
                placeholder="Enter your first name"
                lazy-rules
                :rules="[
                  (value) =>
                    (value && value.length > 0) || 'Please enter firstname',
                ]"
              />
            </span>
            <span class="desc">
              <q-input
                outlined
                v-model="lastname"
                placeholder="Enter your last name"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter lastname',
                ]"
              />
            </span>
          </span>
        </div>
        <br />
        <div>
          <span class="form1">
            <span class="desc"> Email address </span>
            <span class="desc"> Phone </span>
          </span>
        </div>
        <div>
          <span class="form1">
            <span class="desc">
              <q-input
                outlined
                v-model="email"
                placeholder="Enter your email"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter email',
                ]"
              />
            </span>
            <span class="desc">
              <q-input
                outlined
                v-model="phone"
                mask="(###)####-####"
                fill-mask
              />
            </span>
          </span>
        </div>
        <br />
        <div class="address">
          Address
          <span>
            <q-input
              outlined
              v-model="address"
              placeholder="Enter your state"
            />
          </span>
        </div>
        <br />
        <div>
          <span class="form1">
            <span class="town"> Town/City </span>
            <span class="town"> State </span>
            <span class="town"> Zip/Postal code </span>
          </span>
        </div>
        <div>
          <span class="form1">
            <span class="town">
              <q-input
                outlined
                v-model="text"
                placeholder="Enter your first name"
              />
            </span>
            <span class="town">
              <q-input
                outlined
                v-model="state"
                placeholder="Enter your last name"
              />
            </span>
            <span class="town">
              <q-input
                outlined
                v-model="zip"
                placeholder="Enter your last name"
              />
            </span>
          </span>
        </div>
        <br />
        <div class="address">
          Country
          <span>
            <q-select
              outlined
              v-model="country"
              :options="options"
              placeholder="Select..."
            />
          </span>
        </div>
        <br />
        <div class="address">
          Order Notes:
          <span class="note">
            <q-input
              outlined
              v-model="order"
              type="textarea"
              placeholder="Write some note.."
            />
          </span>
        </div>
      </form>
      <br />
      <div class="bottom">
        <div class="go">&larr; Back to Shopping Cart</div>
        <div class="click">
          <q-btn type="submit" style="background-color: #ff0080; color: white">
            <q-icon left size="1em" name="shopping_cart" />
            Proceed to Shipping
          </q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const firstname = ref(null);
    const lastname = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const address = ref(null);
    const town = ref(null);
    const state = ref(null);
    const zip = ref(null);
    const country = ref(null);
    const order = ref(null);

    return {
      firstname,
      lastname,
      email,
      phone,
      address,
      town,
      state,
      zip,
      country,
      order,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        firstname.value = null;
        lastname.value = null;
        accept.value = false;
      },
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
.form1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.desc {
  display: block;
  width: 48%;
}
.address {
  display: block;
  width: 100%;
}
.town {
  display: block;
  width: 31%;
}
.bottom {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.go {
  display: block;
  font-weight: 500;
  color: $grey-6;
  font-size: 15px;
}
.click {
  display: block;
}
</style>
