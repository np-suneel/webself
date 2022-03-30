<template>
  <div class="col-md-10 pt-2 m-auto">
    <div class="col-md-12 my-3 d-flex justify-content-between">
      <div>
        <h5 style="font-weight: 700" class="text-left">My Cart</h5>
        <div>
          Enter SKU number: <input type = "text" v-model="skuno">
        <button class="btn btn-primary" @click="addViaSKU()">Add to cart via SKU</button>
      </div>
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
    <div class="col-md-12 row" v-show="this.iscartempty != true">
      <div class="col-md-7 ml-0 pl-0">
        <div class="col-md-12">
          <div class="card p-3" v-for="(data) in cartitemarr" :key="data.id">
            <div class="d-flex justify-content-between">
              <p>Fashion Basket (1 items)</p>
              <p>{{ data.mrp }}</p>
            </div>
            <div class="col-md-12 d-flex">
              <div class="col-md-2 ml-0 pl-0">
                <img
                  :src="data.img_url"
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
                    @click="changeCounter('-1',data.sku,data.quantity)"
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
                    :value="data.quantity"
                  />
                  <button
                    class="btn btn-primary"
                    style="height: 40px; width: 40px; border-radius: 50%"
                    @click="changeCounter('1',data.sku,data.quantity)"
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
          <button class="btn btn-primary" @click="$router.push('/payment')">Checkout</button>
        </div>
        
      </div>
    </div>
    <div class="col-md-12 row" v-show="this.iscartempty">
            <h2>Cart is empty</h2>
        </div>
  </div> 
  
</template>

<script>
import axios from 'axios'
export default {
  mounted(){      
    
       const payloads = {
                    operation: "Refresh cart",
                    cartId: parseInt(localStorage.getItem('cartId'))
                    }
                    
              axios.post('/cart-service/ws/cart/refreshCart',payloads).then((response)=>{           
               
        
        
            if(response.data.status === "success"){
        
        this.cartitemarr=response.data.itemResult      
        
        console.log('cart arr',this.cartitemarr)

        this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
      }    
                
    else if(response.data.status === "failed"){
                        alert('Retrieval failed')
                        

    }
              }) 
                    
                    .catch(function (e){
                      console.log('temporary error',e.response)                     
                      
                    })


  },  
  data() {
    return {
      iscartempty:false,
      cartId: null,
      mrptotal:null,
      discount:null,
      totalamt:null,
      counter: 1,
      cartitemarr:[],
      temparr:[],
      skuno:''
           
    };
    
  },
  methods: {
    addViaSKU(){
    if(this.skuno != ''){
      if(this.cartitemarr == null){
        
        const payload = {
      operation: "AddItem",
      cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            quantity: 1,
            sku: this.skuno,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sequence: 0            
        
     }
     ]
    }    
    axios.post('/cart-service/ws/cart/addItemtoCart',payload).then((response) => {
        if(response.data.status === "success"){
        
        this.cartitemarr=response.data.itemResult      
        
        

        this.cartId = response.data.cartId
        
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
        }
         else if(response.data.status === "failed"){
                        alert('Enter correct SKU number')}

      })

    }
    else{
        const payload = {
      operation: "AddItem",
      cartId: parseInt(localStorage.getItem('cartId')),
      cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            quantity: 1,
            sku: this.skuno,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sequence: 0            
        
     }
     ]
    }    
    axios.post('/cart-service/ws/cart/addItemtoCart',payload).then((response) => {
        if(response.data.status === "success"){
        
        this.cartitemarr=response.data.itemResult      
        
        

        this.cartId = response.data.cartId
        
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
        }
         else if(response.data.status === "failed"){
                        alert('Enter correct SKU number')}
    })
    }
    }
    else{
      alert('Empty SKU input field')
    }
    },
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
                if(response.data.status === "Success" || response.data.status === "success"){
                  console.log('succes remove')
                    const payloads = {
                    operation: "Refresh cart",
                    cartId: this.cartId
                    }
              axios.post('/cart-service/ws/cart/refreshCart',payloads).then((response)=>{
                console.log('remove refresh', response.data.status)
                if(response.data.status !== "failed"){
                this.cartitemarr=response.data.itemResult 
                this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
                }
              
                else{
                  console.log('empty remove')
                  this.iscartempty = true
                  localStorage.removeItem('cartId')
                }
              })      
                }
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
                const payloads = {
                    operation: "Refresh cart",
                    cartId: this.cartId
                    }
              axios.post('/cart-service/ws/cart/refreshCart',payloads).then((response)=>{
                if(response.data.status !== "failed"){
                this.cartitemarr=response.data.itemResult 
                this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
                }
                else{
                  this.iscartempty = true
                  localStorage.removeItem('cartId')
                }
              })      
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
                 this.cartitemarr=response.data.itemResult      
        
        

        this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
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
    changeCounter(num,sku,quan) {
      if(quan == 1 && num == -1)
        alert('click \'Remove Item\' button to delete item')
        

      else{
      quan += +num;
      const payload = {
    operation: "UpdateItemQuantity",
    cartId: this.cartId,
    cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            newQuantity: quan,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sku: sku
        }
    ]
}

      axios.post('/cart-service/ws/cart/updateItemQty',payload).then((response) =>{
        this.cartitemarr=response.data.itemResult      
        
        

        this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
      })
      
      console.log(quan);
      // !isNaN(this.counter) && this.counter > 0
      //   ? this.counter
      //   : (this.counter = 0);
    
    }
  }
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
