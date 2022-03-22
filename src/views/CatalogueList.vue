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
        <p>cjhsdcj</p>
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
        "https://www.jiomart.com/images/product/75x94/441120188_olivegreen/zip-front-training-jacket-model-441120188_olivegreen-0-202104212037.jpg",
      pictures: [
        "https://www.jiomart.com/images/product/75x94/441120188_olivegreen/zip-front-training-jacket-model-441120188_olivegreen-0-202104212037.jpg",
        "https://www.jiomart.com/images/product/600x750/441120188_olivegreen/zip-front-training-jacket-model2-441120188_olivegreen-2-202104212037.jpg",
        "https://www.jiomart.com/images/product/600x750/441120188_olivegreen/zip-front-training-jacket-model3-441120188_olivegreen-3-202104212036.jpg",
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
