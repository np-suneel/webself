<template>
  <div class="col-md-9 m-auto">
    <h5 style="font-weight: 700; " class="my-3">My Orders</h5>
    <div class="mt-1 row m-0 p-0" style="border-radius:5px">
      <div
        class=" col-md-6 p-3 "
        v-for="(data, index) in orderlist"
        :key="index"
      >
        <div class="card col-md-12 ">
        <div class="d-flex justify-content-between">
          <p class="mb-1" style="font-size:12px;color:grey;font-weight:500">Bill ID</p>
          <p class="mb-1" style="font-size:13px;font-weight:600">{{ data.billId }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-1" style="font-size:12px;color:grey;font-weight:500">Total Amount {{ data.orderAmount }}</p>
          <p class="mb-1" style="font-size:13px;font-weight:600">Total Items {{ data.itemsCount }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-1" style="font-size:12px;color:grey;font-weight:500">Date</p>
          <p class="mb-1" style="font-size:13px;font-weight:600">{{ data.orderDateTime }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-1" style="font-size:12px;color:grey;font-weight:500">Store</p>
          <p class="mb-1" style="font-size:13px;font-weight:600">{{ data.storeName }}</p>
        </div>
        <div class="mt-1">
          <a class="" :href="data.digitalReceiptUrl" style="font-size:11px; color:blue">
            Click to view bill
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("order-service/cws/order/list").then((response) => {
      console.log("my orders", response.data);
      this.orderlist = response.data.ordersData;
    });
  },
  data() {
    return {
      orderlist: [],
    };
  },
};
</script>
