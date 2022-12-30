<template>
  <q-page>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <p class="information">Saved Address</p>
      <p class="explain">
        Fill the form below in oreder to send you order's invoice.
      </p>
      <div class="allbox">
        <div class="checkbox">
          <q-radio
            v-model="shape3"
            val="line5"
            label="Home"
            style="font-size: 15px; font-weight: bold; color: grey"
          />

          <br />
          <br />

          <div class="checkinfo">
            <div style="font-weight: 500">Stanley Jones</div>
            <div>795 Folsom Ave, Suite 600</div>
            <div>San Francisco, CA 94107</div>
            <div>P: (123) 456-7890</div>
          </div>
        </div>
        <div class="checkbox">
          <q-radio
            v-model="shape3"
            val="line6"
            label="office"
            style="font-size: 15px; font-weight: bold; color: grey"
          />

          <br />
          <br />

          <div class="checkinfo">
            <div style="font-weight: 500">Stanley Jones</div>
            <div>795 Folsom Ave, Suite 600</div>
            <div>San Francisco, CA 94107</div>
            <div>P: (123) 456-7890</div>
          </div>
        </div>
      </div>
      <br />
      <p class="information">Add New address</p>
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
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter first name',
                ]"
              />
            </span>
            <span class="desc">
              <q-input
                outlined
                v-mode="lastname"
                placeholder="Enter your last name"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter last name',
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
                v-mode="Phone"
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
                v-model="town"
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
      </form>
      <br />
      <p class="information">Shipping Method</p>
      <p class="explain">
        Fill the form below in oreder to send you order's invoice.
      </p>
      <br />
      <div class="allbox">
        <div class="checkbox">
          <q-radio
            v-model="shape4"
            val="line7"
            label="Standard Delivery - FREE"
            style="font-size: 15px; font-weight: bold; color: grey"
          />
          <div class="checkinfo">
            <div>
              Estimated 1-2 days shipping (Duties and tax may be due upon
              delivery)
            </div>
          </div>
        </div>
        <div class="checkbox">
          <q-radio
            v-model="shape4"
            val="line8"
            label="office"
            style="font-size: 15px; font-weight: bold; color: grey"
          />
          <div class="checkinfo">
            <div>
              Estimated 1-2 days shipping (Duties and tax may be due upon
              delivery)
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="go">&larr; Back to Shopping Cart</div>
        <div class="click">
          <q-btn type="submit" style="background-color: #ff0080; color: white">
            <q-icon left size="1em" name="money" />
            Continue to Payment
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
.allbox {
  display: flex;
  justify-content: space-between;
}
.checkbox {
  padding: 20px;
  border: solid 1px $grey-5;
  border-radius: 5px 5px 5px 5px / 5px 5px 5px 5px;
  width: 48%;
}
.checkinfo {
  padding-left: 30px;
  color: $grey-7;
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
.click {
  margin-top: 40px;
  float: right;
}
</style>
