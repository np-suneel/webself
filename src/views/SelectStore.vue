<template>
  <div class="col-md-12">
    <button @click="updateToken()">update token</button>
    <button @click="productList()">get product list</button>
    <div class="col-md-6 m-auto pt-5">
        <p style="font-size:13px " class="my-4" >How do you want to shop?</p>
      <div class="col-md-12 row ">
        <div class="col-md-6" @click="storedisplay = false" >
          <div class="col-md-12 card p-3" style="align-items: center" :class="{active: !storedisplay}">
            <img src="https://cdn-icons-png.flaticon.com/128/126/126122.png" width="50px" height="auto" alt="">
            <p class="mb-0">Online</p>
          </div>
        </div>
        <div class="col-md-6 ml-2" @click="storedisplay = true">
          <div class="col-md-12 card p-3" style="align-items: center" :class="{active: storedisplay}">
            <!-- <img src="data:image/png;base64,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" alt="" width="50px" height="auto"> -->
            <img src="https://cdn-icons-png.flaticon.com/128/2898/2898372.png" width="50px" height="auto" alt="">
            <p class="mb-0">In store</p>
          </div>
        </div>
      </div>
      <p class="my-4" style="font-size:13px">Visit your preferred store ? <br> and experience a better way to shop!</p>
      <div class="col-md-12  mt-3 border p-3" style="background:transparent;border-radius:5px" v-if="storedisplay">
        <p style="text-align:left;font-size:12px;color:red;font-weight:700"><i class="fa fa-map-marker" aria-hidden="true"></i> Branch</p>
        <select
          class="mb-0 p-2  form-control form-select"
          style="
    
            border-bottom: none;
            border-top: none;
            border-left: none;
            border-right: none;
            border-radius: 0;
            font-size: 13px;
            font-weight: 700;
          "
          v-model="selStore"
        >
          <option          
            v-for="(data, i) in storeDatas"
            :key="i"
            class="mb-0 p-3"
            style="font-weight: 400; padding: 10px"
            :value="i"
           
          >{{data.name}}</option>
        </select>
      </div>
      <div class="mt-3">
          <button class="btn btn-primary" @click="updateToken()">Shop Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import setAuthHeaders from "../utils/setAuthHeaders";
export default {
  data() {
    return {
      storeDatas: [],
      storedisplay:false,
      selStore: ''
    };
  },
    created(){
        this.store()
        
    },
  methods: {
    store() {
      axios.get("/auth-service/cws/store/selfCheckoutEnabledStores").then((response) => {
        this.storeDatas = response.data.stores;
      });
      
    },
    updateToken(){
      console.log('branch datar', this.storeDatas[this.selStore].storeCode)
      const oldd = localStorage.getItem('jwtToken')
      console.log('old token', oldd)
      axios.get("/auth-service/cws/store/"+String(this.storeDatas[this.selStore].storeCode)).then((response) => {
        console.log('justToken', response.headers.authorization)
        const token = response.headers.authorization;
        localStorage.setItem("jwtToken", response.headers.authorization);
        setAuthHeaders(token);
        const neww = localStorage.getItem('jwtToken')
        console.log('new token', neww)
        console.log('response', response.data)
      });
      this.$router.push('/home')
    },
    productList() {
      axios.post("/product-service/cws/catalog/products/9").then((response) => {
        console.log('list', response.data)
      });
    },

  },
};
</script>

<style scoped>
.active{
    border:1px solid red;
    background:#FEDBE2
}
</style>

