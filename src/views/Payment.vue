<template>
  <div class="col-md-11 m-auto">
    <div class="mt-3" v-show="ordercompl">
      
      <div class="col-md-4 m-auto card p-5" style="border-radius:5px">
        <qrcode-vue :value="value" :size="300" level="H" />
      </div>
      <p class="mt-2" style="font-size:14px;font-weight:600;">Show this QR to cashiers or store <br> Delivery Executives to process your order!</p>
    </div>
    <div class="col-md-12 row" v-if="!ordercompl">
      <!-- left -->
      <div class="col-md-6">
        <p style="text-align:left;font-weight:700" >Delivery Info</p>
        <div class="col-md-12 border m-0 p-0" style="border-radius:5px">
          <div class="col-md-12 m-0 p-0 p-3"  >
            <div class="d-flex justify-content-between">
              <p class="mb-1" style="color:grey;font-size:14px;font-weight:600">Email</p>
              <p class="mb-1" style="font-size:15px;font-weight:600;text-align:left">{{ data.email }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="mb-0" style="color:grey;font-size:14px;font-weight:600">Phone</p>
              <p class="mb-0"  style="font-size:15px;font-weight:600;text-align:left">{{ data.contactNumber }}</p>
            </div>
          </div>

          <hr class="m-0 mb-1 p-0" style="color:grey">

          <div class="col-md-12 m-0 p-3">
            <div class="d-flex justify-content-between">
              <div>
                <p style="color:grey;font-size:14px;font-weight:600">Delivery</p>
              </div>
              <div style="text-align:left">
                <div>
                  <input type="radio" value="pickup" v-model="selectType" />
                  <label for="" style="margin-left: 10px;font-size:15px;font-weight:600">Pickup</label>
                </div>
                <div >
                  <input
                    class="ml-3"
                    type="radio"
                    value="delivery"
                    v-model="selectType"
                  />
                  <label for="" style="margin-left: 10px;font-size:15px;font-weight:600" >Delivery Service</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- address with modal -->
        
        <div class="col-md-12 m-0 p-0" >
          <div class="border p-3 my-3" style="border-radius: 5px" v-show="showaddr">
            <div class="d-flex mb-2 justify-content-between">
            <div>
              <p class="mb-0 pl-0 ml-0" style="font-size:15px;font-weight:600">Select delivery address</p>
            </div>
            <div>
              <button @click="editAddAddress('')"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
          </div>
            <div
              class="card p-3 mb-2 col-md-12"
              v-for="data in addrarr"
              :key="data.addressId"
            >
              <div class="d-flex justify-content-between">
                <div>
                  <p @click="removeAddress(data.addressId)">
                    <i class="fa fa-trash-o"></i>
                  </p>
                </div>
                <div>
                  <input type="radio" @click="selAddress(data)" />
                  <p class="mb-0" style="font-size:13px;color:grey">{{ data.tag }}</p>
                  <p v-if="data.defaultDeliveryAddress" style="font-size:13px;color:grey">Default Address</p>
                </div>
                <div>
                  <p @click="editAddAddress(data)">
                    <i class="fa fa-pencil"></i>
                  </p>
                </div>
              </div>
              <div style="text-align: left">
                <p class="mb-1">
                  <strong style="text-transform: capitalize">{{
                    data.contactPerson
                  }}</strong>
                </p>
                <p class="mb-1" style="font-size:13px;color:grey">
                  {{ data.addressLine1 }} {{ data.addressLine2 }}
                  {{ data.addressLine3 }}
                </p>
                <p class="mb-1" style="font-size:13px;color:grey">{{ data.city }} - {{ data.pinCode }}</p>
                <p class="mb-1" style="font-size:13px;color:grey">
                  {{ data.district }} {{ data.state }},{{ data.country }}
                </p>
                <p class="mb-0" style="font-size:13px;">
                  <strong>Landmark: </strong>{{ data.landmark }}
                </p>
              </div>
            </div>
          </div>
         
          <div class=" p-1" v-for="data in addrarr" :key="data.addressId">
            <div class="col-md-12 d-flex">
              <div
                class="col-md-4 mt-4 pt-5 pr-0 mr-0 text-right align-text-bottom"
              >
                <div class="mt-1">
                  <b-modal
                    v-model="clickededit"
                    id="modal-scrollable"
                    scrollable
                    size="xl"
                    class="p-5"
                    title="Edit address"
                    no-close-on-esc
                    hide-footer
                  >
                    <b-form>
                      <div class="col-md-12 row">
                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="Name:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.name"
                              placeholder="Enter name"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-1"
                            label="Phone number:"
                            label-for="input-1"
                          >
                            <b-form-input
                              id="input-1"
                              v-model="form.phno"
                              type="number"
                              placeholder="Enter phone number"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="Enter Address Line 1:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.addrlin1"
                              placeholder="Enter Address Line 1"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="Enter Address Line 2:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.addrlin2"
                              placeholder="Enter Address Line 2"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="Enter Address Line 3:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.addrlin3"
                              placeholder="Enter Address Line 3"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="City:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.city"
                              placeholder="Enter city"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="District:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.district"
                              placeholder="Enter district"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="State:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.state"
                              placeholder="Enter state"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="Country:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.country"
                              placeholder="Enter country"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="PIN Code:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.pincode"
                              placeholder="Enter PIN code"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="Landmark:"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.landmark"
                              placeholder="Enter landmark"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            id="input-group-2"
                            label="Enter label: (eg. Home, Office, etc.)"
                            label-for="input-2"
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.label"
                              placeholder="Enter label"
                              required
                            ></b-form-input>
                          </b-form-group>
                        </div>

                        <div class="col-md-6 mb-3">
                          <b-form-group
                            label="Delivery type"
                            v-slot="{ ariaDescribedby }"
                          >
                            <b-form-radio
                              v-model="form.selected"
                              :aria-describedby="ariaDescribedby"
                              name="some-radios"
                              value="Home"
                              >Home</b-form-radio
                            >
                            <b-form-radio
                              v-model="form.selected"
                              :aria-describedby="ariaDescribedby"
                              name="some-radios"
                              value="Office"
                              >Office</b-form-radio
                            >
                          </b-form-group>
                        </div>

                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="form.ifdefault"
                          name="checkbox-1"
                          value="true"
                          unchecked-value="false"
                        >
                          Make this default address
                        </b-form-checkbox>

                        <div class="col-md-3 mt-3 d-flex">
                          <div class="col-md-6">
                            <button
                              class="btn btn-primary"
                              @click="onSubmitAddr()"
                            >
                              Submit
                            </button>
                          </div>
                          <div class="col-md-6">
                            <button
                              type="button "
                              class="btn btn-danger"
                              @click="onResetAddr()"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                    </b-form>
                  </b-modal>

                  <b-modal
                    v-model="clickedadd"
                    id="modal-1"
                    title="Add address"
                    no-close-on-esc
                    hide-footer
                  >
                    <b-form>
                      <b-form-group
                        id="input-group-2"
                        label="Name:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.name"
                          placeholder="Enter name"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-1"
                        label="Phone number:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.phno"
                          type="number"
                          placeholder="Enter phone number"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="Enter Address Line 1:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.addrlin1"
                          placeholder="Enter Address Line 1"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-2"
                        label="Enter Address Line 2:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.addrlin2"
                          placeholder="Enter Address Line 2"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-2"
                        label="Enter Address Line 3:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.addrlin3"
                          placeholder="Enter Address Line 3"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-2"
                        label="City:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.city"
                          placeholder="Enter city"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="District:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.district"
                          placeholder="Enter district"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="State:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.state"
                          placeholder="Enter state"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="Country:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.country"
                          placeholder="Enter country"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="PIN Code:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.pincode"
                          placeholder="Enter PIN code"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="Landmark:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.landmark"
                          placeholder="Enter landmark"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="Enter label: (eg. Home, Office, etc.)"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.label"
                          placeholder="Enter label"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label="Delivery type"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-radio
                          v-model="form.selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Home"
                          >Home</b-form-radio
                        >
                        <b-form-radio
                          v-model="form.selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Office"
                          >Office</b-form-radio
                        >
                      </b-form-group>
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="form.ifdefault"
                        name="checkbox-1"
                        value="true"
                        unchecked-value="false"
                      >
                        Make this default address
                      </b-form-checkbox>

                      <b-button
                        type="button"
                        @click="submitAddr()"
                        variant="primary"
                        >Submit</b-button
                      >
                      <b-button
                        type="button"
                        @click="onResetAddr()"
                        variant="danger"
                        >Reset</b-button
                      >
                    </b-form>
                  </b-modal>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- address with model -->

        
      </div>
      <!-- left -->

      <!-- Right -->
      <div class="col-md-6">
          

          <p class="" style="text-align:left;font-weight:700">Payment Info</p>
          <div class="border  p-3"  style="border-radius:5px">
            <div class="d-flex justify-content-between">
              <div>
                <p style="color:grey;font-size:14px;font-weight:600" class="mt-2">Payment Mode</p>
              </div>
              <div style="text-align:left">
                <div>
                  <input type="radio" value="pickup" v-model="selectType1" />
                  <label for="" style="margin-left: 10px;font-size:15px;font-weight:600">Pay at store</label>
                </div>
                <div >
                  <input
                    class="ml-3"
                    type="radio"
                    value="delivery"
                    v-model="selectType1"
                  />
                  <label for="" style="margin-left: 10px;font-size:15px;font-weight:600">Online</label>
                </div>
              </div>
            </div>
          </div>

          <p  class="mt-3" style="text-align:left;font-weight:700">Order Summary</p>
          <div
            class="col-md-12 d-flex p-3 border mb-1"
            style="border-radius: 5px; background: white"
            v-for="(data, index) in cartitemarr"
            :key="index"
          >
            <div class="col-md-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEW7u7vz8/O4uLjb29vk5OTs7Ozh4eHZ2dny8vLu7u7q6ur29va9vb22trbn5+fGxsbQ0NDJycnU1NSwsLCMcr6HAAAESklEQVR4nO2bgXKiMBCGSTSaJQkIff93vf2X1lqF3tydTlfv/6YdFZTJ191sFopdRwghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQvyM+jp9WW6jz7lHM9aflDCnhURT5aTklzo8TVMX55xM1HmCYH2CHY5aDA8OdDWfY35vBjrvzYjg+oI6Ofgxz2cf7F70a9yU7MQzh8BDDg5sYwvDPPxdrrfG7v8yTG8ap11op83dv8W34m6xd1hgs6dtvdG7Yaf5tDw6CeVnztrsW54bxWOTUtoY3fvZBZdPBuSEcSj+uj09DeG6CSt48smvDOLw3XXVthFEuerMybh3Zs2Gc3tOwhHnlJC9edp9l2jqya0P5zEKZ2s1nLhv1p4yhlplLhUGn45dFwcZ+DuLmkR0b1usTod3VdHz2WvqxnF+EMZ/W35Gx5Nf1BsGx4bhy1l/S5coRzz1Nql3r0KCuHNmtYexvBfPHyrEEq6IvDaWgL22jnlxO8TaMbg3jaePCTQnHi0ZOo2bnFnqKoY5v403B9WvYbV+zuZ6O6tjFsY2tra0YHg0xnd6v22w5putgwTDW40rv49FQMy7W31xcvGnk6tjqUNL1guLSENOq7c9N9We25i89TJltOmqCWumJ43gIfQphvlg0KvLXnaFVfKwU+YvWWS/rM3tR8mT/k6it4iHWJPiz5DSd/1OBR2+GKI0txr5IQkCk71NS14yXomJiW2wfUnVEFW3VrtUcRFRP9+YDAttZaLHdlaEOuKnhSdVS35ckKQ1QhJSIxkg3ABEoZpFZ/RroTrJPQcxe0rE2ZK9ur82ZIcYVuz7LIBozjFYHHSyCiKa+EmzRF5qQsE5z94Z+LeY0SIA7yP3JlsrRnWF909xqOx3jgBxNJgpTPdlVLY2l/sJQfyyHs55z6EdinItGO/S9FLXX55KmN9RkZ1naVYuHpIyUUyd90NwMOuCsrxDQfnkUMxx6i+RBUzUFMxxgl4ruCXK0mmq9qxtDJGlrey0WGCImYxo0EwNmIYrNF0PdMCQtPth3PEp4jyG89bkail3EijvNXi//e0Klad2kQ7NhauuSMANNBnmbUEk/DBf0U2kJ7rVhQSYPunLMwz77Mexa7VDvMeFQLNMiYxVEpxbmYD5XGxW0RdKe5tDDUn+1KKklNuiOozvD2k4i5ras8CiMSEX1yrbeYeIJ1sWCRF2aAJuU2Few3x7xXltNYrfTxdOR4XLp4va8Il9v/Wzhcrht8M693S66qzQ3ly7+CTMMrgzXLl28lGHc0ZCGNKQhDWlIQxrS8CkM73mPaXZoeCr35eTNsHbT8Z5Mru5NxP2leHbPo+LX0/2lr36PMErfK9/n/fr36r/89y1e/zsz/8P3nl7/u2uEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCyBPyC1stQARopdgqAAAAAElFTkSuQmCC"
                width="auto"
                height="70px"
                alt=""
              />
            </div>
            <div
              class="col-md-10"
              style="text-align: left; padding-left: 30px"
            >
              <p class="mb-1" style="font-weight: 700">{{ data.name }}</p>
              <p class="mb-2" style="color: grey; font-size: 13px">
                {{ data.sku }}
              </p>
              <p class="mb-0" style="font-weight: 700; color: #021e45">
                ₹ {{ data.mrp }}
              </p>
            </div>
            <!-- <div class="col-md-2"></div> -->
          </div>

          <input type="text" class="form-control my-2 py-2" name="" id="" placeholder="Add a discount code or a gift card">

          <div>
            <div class="col-md-12 p-3 card">
              <div class="d-flex justify-content-between">
                <p style="font-size:15px;font-weight:600;color:grey">Subtotal</p>
                <p style="font-size:16px;font-weight:700;">Rs. {{ this.mrptotal }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p style="font-size:15px;font-weight:600;color:grey">Discount</p>
                <p style="font-size:16px;font-weight:700;">- Rs. {{ this.discount }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p style="font-size:15px;font-weight:600;color:grey">Shipping</p>
                <p style="font-size:16px;font-weight:700;">Rs. 0</p>
              </div>
              <div class="d-flex justify-content-between">
                <p style="font-size:15px;font-weight:600;color:grey">Total</p>
                <p style="font-size:16px;font-weight:700;">Rs. {{ this.totalamt }}</p>
              </div>
            </div>
              
            <button
              type="submit"
              class="btn btn-danger mt-2"
              style="width: 100%;color:white !important;letter-spacing:1px;font-weight:600"
              @click="placeOrder()"
            >
              PLACE ORDER
            </button>
          </div>
      </div>
      <!-- Right -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      data: [],
      selectType: "",
      form: {
        name: "",
        phno: "",
        addrlin1: "",
        addrlin2: "",
        addrlin3: "",
        city: "",
        district: "",
        state: "",
        country: "",
        label: "",
        pincode: "",
        landmark: "",
        selected: "",
        ifdefault: "",
      },
      cartitemarr: [],
      mrptotal: null,
      discount: null,
      totalamt: null,
      addrarr: [],
      seladdr: null,
      showaddr: false,
      clickededit: false,
      clickedadd: false,
      addressid: null,
      langs: ["en", "ka"],
      ordercompl: false,
      value: "",
    };
  },
  mounted() {
    this.getProfile();
  },
  created() {
    console.log("payment created meth");
    const payloads = {
      operation: "Refresh cart",
      cartId: parseInt(localStorage.getItem("cartId")),
    };

    axios
      .post("/cart-service/ws/cart/refreshCart", payloads)
      .then((response) => {
        if (response.data.status === "success") {
          this.cartitemarr = response.data.itemResult;

          console.log("cart arr", this.cartitemarr);

          this.cartId = response.data.cartId;
          localStorage.setItem("cartId", this.cartId);
          this.mrptotal = response.data.grossTotal;
          this.totalamt = response.data.netTotal;
          this.discount = response.data.discounts[0].discountAmount;
        } else if (response.data.status === "failed") {
          alert("Retrieval failed");
        }
      });
  },

  watch: {
    selectType() {
      console.log("type", this.selectType);
      if (this.selectType == "pickup") {
        this.addrarr = [];
        this.seladdr = null;
        this.showaddr = false;
      } else if (this.selectType == "delivery") {
        axios.get("customer-service/cws/address/").then((response) => {
          console.log("addresses", response.data.addresses);
          this.addrarr = response.data.addresses;
        });
        this.showaddr = true;
      }
    },
  },
  methods: {
    // storePickup() {
    //   this.addrarr = [];
    //   this.seladdr = null;
    //   this.showaddr = false;
    // },
    // loadAddress() {
    //   axios.get("customer-service/cws/address/").then((response) => {
    //     console.log("addresses", response.data.addresses);
    //     this.addrarr = response.data.addresses;
    //   });
    //   this.showaddr = true;
    // },
    // deltype(data){
    //   if(data == 'pickup'){
    //     this.addrarr = [];
    //     this.seladdr = null;
    //     this.showaddr = false;
    //   }
    //   else if(data == 'delivery'){
    //     axios.get("customer-service/cws/address/").then((response) => {
    //       console.log("addresses", response.data.addresses);
    //       this.addrarr = response.data.addresses;
    //     });
    //     this.showaddr = true;
    //   }
    // },
    getProfile() {
      axios.get("/auth-service/cws/profile").then((response) => {
        this.data = response.data;
        console.log(response.data);
      });
    },
    submitAddr() {
      const payload = {
        addressLine1: this.form.addrlin1,
        addressLine2: this.form.addrlin2,
        addressLine3: this.form.addrlin3,
        city: this.form.city,
        contactPerson: this.form.name,
        contactPhoneNumber: this.form.phno,
        country: this.form.country,
        defaultDeliveryAddress: this.form.ifdefault,
        district: this.form.district,
        label: this.form.label,
        landmark: this.form.landmark,
        pinCode: this.form.pincode,
        state: this.form.state,
        tag: this.form.selected,
      };
      axios.post("customer-service/cws/address", payload).then((response) => {
        console.log("add addr succ", response.data);
        this.addrarr = response.data.addresses;
      });
      this.clickedadd = false;
    },
    onSubmitAddr(chec) {
      console.log("address id", this.addressid, chec);

      const payload = {
        addressId: this.addressid,
        addressLine1: this.form.addrlin1,
        addressLine2: this.form.addrlin2,
        addressLine3: this.form.addrlin3,
        city: this.form.city,
        contactPerson: this.form.name,
        contactPhoneNumber: this.form.phno,
        country: this.form.country,
        defaultDeliveryAddress: this.form.ifdefault,
        district: this.form.district,
        label: this.form.label,
        landmark: this.form.landmark,
        pinCode: this.form.pincode,
        state: this.form.state,
        tag: this.form.selected,
      };
      axios
        .patch("customer-service/cws/address/" + this.addressid, payload)
        .then((response) => {
          console.log("edit succ", response.data);
          if (response.data.status == "success") {
            axios.get("customer-service/cws/address/").then((response) => {
              console.log("addresses", response.data.addresses);
              this.addrarr = response.data.addresses;
            });
          } else alert("Address retrieval error");
        });
      this.clickededit = false;
    },

    onResetAddr() {
      (this.form.name = ""),
        (this.form.phno = ""),
        (this.form.addrlin1 = ""),
        (this.form.addrlin2 = ""),
        (this.form.addrlin3 = ""),
        (this.form.city = ""),
        (this.form.state = ""),
        (this.form.district = ""),
        (this.form.country = ""),
        (this.form.pincode = ""),
        (this.form.label = ""),
        (this.form.landmark = ""),
        (this.form.selected = ""),
        (this.form.ifdefault = "");
    },

    selAddress(addr) {
      this.seladdr = addr;
    },
    editAddAddress(addr) {
      if (addr != "") {
        console.log("edit addr", addr);
        this.clickededit = true;
        (this.form.name = addr.contactPerson),
          (this.form.phno = addr.contactPhoneNumber),
          (this.form.addrlin1 = addr.addressLine1),
          (this.form.addrlin2 = addr.addressLine2),
          (this.form.addrlin3 = addr.addressLine3),
          (this.form.city = addr.city),
          (this.form.state = addr.state),
          (this.form.district = addr.district),
          (this.form.country = addr.country),
          (this.form.pincode = addr.pinCode),
          (this.form.label = addr.label),
          (this.form.landmark = addr.landmark),
          (this.form.selected = addr.tag),
          (this.form.ifdefault = addr.defaultDeliveryAddress);
        this.addressid = addr.addressId;
      } else {
        console.log("add addr", addr);
        this.clickedadd = true;
        (this.form.name = ""),
          (this.form.phno = ""),
          (this.form.addrlin1 = ""),
          (this.form.addrlin2 = ""),
          (this.form.addrlin3 = ""),
          (this.form.city = ""),
          (this.form.state = ""),
          (this.form.district = ""),
          (this.form.country = ""),
          (this.form.pincode = ""),
          (this.form.label = ""),
          (this.form.landmark = ""),
          (this.form.selected = ""),
          (this.form.ifdefault = "");
        this.addressid = "";
      }
    },
    removeAddress(addr) {
      axios.delete("customer-service/cws/address/" + addr).then((response) => {
        if (response.data.status == "success") {
          axios.get("customer-service/cws/address/").then((response) => {
            console.log("new list of addresses", response.data.addresses);
            this.addrarr = response.data.addresses;
          });
        }
      });
    },

    placeOrder() {
      const payloads = {
        operation: "Refresh cart",
        cartId: parseInt(localStorage.getItem("cartId")),
      };
      axios
        .post("/cart-service/ws/cart/refreshCart", payloads)
        .then((response) => {
          if (response.data.status === "success") {
            for (let i = 0; i < response.data.itemResult.length; i++) {
              let temppayload = response.data.itemResult[i];
              temppayload.scanType = "Scan";
              temppayload.scanSequence = 1;
              temppayload.price = temppayload.netPrice;
              temppayload.vatBit = 0;
              temppayload.unit = temppayload.quantityUnit;
              temppayload.productGroupNumber = temppayload.productGrpNmbr;
              console.log("temp payload", temppayload);
            }

            let placearr = response.data.itemResult;
            console.log("place order modified arr", placearr);
            if (this.seladdr == null && this.showaddr) {
              alert("Please select an address");
            } else {
              const payload = {
                task: "PLACE_ORDER",
                startTime: response.data.startTime,
                cartItems: placearr,
                discounts: response.data.discounts,
                grossTotal: response.data.grossTotal,
                netTotal: response.data.netTotal,
                storeId: response.data.storeId,
                storeCode: response.data.storeCode,
                cartId: response.data.cartId,
                totalProductsCount: 1,
                deliveryAddress: this.seladdr,
              };

              axios
                .post("/order-service/ws/order/place", payload)
                .then((respons) => {
                  console.log("afa sel-ing address", respons.data);
                  alert(
                    respons.data.statusMessage +
                      " Order ID " +
                      respons.data.orderId
                  );
                  this.value = String(respons.data.orderId);
                  this.ordercompl = true;
                });
            }
          } else alert("cart error");
        });
    },
  },
};
</script>

<style scoped>
.boxshadow {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
</style>
