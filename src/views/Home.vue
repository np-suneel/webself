<template>
  <div class="m-0 p-0">
    <!-- carousel -->
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      @click="$router.push('/catalogues')"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            height=""
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1639669823_MUMBAI-Desktop.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            height=""
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1639591676_1_web.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>

        <div class="carousel-item">
          <img
            height=""
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1637673886_Winter-Health--Immunity-Booster-1680x320.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- carousel end -->
    <div class="mx-3 my-3">
      <img
        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1639679076_web.jpg"
        alt=""
        width="100%"
      />
    </div>
    <features class="my-5"></features>
    <img
      width="100%"
      src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg"
      alt=""
    />
    <features1 class="my-5"></features1>
    <features2 class="my-5"></features2>
    <features3 class="my-5"></features3>
  </div>
</template>

<script>
import features from "../views/Trending";
import features1 from "../views/Trending2";
import features2 from "../views/Trending3";
import features3 from "../views/Trending4";
export default {
  components: {
    features,
    features1,
    features2,
    features3,
  },
};
</script>

<style scoped></style>
