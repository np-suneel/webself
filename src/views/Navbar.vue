<template>
  <div class="col-md-12 m-0 p-0" style="background: #eb6079">
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
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item" style="margin-left: 20px">
            <a class="nav-link" href="#">Shop</a>
          </li>
          <li class="nav-item" style="margin-left: 20px">
            <a class="nav-link" href="#">Department</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i
                class="fa fa-user"
                style="font-size: 20px; padding-right: 10px; color: white"
              ></i
              >Profile</a
            >
          </li>
          <li class="nav-item" style="margin-right: 30px">
            <a class="nav-link disabled" href="#"
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>
