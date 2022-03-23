<template>
  <div class="col-md-11 m-auto">
    {{$store.state.kanganaRunout}}
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
        <p style="font-weight:700; font-size:13px">Category: {{ this.$store.state.expandata.category_name }}</p>
        <p style="font-weight:700">{{ this.$store.state.expandata.name }}</p>        
        <p style="font-weight:700; font-size:13px">MRP: <span style="color:grey">₹ {{ this.$store.state.expandata.mrp }}</span></p>
        <p style="font-size:13px"><span style="font-weight:700; font-size:14px">Description:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium quae, nam optio odio quibusdam animi incidunt, voluptatum vero vel veritatis laborum magnam est quia ab! Architecto ullam harum corrupti. </p>
        <button class="btn btn-danger" @click="addtocart()">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      indexOfActive: 0,
      st:[],
      activePic:
        this.$store.state.expandata.img_url,
      pictures: [
        this.$store.state.expandata.img_url
      ],
    };
  },
 
  methods: {
    changeActivePic(index) {
      this.activePic = this.pictures[index];
      this.indexOfActive = index;
    },
    addtocart(){
      axios.post('/cart-service/ws/cart/addItemtoCart',{
           operation: "AddItem",
            cartItems: [
                {
                    storeId: 109,
                    quantity: 1,
                    sku: this.$store.state.expandata.sku,
                    storeCode: this.$store.state.expandata.storeCode,
                    sequence: 0
                }
            ]
      }).then(response =>{
        console.log("add to cart",response.data)
        this.$store.commit('kanganaRunout', response.data)
      }
      )
    }
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
