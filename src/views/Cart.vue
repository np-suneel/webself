<template>
  <div class="col-md-10 pt-2 m-auto">
    <div class="col-md-12 my-3 d-flex justify-content-between">
      <div>
        <h5 style="font-weight: 700" class="text-left">My Cart (1)</h5>
        
      </div>
      <div>
        <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="cartFunc('refresh')"
                    type="button"
                    name="button"
                  >
                    Refresh cart
                  </button>
                  
         <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="cartFunc('clear')"
                    type="button"
                    name="button"
                  >
                    Clear cart
                  </button>       
                   <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="cartFunc('cancel')"
                    type="button"
                    name="button"
                  >
                    Cancel cart
                  </button>          
      </div>         
    </div>
    <div class="col-md-12 row">
      <div class="col-md-7 ml-0 pl-0">
        <div class="col-md-12">
          <div class="card p-3" v-for="(data,index) in cartitemarr" :key="index">
            <div class="d-flex justify-content-between">
              <p>Fashion Basket (1 items)</p>
              <p>{{ data.mrp }}</p>
            </div>
            <div class="col-md-12 d-flex">
              <div class="col-md-2 ml-0 pl-0">
                <img
                  :src="pic"
                  alt=""
                  width="auto"
                  height="100px"
                />
              </div>
              <div class="col-md-6 text-left">
                <p>{{ data.name }}</p>
                <p>{{data.mrp}} {{data.netPrice}} You Save {{data.netPrice - data.mrp}}</p>
                <p>Size: / Colour: </p>
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
                <div class="mt-1">
                   <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="removeItem(data.sku)"
                    type="button"
                    name="button"
                  >
                    Remove item
                  </button>                  
                </div>                
              </div>
            </div>
          </div>
        </div>
        <!--
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
        </div>-->
      </div>

      <div class="col-md-5">
        <div class="card p-3">
          <p class="text-left" style="font-weight: 700">Payment Details</p>
          <div class="d-flex justify-content-between">
            <p>MRP Total</p>
            <p>{{ this.mrptotal }}</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Product Discount</p>
            <p>- {{ this.discount }}</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Total Amount</p>
            <p>{{ this.totalamt }}</p>
          </div>
        </div>
        <div class="text-right mt-2">
          <button class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){        
    const payload = {
      operation: "AddItem",
      cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            quantity: 1,
            sku: JSON.parse(localStorage.getItem('expandFashion')).sku,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sequence: 0            
        
     }
     ]
    }
      axios.post('/cart-service/ws/cart/addItemtoCart',payload).then((response) => {
        console.log('added to cart resp',response.data)
        //localStorage.setItem('cartData',JSON.stringify(response.data))
        this.cartitemarr = response.data.itemResult
        this.cartId = response.data.cartId
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
      })


  },  
  data() {
    return {
      cartId: null,
      mrptotal:null,
      discount:null,
      totalamt:null,
      counter: 1,
      cartitemarr:[],
      pic: JSON.parse(localStorage.getItem('expandFashion')).img_url
    };
    
  },
  methods: {
    removeItem(sk){
        const payload = {
                    operation: "RemoveItem",
                    cartId: this.cartId,
                    cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sku: sk
        }
    ]
                    }
              axios.post('/cart-service/ws/cart/removeItem',payload).then((response)=>{
                alert(response.data.statusMessage)
              })     
              
    },
    cartFunc(k){
        switch(k){
          case 'clear': {
                  const payload = {
                    operation: "Clear cart",
                    cartId: this.cartId
                    }
              axios.post('/cart-service/ws/cart/clearCart',payload).then((response)=>{
                alert(response.data.statusMessage)
              })      
              break;
          }
          case 'refresh':
            {
                const payloads = {
                    operation: "Refresh cart",
                    cartId: this.cartId
                    }
              axios.post('/cart-service/ws/cart/refreshCart',payloads).then((response)=>{
                alert(response.data.statusMessage)
              })      
              break;
              }
          case 'cancel': {
                 const payloadss = {
                    operation: "Cancel cart",
                    cartId: this.cartId
                    }
              axios.post('/cart-service/ws/cart/cancelCart',payloadss).then((response)=>{
                alert(response.data.statusMessage)
              })      
              break;
          }
        }
  },
    changeCounter(num) {
      if(this.counter>1)
      this.counter += +num;
      if(this.counter== 1 && num == 1)
      this.counter += +num;
      const payload = {
    operation: "UpdateItemQuantity",
    cartId: this.cartId,
    cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            newQuantity: this.counter,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sku: JSON.parse(localStorage.getItem('expandFashion')).sku
        }
    ]
}

      axios.post('/cart-service/ws/cart/updateItemQty',payload)
      
      console.log(this.counter);
      // !isNaN(this.counter) && this.counter > 0
      //   ? this.counter
      //   : (this.counter = 0);
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