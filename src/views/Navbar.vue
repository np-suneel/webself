<template>
  <div
    class="col-md-12 m-0 p-0"
    style="
      background: #021e45;
      box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
      z-index: 10;
      position: relative
    "
  >
 
    <!-- <ul>
            <li><img class="img-css" src="../assets/images/onboarding/rdep_logo.png" alt=""></li>
            <li style="float:right; color:white; padding-right:70px; margin-top: 24px;"><span style="font-size:16px;  font-family: 'DM Sans', sans-serif;">+91 91234 56789</span></li>
        </ul> -->
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#"
        ><img
          class="img-css"
          src="../assets/images/onboarding/rdep_logo.png"
          alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        style="margin-top: 10px; margin-left: 20px"
      >
        <ul class="navbar-nav" style="color: white">
          <li class="nav-item active" style="margin-left: 20px">
            <a
              class="nav-link"
              @click="$router.push('home')"
              style="cursor: pointer"
              >{{ $t("nav.h1") }} <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item" style="margin-left: 20px">
            <a class="nav-link" @click="openNav1()" style="cursor: pointer"
              >Catalogue  </a
            >
          </li>
          <li class="nav-item" style="margin-left: 20px">
            <a
              class="nav-link"
              @click="$router.push('/test')"
              style="cursor: pointer"
              >Scan</a
            >
          </li>
          <!-- <li class="nav-item" style="margin-left: 20px">
            <a class="nav-link" href="#">Department</a>
          </li> -->
        </ul>
      </div>
      <div>
        <ul>
          <li class="nav-item"  @mouseover="come()" @mouseleave="leav()">
            <a class="nav-link" style="cursor: pointer"
              ><i
                class="fa fa-user"
                style="font-size: 20px; padding-right: 10px; color: white"
              ></i
              >Profile</a
            >
            <div class="lgss" v-show="this.lobt">
              <a class="nav-link nav-item" style="cursor: pointer" @click="lgOut()"
              ><i
                class="fa fa-lock"
                style="font-size: 20px; padding-right: 10px; color: white"
              ></i
              >Log out</a
            >
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              @click="$router.push('myorders')"
              style="cursor: pointer"
              ><i
                class="fa fa-user"
                style="font-size: 20px; padding-right: 10px; color: white"
              ></i
              >My Orders</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="$router.push('resetpass')"
              style="cursor: pointer"
              ><i
                class="fa fa-user"
                style="font-size: 20px; padding-right: 10px; color: white"
              ></i
              >Settings</a
            >
          </li>
          <li class="nav-item" style="margin-right: 30px">
            <a
              class="nav-link"
              @click="$router.push('/cart')"
              style="cursor: pointer"
              ><i
                class="fa fa-cart-plus"
                style="font-size: 20px; padding-right: 10px; color: white"
              ></i
              >Cart</a
            >
          </li>
         
        </ul>
      </div>
    </nav>
    <div id="mySidenav1" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav1()"
        >&times;</a
      >
      <div
        class="bttns"
        v-for="(item, i) in buttArr"
        :key="i"
        :value="i"
        style="margin-left: 20px; text-align: left"
      >
        <b-button variant="outline-secondary" @click="drpFunc(item.id)">
          {{ item.name }}
        </b-button>
      </div>
      <div
        class="drps mt-2"
        v-for="(items, j) in drpArr"
        :key="j"
        :value="j"
        style="margin-left: 20px; text-align: left"
      >
        <b-dropdown
          split
          :text="items.name"
          split-variant="outline-secondary"
          @click="drpFunc(3)"
        >
          <b-dropdown-item
            @click="drpFunc(its.id)"
            v-for="(its, k) in items.sub_categories"
            :key="k"
            :value="k"
            >{{ its.name }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selItem: "",
      selbtn: "",
      seldrp: "",
      buttArr: [],
      drpArr: [],
      lobt: false
    };
  },
  created() {
    this.loadItems();
    
  },
  methods: {
    lgOut() {
      
      localStorage.removeItem('jwtToken')
      
      this.$router.push('/login')
      
      
    },
    come(){
      this.lobt=true
    },
    leav(){
      this.lobt=false
    },
    drpFunc(id) {
      console.log("clicked drpdwn", id);
      //this.$store.commit('fashId',id)
      
      if(this.$router.currentRoute.path !== '/catalogues'){
        localStorage.setItem("fashionId", id);
      this.$router.push("/catalogues");
      }
      else{
        localStorage.setItem("fashionId", id);
      }
    },
    openNav1() {
      window.document.getElementById("mySidenav1").style.width = "250px";
      window.document.getElementById("main").style.marginLeft = "250px";
      window.document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    },
    closeNav1() {
      window.document.getElementById("mySidenav1").style.width = "0";
      window.document.getElementById("main").style.marginLeft = "0";
      window.document.body.style.backgroundColor = "white";
    },
    loadItems() {
      axios.get("/product-service/cws/catalog/online").then((response) => {
        console.log("list", response.data.categories);
        this.itemArr = response.data.categories;
        for (let i = 0; i < this.itemArr.length; i++) {
          if (this.itemArr[i].sub_categories.length != 0)
            this.drpArr.push(this.itemArr[i]);
          else this.buttArr.push(this.itemArr[i]);
        }

        console.log("dis array", this.itemArr[1].sub_categories);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.lgss{
  position: absolute;
  background: #021e45;
      box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
      z-index: 10;
}
li {
  float: left;
  color: white !important;
}
.nav-link {
  color: white;
  font-weight: 600;
}
.img-css {
  height: 32px;
  width: 98.90908813476562px;
  margin-left: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 0px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f3f3f3;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
