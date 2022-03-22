<template>
  <div class="col-md-10 pt-2 m-auto">
    <div class="col-md-12 my-3 d-flex justify-content-between">
      <div>
        <h5 style="font-weight: 700" class="text-left">My Cart (1)</h5>
      </div>
      <div></div>
    </div>
    <div class="col-md-12 row">
      <div class="col-md-7 ml-0 pl-0">
        <div class="col-md-12">
          <div class="card p-3">
            <div class="d-flex justify-content-between">
              <p>Fashion Basket (1 items)</p>
              <p>₹399.00</p>
            </div>
            <div class="col-md-12 d-flex">
              <div class="col-md-2 ml-0 pl-0">
                <img
                  src="https://www.jiomart.com/images/product/150x188/440762638_red/polo-t-shirt-with-signature-branding-model-440762638_red-0-202104090103.jpg"
                  alt=""
                  width="auto"
                  height="100px"
                />
              </div>
              <div class="col-md-6 text-left">
                <p>Polo T-shirt with Signature Branding</p>
                <p>₹399.00 ₹499.00 You Save ₹100.00</p>
                <p>Size: S / Colour: Red</p>
              </div>
              <div
                class="col-md-4 mt-4 pt-5 pr-0 mr-0 text-right align-text-bottom"
              >
                <div class="wrapper">
                  <button
                    style="height: 40px; width: 40px; border-radius: 50%"
                    class="btn btn-primary"
                    @click="changeCounter('-1')"
                    type="button"
                    name="button"
                  >
                    -
                  </button>
                  <input
                    style="height: 40px; border: none"
                    class="quantity"
                    type="text"
                    name="name"
                    :value="counter"
                  />
                  <button
                    class="btn btn-primary"
                    style="height: 40px; width: 40px; border-radius: 50%"
                    @click="changeCounter('1')"
                    type="button"
                    name="button"
                  >
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-2">
          <div class="card p-3">
            <div class="d-flex justify-content-between">
              <p>Fashion Basket (1 items)</p>
              <p>₹399.00</p>
            </div>
            <div class="col-md-12 d-flex">
              <div class="col-md-2 ml-0 pl-0">
                <img
                  src="https://www.jiomart.com/images/product/150x188/440762638_red/polo-t-shirt-with-signature-branding-model-440762638_red-0-202104090103.jpg"
                  alt=""
                  width="auto"
                  height="100px"
                />
              </div>
              <div class="col-md-6 text-left">
                <p>Polo T-shirt with Signature Branding</p>
                <p>₹399.00 ₹499.00 You Save ₹100.00</p>
                <p>Size: S / Colour: Red</p>
              </div>
              <div
                class="col-md-4 mt-4 pt-5 pr-0 mr-0 text-right align-text-bottom"
              >
                <div class="wrapper">
                  <button
                    style="height: 40px; width: 40px; border-radius: 50%"
                    class="btn btn-primary"
                    @click="changeCounter('-1')"
                    type="button"
                    name="button"
                  >
                    -
                  </button>
                  <input
                    style="height: 40px; border: none"
                    class="quantity"
                    type="text"
                    name="name"
                    :value="counter"
                  />
                  <button
                    class="btn btn-primary"
                    style="height: 40px; width: 40px; border-radius: 50%"
                    @click="changeCounter('1')"
                    type="button"
                    name="button"
                  >
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <div class="card p-3">
          <p class="text-left" style="font-weight: 700">Payment Details</p>
          <div class="d-flex justify-content-between">
            <p>MRP Total</p>
            <p>₹499.00</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Product Discount</p>
            <p>- ₹100.00</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Total Amount</p>
            <p>₹399.00</p>
          </div>
        </div>
        <div class="text-right mt-2">
          <button class="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    changeCounter(num) {
      this.counter += +num;
      console.log(this.counter);
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);
    },
  },
};
</script>

<style scoped>
.wrapper {
}
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 30px;

  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
}
</style>
