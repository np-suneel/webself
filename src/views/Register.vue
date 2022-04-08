<template>
  <div>
    <div class="mt-1 border col-md-3 form pt-1 mb-5" v-if="!otpShow">
      <p>{{responseMsg}}</p>
      <h5 style="color: black">Register</h5>

      <label
        for="username"
        class="text-left"
        style="color: black; text-align: left !important"
        >Name</label
      >
      <input
        v-model="firstName"
        class="form-control"
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
      <input v-model="email" type="email" placeholder="xyz@xyz.com" id=" " class="form-control" />

      <label for="password" style="color: black; text-align: left"
        >Mobile Number</label
      >
      <input
        v-model="mobileNumber"
        type="number"
        placeholder="+91 9123456789"
        style="color: black"
        class="form-control"
      />

      <label for="password" style="color: black; text-align: left"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        style="color: black"
        class="form-control"
      />

      <button class="mt-5 btn btn-danger w-100 py-2" @click="submitDetails()">
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
      v-if="otpShow"
    >
      <div class="position-relative">
        <div class="card p-5 text-center">
          <p style="font-size:12px;color:red">{{otpResponse}}</p>
          <h6>Please enter the one time password <br /></h6>
          <div><span> sent to</span> <small>+91 {{this.mobileNumber}}</small></div>
          <div
            id="otp"
            class="inputs d-flex flex-row justify-content-center mt-2"
          >
            <input type="number" class=form-control v-model="otp" minlength="4" maxlength="4" >
          </div>
          <div class="mt-4">
            <button class="btn btn-danger px-4 validate" @click="send()">Validate</button>
          </div>
          <div
            class="mt-3 content d-flex justify-content-center align-items-center"
          >
            <p class="text-decoration-none " style="font-size:12px" v-if="resendShow" @click="resend()">Resend OTP</p>
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
      responseMsg:'',
      otpShow: false,
      resendShow:false
    };
  },
  created(){
    this.cals()
  },
  methods: {
    submitDetails() {
      this.loading = true;
      axios
        .post("/auth-service/customer/register", {
          firstName: this.firstName,
          password: this.password,
          mobileNumber: this.mobileNumber,
          email: this.email,
          tenantId: 1,
        })
        .then((response) => {
          
          console.log(response.data.statusMessage);
          this.responseMsg = response.data.statusMessage
          if(response.data.status == "success"){
            this.transactionId = response.data.transactionId;
            this.otpShow = true;
          }
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
        "/auth-service//customer/validateOTP",
        {
          mobileNumber: this.mobileNumber,
          tenantId: 1,
          transactionId: this.transactionId,
          otp: this.otp,
        }
      ).then((resp)=>{
        this.otpResponse = resp.data.statusMessage
        if(resp.data.status == 'failed'){
          this.resendShow = true
        }
        else{
          this.resendShow = false
          this.$router.push('/login')
        }
      });
    },
    resend(){
      this.resendShow = false
      axios.post(
        "/auth-service//customer/resendOTP",
        {
          mobileNumber: this.mobileNumber,
          tenantId: 1,
        }
      ).then((resp)=>{
        if(resp.data.status == 'failed'){
          this.resendShow = true
        }else{
          this.resendShow = false
          
        }
      })
    },
  },
};
</script>

<style scoped>
.height-100 {
  height: 100vh;
}

.form {

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;

  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 50px 35px;
}
.form * {
  

  letter-spacing: 0.5px;

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

</style>
