<template>
  <div class="col-md-4 m-auto pt-5" style="padding-top:200px">
      <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
      <ImageBarcodeReader @decode="onDecode" @error="onError"></ImageBarcodeReader>
        
  </div>
</template>

<script>
import axios from 'axios'
import { StreamBarcodeReader,  ImageBarcodeReader  } from 'vue-barcode-reader'

export default{
    components:{
        StreamBarcodeReader,
        ImageBarcodeReader

    },
    methods:
    {
         onDecode (a) { 
             console.log('barcode',a) 
        if(localStorage.getItem('cartId') == null){
        const payload = {
      operation: "AddItem",
      cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            quantity: 1,
            sku: a,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sequence: 0            
        
     }
     ]
    }    
    axios.post('/cart-service/ws/cart/addItemtoCart',payload).then((response) => {
      
      localStorage.setItem('cartId',response.data.cartId)
      alert('successfully added item')
      
      }
    )
    
      }
      else{
        const payload = {
      operation: "AddItem",
      cartId: parseInt(localStorage.getItem('cartId')),
      cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            quantity: 1,
            sku: a,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sequence: 0            
        
     }
     ]
    }    
    axios.post('/cart-service/ws/cart/addItemtoCart',payload).then((response) => {
      
      console.log('successfully added item')
      localStorage.setItem('cartId',response.data.cartId)
      
      })  
          
      }
      },

     onLoaded() { console.log('ready to start scan') },
     onError() { console.log('barcode error') },
    }
}
</script>
<style scoped>
.labelp {
  background: white;
  color: black;
  font-size: 13px;
  border-radius: 5px;
  border: none;
}
.zoom:hover {
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  transition: transform 0.3s;
}
.labelp:focus {
  border: 1px solid #277cc1 !important;
}
.dis {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 201px;
  z-index: 1;
  background: url("https://www.jiomart.com/assets/version1640197013/smartweb/images/icons/offer_bg.svg")
    center no-repeat;
  font-size: 11px;
  font-family: JioMedium;
  color: #fff;
  display: block;
  padding: 6px 0;
  background-size: 100%;
}
.search {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  height: 35px;
}
.sb-example-1 .search {
  width: 100%;
  position: relative;
  display: flex;
}
.sb-example-1 .searchTerm {
  width: 100%;
  border: none;
  border-right: none;
  border-radius: 5px;
  outline: none;
  color: #9dbfaf;
  border-radius: 25px;
  font-size: 13px;
}

.sb-example-1 .searchButton {
  width: 40px;
  /* border: 1px solid rgba(0,0,0,0.3); */
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  font-size: 13px !important;
  border: none;
  color: #191919;
  opacity: 0.5;
  padding: 0px;
  background-color: white;
}
</style>
