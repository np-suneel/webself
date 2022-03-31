<template>
        <div class="col-md-7  m-auto" >
          <h5 style="font-weight: 700; text-align:left">My orders</h5>
          <div class="row border px-3 pt-3">
            <div class="card col-md-6 p-3" v-for="(data,index) in orderlist" :key="index">
              <div class="d-flex justify-content-between">
                <p class="mb-0">Bill ID</p>
                <p class="mb-0">{{ data.billId }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">Total Amount {{ data.orderAmount }}</p>
                <p class="mb-0">Total Items {{ data.itemsCount }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">Date:</p>
                <p class="mb-0">{{data.orderDateTime}}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">Store:</p>
                <p class="mb-0">{{data.storeName}}</p>
              </div>
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
