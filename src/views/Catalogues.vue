<template>
  <div class="m-3">
    <p class="text-left" style="font-size: 13px">
      Home > All Categories > Fashion > Men > Clothing Accessories
    </p>
    <div class="row">
      <div class="col-md-3">
        <div class="card text-left m-0 p-0" style="border-radius: 5px">
          <p class="mb-0 mt-2 ml-3" style="font-weight: bolder">Filters</p>
          <hr />
          <div v-show="this.brands.length != 0" >
          <p class="ml-3">Brand</p>
          <div class="sb-example-1 px-3 pr-5 mb-2">
            <div class="search mb-2">
              <button type="submit" class="searchButton ml-2">
                <i class="fa fa-search"></i>
              </button>
              <input
                type="text"
                class="searchTerm"
                placeholder="e.g : Adidas, Puma etc..."
              />
            </div>
          </div>
          <div
          
            v-for="(data, index) in brands"
            :key="index"
            class="text-left"
            style="text-align: left; padding-left: 20px"
          >
            <input v-model="selbrand" :value="data.value" type="checkbox" :id="index" />
            <label :for="index" class="pl-2">
              <p class="mb-1" style="font-size: 12px">
                {{ data.display_name }}
                <!-- <span class="number"> ( 34 )</span> -->
              </p>
            </label>
          </div>
          </div>
          <hr />
          <div v-show="this.sizes.length != 0">
          <p class="ml-3">Size</p>
          <div class="sb-example-1 px-3 pr-5 mb-2">
            <div class="search mb-2">
              <button type="submit" class="searchButton ml-2">
                <i class="fa fa-search"></i>
              </button>
              <input
                type="text"
                class="searchTerm"
                placeholder="e.g : Large, Small etc..."
              />
            </div>
          </div>
          <div
            v-for="(data, index) in sizes"
            :key="index"
            class="text-left"
            style="text-align: left; padding-left: 20px"
          >
            <input
              v-model="selsize"
              :value="data.value"
              type="checkbox"
              :id="index"
              style="padding-right: 12px"
            />
            <label :for="index">
              <p class="pl-1 mb-1" style="font-size: 12px">
                {{ data.display_name }}
              </p>
            </label>
          </div>
          </div>
          <hr />
          <div v-show="this.colours.length != 0">
          <p class="ml-3">Colours</p>
          <div class="sb-example-1 px-3 pr-5 mb-2">
            <div class="search mb-2">
              <button type="submit" class="searchButton ml-2">
                <i class="fa fa-search"></i>
              </button>
              <input
                type="text"
                class="searchTerm"
                placeholder="e.g : White, Red etc..."
              />
            </div>
          </div>
          <div
            v-for="(data, index) in colours"
            :key="index"
            class="text-left"
            style="text-align: left; padding-left: 20px"
          >
            <input
            v-model="selcolour"
              :value="data.value"
              type="checkbox"
              :id="index"
              style="padding-right: 12px"
            />
            <label :for="index">
              <p class="pl-1 mb-1" style="font-size: 12px">
                {{ data.display_name }}
              </p>
            </label>
          </div>
          </div>
          <div>
            <button type="button" class="btn btn-outline-secondary" @click="postFilt()">Apply</button>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <img
          src="https://www.jiomart.com/images/category/496/men-20200831.jpg"
          alt=""
          width="100%"
        />
        <div class="d-flex mt-3 my-3" style="justify-content: space-between">
          <div class=" " style="text-align: left">
            <p
              class="mb-0"
              style="color: black !important; opacity: 0.8; font-size: 14px"
            >
              Showing
              <span style="font-weight: bolder; color: black">20</span> of
              <span style="font-weight: bolder; color: black">128</span> items
            </p>
          </div>
          <div class="d-flex c">
            <div class="">
              <p class="mb-0">Sort By:</p>
            </div>
            <div class="d-flex justify-content-between">
              <div
                v-for="(data, index) in sorttext"
                :key="index"
                @click="selected(index)"
              >
                <button class="labelp p-1 px-2" style="margin-left: 10px">
                  {{ data.text }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 p-2" style="background: white">
          <p
            class="text-left ml-3 mt-1"
            style="
              color: rgba(21, 27, 57, 0.6);
              font-weight: 700;
              font-size: 13px;
            "
          >
            ALL PRODUCTS
          </p>
          <div class="row col-md-12">
            <div class="col-md-3" v-for="(data, index) in items" :key="index">
              <div class="m-0 my-2 p-1" style="margin-right: 9px">
                <div class="dis">
                  <span>
                    {{ data.discount }}<span class="per_txt">%</span>
                  </span>
                  <div class="clearfix"></div>
                  OFF
                </div>
                <img class="zoom" :src="data.img3" alt="" height="90%" width="100%" />
                <h5
                  class="mt-3 text-left"
                  style="
                    font-weight: bold;
                    font-size: 14px;
                    letter-spacing: 1px;
                  "
                >
                  {{ data.title }}
                </h5>
                <p class="text-left mb-0">
                  <span style="text-decoration: line-through; font-size: 13px"
                    >₹ 599.00</span
                  ><span
                    style="font-size: 16px; font-weight: bolder; color: black"
                    >{{ data.subtitle }}</span
                  >
                </p>
              </div>
            </div>

          <!-- Women's wear-->

          <div class="col-md-3" v-for="(data, index) in itemsArr" :key="index">
              <div class="m-0 my-2 p-1" style="margin-right: 9px">
                <div class="dis">
                  <span>
                    {{ data.net_price }}<span class="per_txt">%</span>
                  </span>
                  <div class="clearfix"></div>
                  OFF
                </div>
                <img class="zoom" :src="data.img_url" alt="" width="100%" />
                <h5
                  class="mt-3 text-left"
                  style="
                    font-weight: bold;
                    font-size: 14px;
                    letter-spacing: 1px;
                  "
                >
                  {{ data.name }}
                </h5>
                <p class="text-left mb-0">
                  <span style="text-decoration: line-through; font-size: 13px"
                    >₹ 599.00</span
                  ><span
                    style="font-size: 16px; font-weight: bolder; color: black"
                    > ₹ {{ data.mrp }}</span
                  >
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    
    return {    
      selbrand:[],
      selsize:[],
      selcolour:[],      
      brands: [],
      sizes: [],
      colours:[],
      items: [
        {
          title: "Zip-Front Training Jacket",
          img3: "https://www.jiomart.com/images/product/330x410/441120188_olivegreen/zip-front-training-jacket-model-441120188_olivegreen-0-202104212037.jpg",
          subtitle: " ₹ 599.00",
          discount: 14,
        },
      ],
      sorttext: [
        {
          id: 1,
          text: "Price: High to Low",
        },
        {
          id: 2,
          text: "Price: Low to High",
        },
        {
          id: 3,
          text: "Name: A-Z",
        },
        {
          id: 4,
          text: "Name: Z-A",
        }
      ],
      itemsArr:[]
    };
  },
  
  created(){
    this.loadItems()    
    this.loadFilters()
  },
  methods: {
    selected(id){
      console.log('which butt', id)
        switch(id){
          case 0: 
              this.itemsArr.sort(function (a, b) {
              return b.mrp - a.mrp;
              });           
              break;
          case 1: 
              this.itemsArr.sort(function (a, b) {
              return a.mrp - b.mrp;
              });           
              break;
          case 2:
              this.itemsArr.sort(function (a, b) {
              const nameA = a.name.toUpperCase(); 
              const nameB = b.name.toUpperCase();
              if (nameA < nameB) {
              return -1;
              }
              });           
              break;
          case 3:
              this.itemsArr.sort(function (a, b) {
              const nameA = a.name.toUpperCase(); 
              const nameB = b.name.toUpperCase();
              if (nameA > nameB) {
              return -1;
              }
              });           
              break;
        }
    },
     postFilt(){     
      if(this.selsize.length == 0 && this.selbrand.length == 0 && this.selcolour.length == 0)
      {
        this.itemsArr = []
        this.loadItems()
      }
      else{
        const payload = {filters: [
        {
            key: "size",
            values:  this.selsize
            
        },
        {
            key: "brand",
           values:
           
                this.selbrand
            
        },
        {
            key: "color",
            values: this.selcolour
            
        }
    ] }

    

    console.log('dis payload', payload.filters[0].values)
      axios.post("/product-service/cws/catalog/products/",
          payload

      ).then((response) => {      
        console.log('resp',response.data)     
        this.itemsArr = response.data.item_list  
        console.log('filtrered arr', this.itemsArr)     
      }
      );      
      }
    },
    
    loadItems(){
      axios.post("/product-service/cws/catalog/products/"+String(this.$store.state.fashid)).then((response) => {
        console.log('list', response.data.item_list)
        this.itemsArr = response.data.item_list  
        console.log('arr', this.itemsArr)     
      }
      );
      
  },
  loadFilters(){
      axios.get("/product-service/cws/catalog/filters/"+String(this.$store.state.fashid)).then((response) => {        
        
          let arr = response.data.filters.find(a => a.key === "size")
          console.log('size arr', arr.values)
        this.sizes = arr.values
       
          let arr2 = response.data.filters.find(a => a.key === "brand")
          console.log('brand arr', arr2.values)
        this.brands = arr2.values
       
          let arr3 = response.data.filters.find(a => a.key === "color")
          console.log('color arr', arr3.values)
          this.colours = arr3.values
                 
  }     
      );
      console.log('failed filters')
  }
  }
};
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
