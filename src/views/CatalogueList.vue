<template>
  <div class="">
    <div class="row">
      <div class="col-md-5" id="vue-slider">
        <div class="picture">
          <img :src="activePic" alt="" />
        </div>
        <div class="pictures">
          <div class="col" v-for="(data, index) in pictures" :key="index">
            <img
              :src="data"
              @mouseover="changeActivePic(index)"
              :class="{ active: index == indexOfActive ? true : false }"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-md-7 text-left">
        <p>Category: {{ this.$store.state.expandata.category_name }}</p>
        <h3>{{ this.$store.state.expandata.name }}</h3>        
        <p>MRP: ₹ {{ this.$store.state.expandata.mrp }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexOfActive: 0,
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
  },
};
</script>

<style scoped>
.picture {
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
}
.active {
  border: 2px solid red;
}
</style>
