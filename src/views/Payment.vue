<template>
<div>
    <div class="row col-8"><h3>Delivery Info</h3>  </div>
    <div class="row col-8"><h3>Email:  </h3> </div>
    <div class="row col-8"><h3>Delivery: </h3>
        <div><input type="radio" >Pickup at the Store</div>
  <div><input type="radio" >Delivery Service </div>
  </div>

<div class="row col-8"><h3>Payment Method: </h3>
<div>
<input type="radio">Pay at Store
</div>
      <div><input type="radio" >Credit Card  </div></div>  
  
<div class="row col-8"><h3>Order Summary: </h3>
        <p>Your Order</p>  
        <div class="card p-3" v-for="(data,index) in cartitemarr" :key="index">
            <div class="d-flex flex-row-reverse justify-content-between">              
              <p>Rs. {{ data.mrp }}</p>
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
                <p>Colour: , Size:</p>
              </div>            
            </div>
          </div>
        
        
        </div>
        <div class="row col-8">
              <p>  Subtotal: Rs. {{this.mrptotal}}</p>
              <p>  You saved: Rs. {{this.discount}}</p>  
              <p>  Shipping: --</p>  
              <h3>  Total: Rs. {{this.totalamt}}</h3>  
        </div>
        <div class="row col-8">
             <button @click="placeOrder()">Place Order</button>   
        </div>


</div>
</template>

<script>
import axios from 'axios'

export default{
created(){
    console.log('payment created meth')
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
},
data(){
return{
        cartitemarr:[],
        mrptotal:null,
      discount:null,
      totalamt:null
}

},
methods:{
    placeOrder(){
       const payloads = {
                    operation: "Refresh cart",
                    cartId: parseInt(localStorage.getItem('cartId'))
                    }
       axios.post('/cart-service/ws/cart/refreshCart',payloads).then((response)=>{ 
        if(response.data.status === "success"){
          
          for(let i=0;i<response.data.itemResult.length;i++){
              let temppayload = response.data.itemResult[i]
              temppayload.scanType = "Scan"
              temppayload.scanSequence = 1
              temppayload.price = temppayload.netPrice
              temppayload.vatBit = 0
              temppayload.unit = temppayload.quantityUnit
              temppayload.productGroupNumber = temppayload.productGrpNmbr
              console.log('temp payload',temppayload)
          }
         
         let placearr = response.data.itemResult
         console.log('place order modified arr',placearr)
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
            totalProductsCount: 1
         }
        axios.post('/order-service/ws/order/place',payload).then((respons)=>{
        alert(respons.data.statusMessage + ' Order ID ' + respons.data.orderId)
        }
        )
}
else
alert('cart error')

})}
}
}
</script>


