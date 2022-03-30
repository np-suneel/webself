<template>
  <div class="col-md-12 mb-5" style="margin-top: 50px">
    <div
      class="col-md-3 card m-auto p-5"
      style=" border-radius: 5px"
    >
      <h5 style="color: black">Login Here</h5>
      <!-- <button class="btn btn-success" @click="getposts()">Get Posts</button>
      <button @click="deletetoken">delete token</button> -->
      <p style="font-size: 12px">{{ errorMsg }}</p>
      <label
        for="username"
        class="text-left"
        style="color: black; text-align: left !important"
        >Username</label
      >
      <input
        type="text"
        placeholder="Phone Number"
        v-model="phoneNo"
        style="color: black"
      />

      <label for="password" style="color: black; text-align: left"
        >Password</label
      >
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        style="color: black"
      />

      <button  class="btn btn-danger" style="border: 1px solid red" @click="login">Log In</button>
      <!-- <div class="social">
        <div class="go" style="background: #ea617c; color: white">
          <i class="fab fa-google"></i> Google
        </div>
        <div class="fb" style="background: #3e99e7; color: white">
          <i class="fab fa-facebook"></i> Facebook
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import setAuthHeaders from "../utils/setAuthHeaders";
export default {
  data() {
    return {
      phoneNo: 9611100928,
      password: "123456",
      errorMsg: "",
      // loading: false,
      // msg: false,
      // otpShow: false
    };
  },
  methods: {
    getposts() {
      axios
        .get("/auth-service/cws/store/selfCheckoutEnabledStores")
        .then((response) => {
          console.log("response", response.data);
        });
    },
    deletetoken() {
      window.localStorage.removeItem("jwtToken");
    },
    login() {
      localStorage.setItem('chngStr',0)
      this.loading = true;
      axios
        .post("/auth-service/cws/auth", {
          phoneNo: this.phoneNo,
          password: this.password,
          tenantSubDomain: "bf-qa",
        })
        .then((response) => {
          const token = response.headers.authorization;
          localStorage.setItem("jwtToken", response.headers.authorization);
          setAuthHeaders(token);
          console.log(response.data.statusCode);
          if (response.data.statusCode == 200) {
            this.$router.push("/select-store");
          } else {
            this.errorMsg = response.data.statusMessage;
          }

          // this.transactionId = response.data.transactionId;
          // this.otpShow = true
        })
        .catch((error) => {
          this.$bvToast.toast("Some error Occured.", {
            title: "Error",
            variant: "danger",
          });
          this.msg = true;
          this.response_message = error;
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
/* .background{
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
} */
.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
}
.shape:last-child {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
}
form {
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: grey;
}
button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.social {
  margin-top: 30px;
  display: flex;
}
.social div {
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}
.social .fb {
  margin-left: 25px;
}
.social i {
  margin-right: 4px;
}
</style>
