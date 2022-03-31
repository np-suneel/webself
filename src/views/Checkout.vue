<div>
    <div class="row col-8"><h3>Delivery Info</h3></div>
    <div class="row col-8"><h3>Email:</h3></div>
    <div class="row col-8">
      <h3>Delivery:</h3>
      <div>
        <input type="radio" @click="storePickup()" />Pickup at the Store
      </div>
      <div><input type="radio" @click="loadAddress()" />Delivery Service</div>
      <div v-show="showaddr">
        <div>
          <h5 style="font-weight: 700" class="text-left">Saved Addresses</h5>
          <button
            style="height: 40px; border-radius: 5%"
            class="btn btn-primary"
            @click="editAddAddress('')"
            type="button"
            name="button"
          >
            Add address
          </button>
        </div>
        <div class="card p-1" v-for="data in addrarr" :key="data.addressId">
          <input type="radio" @click="selAddress(data)" />
          <div class="d-flex justify-content-between">
            <div>
              <p>{{ data.tag }}</p>
            </div>
            <div
              class="d-flex flex-row-reverse"
              v-show="data.defaultDeliveryAddress"
            >
              <p><b>Default address</b></p>
            </div>
          </div>
          <div class="col-md-12 d-flex">
            <div class="col-md-6 text-left">
              <p>{{ data.contactPerson }}</p>
              <p>{{ data.addressLine1 }}</p>
              <p>{{ data.addressLine2 }}</p>
              <p>{{ data.addressLine3 }}</p>
              <p>{{ data.city }} - {{ data.pinCode }}</p>
              <p>{{ data.district }}</p>
              <p>{{ data.state }}, {{ data.country }}</p>

              <h4>Landmark:</h4>
              <p>{{ data.landmark }}</p>
            </div>
            <div
              class="col-md-4 mt-4 pt-5 pr-0 mr-0 text-right align-text-bottom"
            >
              <div class="mt-1">
                <button
                  style="height: 40px; border-radius: 5%"
                  class="btn btn-primary"
                  @click="editAddAddress(data)"
                  type="button"
                  name="button"
                >
                  Edit address
                </button>

                <b-modal
                  v-model="clickededit"
                  id="modal-1"
                  title="Edit address"
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
                      description="We'll never share your phone number with anyone else."
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
                      @click="onSubmitAddr()"
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
                      description="We'll never share your phone number with anyone else."
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
              <div class="mt-1">
                <button
                  style="height: 40px; border-radius: 5%"
                  class="btn btn-primary"
                  @click="removeAddress(data.addressId)"
                  type="button"
                  name="button"
                >
                  Remove address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row col-8">
      <h3>Payment Method:</h3>
      <div><input type="radio" />Pay at Store</div>
      <div><input type="radio" />Credit Card</div>
    </div>

    <div class="row col-8">
      <h3>Order Summary:</h3>
      <p>Your Order</p>
      <div class="card p-3" v-for="(data, index) in cartitemarr" :key="index">
        <div class="d-flex flex-row-reverse justify-content-between">
          <p>Rs. {{ data.mrp }}</p>
        </div>
        <div class="col-md-12 d-flex">
          <div class="col-md-2 ml-0 pl-0">
            <img :src="data.img_url" alt="" width="auto" height="100px" />
          </div>
          <div class="col-md-6 text-left">
            <p>{{ data.name }}</p>
            <p>Colour: , Size:</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-8">
      <p>Subtotal: Rs. {{ this.mrptotal }}</p>
      <p>You saved: Rs. {{ this.discount }}</p>
      <p>Shipping: --</p>
      <h3>Total: Rs. {{ this.totalamt }}</h3>
    </div>
    <div class="row col-8">
      <button @click="placeOrder()">Place Order</button>
    </div>
  </div>