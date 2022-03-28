<template>
    
        <div class="col-md-12" >
            <div>
        <h5 style="font-weight: 700" class="text-left">My orders</h5>
        
      </div>
          <div class="card p-3" v-for="(data,index) in orderlist" :key="index">
            <div class="d-flex justify-content-between">
              
              <p>Bill ID: {{ data.billId }}</p>
            </div>
            <div class="col-md-12 d-flex">
             
              <div class="col-md-6 text-left">
                <p>Total Amount {{ data.orderAmount }}</p>
                
                    <p>Total Items {{ data.itemsCount }}</p>
                    
                <p>Date: {{data.orderDateTime}}</p>
                <p>Store: {{data.storeName}} </p>
              </div>
              <div
                class="col-md-4 mt-4 pt-5 pr-0 mr-0 text-right align-text-bottom"
              >
                
                <div class="mt-1">
                   <a
                    
                    class="nav-link"
                    :href="data.digitalReceiptUrl"
                    
                  >
                    Click to view bill
                  </a>                  
                </div>                
              </div>
            </div>
          </div>
        </div> 
    
</template>

<script>
import axios from 'axios'

export default {
    created(){

        axios.get('order-service/cws/order/list').then((response) => {
            console.log('my orders', response.data)
            this.orderlist = response.data.ordersData
        })
    },
    data(){
        return {
            orderlist:[]
        }

    }
}
</script>
