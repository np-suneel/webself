<template>
  <div>
    <div class="mt-1 col-md-3 form pt-1 mb-5" v-if="true">
      <p v-if="msg" style="color: red">500 error</p>
      <h5 style="color: black">Register</h5>

      <label
        for="username"
        class="text-left"
        style="color: black; text-align: left !important"
        >Name</label
      >
      <input
        v-model="firstName"
        type="text"
        placeholder="Full Name"
        style="color: black"
      />

      <label
        for="username"
        class="text-left"
        style="color: black; text-align: left !important"
        >Email</label
      >
      <input v-model="email" type="email" placeholder="abc@gmail.com" id="" />

      <label for="password" style="color: black; text-align: left"
        >Mobile Number</label
      >
      <input
        v-model="mobileNumber"
        type="number"
        placeholder="+91 9123456789"
        style="color: black"
      />

      <label for="password" style="color: black; text-align: left"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        style="color: black"
      />

      <button class="mt-5" @click="submitDetails()">
        <span v-if="loading">Loading</span> <span v-else>SUBMIT</span>
      </button>
      <p class="mb-0 mt-4" style="color: black; font-size: 13px">
        Already Registered ?
        <span
          @click="$router.push('/login')"
          style="cursor: pointer; color: black; font-weight: 700"
          >Login</span
        >
      </p>
      <!-- <input type="text" placeholder="otp" v-model="otp" />
        <button @click="send()">Verify</button> -->
    </div>
    <div
      class="container height-100 d-flex justify-content-center align-items-center"
      v-if="false"
    >
      <div class="position-relative">
        <div class="card p-2 text-center">
          <h6>Please enter the one time password <br /></h6>
          <div><span> sent to</span> <small>+91 6363623189</small></div>
          <div
            id="otp"
            class="inputs d-flex flex-row justify-content-center mt-2"
          >
            <input
              class="m-2 text-center form-control rounded"
              type="text"
              id="input1"
              v-on:keyup="inputenter(1)"
              maxlength="1"
            />
            <input
              class="m-2 text-center form-control rounded"
              v-on:keyup="inputenter(2)"
              type="text"
              id="input2"
              maxlength="1"
            />
            <input
              class="m-2 text-center form-control rounded"
              v-on:keyup="inputenter(3)"
              type="text"
              id="input3"
              maxlength="1"
            />
            <input
              class="m-2 text-center form-control rounded"
              v-on:keyup="inputenter(4)"
              type="text"
              id="input4"
              maxlength="1"
            />
          </div>
          <div class="mt-4">
            <button class="btn btn-danger px-4 validate">Validate</button>
          </div>
          <div
            class="mt-3 content d-flex justify-content-center align-items-center"
          >
            <span>Didn't get the code</span>
            <a href="#" class="text-decoration-none ms-3">Resend</a>
          </div>
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
      loading: false,
      msg: false,
      otpShow: false,
    };
  },
  methods: {
    submitDetails() {
      this.loading = true;
      axios
        .post("/auth-service/customer/register", {
          firstName: "",
          password: "",
          mobileNumber: "",
          email: "",
          tenantId: 1,
        })
        .then((response) => {
          console.log(response);
          this.transactionId = response.data.transactionId;
          this.otpShow = true;
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
    send() {
      axios.post(
        "https://bf-qa.rdep.io:9090/auth-service//customer/validateOTP",
        {
          mobileNumber: 6363623189,
          tenantId: 1,
          transactionId: this.transactionId,
          otp: this.otp,
        }
      );
    },
  },
};
</script>

<style scoped>
.height-100 {
  height: 100vh;
}

.card {
  width: 400px;
  border: none;
  height: 300px;
  box-shadow: 0px 5px 20px 0px #6f1667;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card h6 {
  color: #6f1667;
  font-size: 20px;
}

.inputs input {
  width: 40px;
  height: 40px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

.form-control:focus {
  box-shadow: none;
  border: 2px solid #6f1667;
}

.validate {
  border-radius: 20px;
  height: 50px;
  background-color: #6f1667;
  border: 1px solid #6f1667;
  width: 100%;
}

.content a {
  color: #d64f4f;
  transition: all 0.5s;
}

.content a:hover {
  color: #6f1667;
}
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
/* .shape:first-child{
    background: linear-gradient(
        #1845ad,
        #23a2f6
    );
    left: -80px;
    top: -80px;
}
.shape:last-child{
    background: linear-gradient(
        to right,
        #ff512f,
        #f09819
    );
    right: -30px;
    bottom: -80px;
} */
.form {
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
.form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
.form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 20px;
  font-size: 13px;
  font-weight: 500;
}
input {
  display: block;
  height: 40px;
  width: 100%;
  background-color: #e8f0fe;
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: black;
}
::placeholder {
  color: grey;
}
button {
  margin-top: 0px;
  width: 100%;
  background-color: red;
  color: white;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}
</style>
