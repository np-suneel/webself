<template>
  <div class="col-md-11 m-auto mx-3 mb-3" style="padding-top: 7rem!important;">
    <div class="row my-3" >
      <div class="col-md-5 card" id="vue-slider">
        <div class="picture p-3">
          <img :src="activePic" alt="" width="360px" height="auto" />
        </div>
        <!-- <div class="pictures">
          <div class="col" v-for="(data, index) in pictures" :key="index">
            <img
              :src="data"
              @mouseover="changeActivePic(index)"
              :class="{ active: index == indexOfActive ? true : false }"
              alt=""
            />
          </div>
        </div> -->
      </div>
      <div class="col-md-6 " style="text-align:left">
        <p style="font-weight:700; font-size:13px">Category: {{ this.categoryname }}</p>
        <p style="font-weight:700">{{ this.itemname }}</p>        
        <p style="font-weight:700; font-size:13px">MRP: <span style="color:grey">₹ {{ this.mrp }}</span></p>
        <p style="font-size:13px"><span style="font-weight:700; font-size:14px">Description:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium quae, nam optio odio quibusdam animi incidunt, voluptatum vero vel veritatis laborum magnam est quia ab! Architecto ullam harum corrupti. </p>
        <button class="btn btn-danger" @click="addToCart()">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  created(){
    //localStorage.removeItem('cartData')
    //localStorage.removeItem('cartId')
    this.categoryname = JSON.parse(localStorage.getItem('expandFashion')).category_name
    this.itemname = JSON.parse(localStorage.getItem('expandFashion')).name
    this.mrp = JSON.parse(localStorage.getItem('expandFashion')).mrp    
  },  
  data() {
    return {
      indexOfActive: 0,      
      activePic:
        JSON.parse(localStorage.getItem('expandFashion')).img_url,
      pictures: [
        JSON.parse(localStorage.getItem('expandFashion')).img_url
      ],
      categoryname:'',
      itemname:'',
      mrp:''
    };
  },
  methods: {
    addToCart(){      
      if(localStorage.getItem('cartId') == null){
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
      
      localStorage.setItem('cartId',response.data.cartId)
      console.log('successfully added first item with cart id',localStorage.getItem('cartId'))
      this.$router.push('/cart')
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
            sku: JSON.parse(localStorage.getItem('expandFashion')).sku,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sequence: 0            
        
     }
     ]
    }    
    axios.post('/cart-service/ws/cart/addItemtoCart',payload).then((response) => {
      
      console.log('successfully added next item with cart id',localStorage.getItem('cartId'))
      localStorage.setItem('cartId',response.data.cartId)
      this.$router.push('/cart')
      })  
          
      }
      
    },

    changeActivePic(index) {
      this.activePic = this.pictures[index];
      this.indexOfActive = index;
    },
  },
};
</script>

<style scoped>
/* .picture {
  width: 500px;
}
.picture img {
  width: 100%;
}

.pictures {
  width: 900px;
  display: flex;
}
.pictures img {
  width: 150px;
  margin: 15px;
} */
.active {
  border: 2px solid red;
}
</style>
