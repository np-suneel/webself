<template>
<div>
    <div>
        <p>Scan barcode</p>
    </div>
    <div>
        <StreamBarcodeReader @decode="(a, b, c) => onDecode(a, b, c)" @loaded="onLoaded"></StreamBarcodeReader>
        <ImageBarcodeReader @decode="onDecode" @error="onError"></ImageBarcodeReader>
    </div>
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
