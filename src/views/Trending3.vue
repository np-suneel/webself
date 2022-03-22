<template>
  <div class="mb-5 col-md-12 py-5 p-0">
    <div class="col-md-10 m-auto">
      <div
        class="d-flex"
        style="justify-content: space-between; font-weight: bolder"
      >
        <h5 class="" style="text-align: left; font-weight: bolder">
          New Arrivals
        </h5>
        <p style="color: blue; font-weight: 400">View All</p>
      </div>
    </div>
    <div class="bike-section col-md-10 p-0" ref="foo" style="margin: 0 auto">
      <!-- <div id="wrapper" class="card otr-card no-shadow col-md-1 col-3 mr-3 my-2 p-0">
                    <img src="../assets/compressed/findx.png" alt="" width="100%">
                </div>      -->

      <div
        class="card otr-card col-md-3 col-6 mr-3 my-2 p-0"
        v-on:click="display(data.vehicle_id)"
        v-for="(data, index) in f"
        :key="index"
      >
        <img class="image" :src="data.img" width="100%" alt="" />
        <p
          class="mb-0 mt-2 pl-3"
          style="
            color: black;
            font-weight: 600;
            text-align: left;
            padding-left: 20px;
          "
        >
          {{ data.title }}
        </p>
        <p
          class="pl-3 mb-2 mb-0"
          style="
            font-size: 13px;
            color: blue;
            text-align: left;
            padding-left: 20px;
          "
        >
          {{ data.price }}
        </p>
      </div>
      <div
        id="wrapper"
        class="card otr-card no-shadow col-md-2 col-6 mr-3 my-2 p-0"
      >
        <button @click="viewBikes" class="view-all-button" type="button">
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
        <p class="header-xs pt-2" @click="viewBikes">View All</p>
      </div>
    </div>

    <button class="left control-button" @click="scrollLeft">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
    <button class="right control-button" @click="scrollRight">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // bikes:[{"name":"1"},{"name":"2"},{"name":"3"},{"name":"4"},{"name":"5"},{"name":"6"},{"name":"7"}],
      isMounted: false,
      scrolledValue: 0,
      f: [
        {
          img: require("../assets/images/customer-service/1.png"),
          title: "Table TM A2 work",
          price: "Rs.120",
        },
        {
          img: require("../assets/images/customer-service/2.png"),
          title: "Table TM A2 work",
          price: "Rs.120",
        },
        {
          img: require("../assets/images/customer-service/3.png"),
          title: "Table TM A2 work",
          price: "Rs.120",
        },
        {
          img: require("../assets/images/customer-service/4.png"),
          title: "Table TM A2 work",
          price: "Rs.120",
        },
        {
          img: require("../assets/images/customer-service/5.png"),
          title: "Table TM A2 work",
          price: "Rs.120",
        },
      ],
    };
  },
  mounted() {
    this.isMounted = true;
  },
  // created(){
  //     this.$store.dispatch('load_top_selling')
  //     this.$store.dispatch('load_display_images')
  // },
  methods: {
    scrollRight() {
      let content = this.$refs.foo;
      if (this.scrolledValue < this.totalWidth) {
        content.scrollLeft += 300;
        this.scrolledValue += 300;
      } else {
        let x = this.totalWidth - this.scrolledValue;
        content.scrollLeft += x;
        this.scrolledValue += x;
      }
    },
    scrollLeft() {
      let content = this.$refs.foo;
      content.scrollLeft -= 300;
      this.scrolledValue -= 300;
    },
    // display(id){
    //     this.$router.push('/vehicle/' +id)
    //     window.scrollTo(0,0)
    // },
    // viewBikes(){
    //     this.$router.push('/scooter')
    // }
  },
  computed: {
    leftScroll() {
      return this.scrolledValue;
    },
    totalWidth() {
      if (this.isMounted) {
        return this.$refs.foo.scrollWidth - this.$refs.foo.clientWidth;
      } else {
        return 0;
      }
    },
    //      top_selling_vehicles(){
    //   return this.$store.state.top_selling_vehicles
    // },
    // displayImage(){
    //   return  this.$store.state.display_images
    // },
    // TOP_SELLING(){
    //     const temp2 = []
    //     this.top_selling_vehicles.forEach(x => {
    //         this.displayImage.forEach(y => {
    //         if (x.vehicle_id === y.vehicle_id) {
    //             temp2.push({ ...x, ...y })
    //         }
    //         })
    //     })
    // return temp2
    // },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .zxcv {
    font-size: 10px !important;
    color: grey;
    font-weight: 500;
  }
}

@media (min-width: 768px) {
  .col-md-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 21.8% !important;
  }
}

.card {
  margin-right: 24px !important;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1),
    0 2px 20px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 20px 0 rgba(0, 0, 0, 0.05);
}
.zxcv {
  font-size: 10px !important;
  color: grey;
  letter-spacing: 1px;
  font-weight: 500;
}
.didi {
  padding-bottom: 9px;
}

@media only screen and (max-width: 780px) {
  .control-button {
    display: none !important;
  }
  .ZXCV {
    font-size: 9px !important;
  }
}
.bike-section {
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
}
.header-xl {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
}
.header-sm {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
}
.otr-card {
  padding: 15px;
  box-shadow: 0 1px 3px rgba(36, 39, 44, 0.15);
  border: none;
}
::-webkit-scrollbar {
  display: none;
}
.no-shadow {
  box-shadow: none !important;
}
.control-button {
  background-color: white;
  padding: 12px 18px;
  border-radius: 50%;
  outline: none;
  -webkit-box-shadow: 0 8px 12px 0 rgba(36, 39, 44, 0.15);
  box-shadow: 0 8px 12px 0 rgba(36, 39, 44, 0.15);
  color: #f5821f !important;
  z-index: 99;
  border-radius: 50%;
  border: none;
}
.left {
  position: absolute;
  left: 8%;
  top: 285%;
}
.right {
  position: absolute;
  right: 7%;
  top: 285%;
}
#wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.view-all-button {
  background-color: #f5821f !important;
  padding: 15px 18px;
  border-radius: 50%;
  outline: none;
  box-shadow: 2px 2px 4px 1px #f5821f;
  color: #fff;
  z-index: 99;
  border-radius: 50%;
  border: none;
}
</style>
