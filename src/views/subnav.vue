<template>
  <div class="col-md-12 m-0 p-0 py-2" style="background: white">
    <div class="col-md-11 m-auto">
      <div class="d-flex col-md-6" style="color: black; font-weight: 700">
        <div class="bttns" v-for="(item, i) in buttArr" :key="i" :value="i">
          <b-button variant="outline-secondary" @click="drpFunc(item.id)">
            {{ item.name }}
          </b-button>
        </div>
        <div
          class="drps"
          v-for="(items, j) in drpArr"
          :key="j"
          :value="j"
          style="margin-left: 10px"
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
      itemArr: [],
    };
  },
  created() {
    this.loadItems();
  },
  methods: {
    drpFunc(id) {
      console.log("clicked drpdwn", id);
      //this.$store.commit('fashId',id)
      localStorage.setItem("fashionId", id);
      this.$router.push("/catalogues");
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

<style>
a {
  text-decoration: none !important;
  color: black;
}
.drop {
  background: none;
  border: none;
  color: black;
}
</style>
