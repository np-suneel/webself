<template>
  <div>
    
    <div class=" col-md-4 m-auto " >
      <p style="text-align:left;font-weight:700">1. Password Reset</p>
      <div class="card p-3" style="text-align:left">
        <label>Enter current password:</label>
        <input type="password" class="form-control" v-model="currpass" />
        <label class="mt-3">Enter new password:</label>
        <input type="password" class="form-control" v-model="newpass" />
        <label class="mt-3">Re-Enter new password:</label>
        <input  type="password" v-model="reenterpass" class="form-control" />
        <p class="mb-0 mt-2" v-if="alertMsg" style="color:red;font-size:10px;text-align:center">Password not matching</p>
        <button class="btn btn-primary mt-3" @click="resetPass()">
          Reset password
        </button>
      </div>   
    </div>

    <div class="col-md-4 m-auto">
      <p style="text-align:left;font-weight:700">2. Change Store</p>
      <div class="card mt-2 col-md-12 m-auto p-1">
        <button class="mb-0" @click="chngStr">Change store</button>
      </div>
    </div>

    <div class=" col-md-4 m-auto ">
      <div>
        <p style="text-align:left;font-weight:700">3. Select Language</p>
        <select class=" lang-switcher form-control" v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      currpass: "",
      newpass: "",
      reenterpass:"",
      langs: ["en", "ka"],
      alertMsg:''
    };
  },
  watch:{
    reenterpass(){
      if(this.newpass != this.reenterpass){
        this.alertMsg = true
      }
      else{
        this.alertMsg = false
      }
    }
  },
  methods: {
    
    chngStr() {
      localStorage.setItem("chngStr", 1);
      this.$router.push("/select-store");
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      this.hideDropdown();
    },
    resetPass() {
      if(!this.alertMsg){
        axios
        .post("auth-service/cws/password/reset", {
          currentPassword: this.currpass,
          newPassword: this.newpass,
        })
        .then((response) => {
          console.log("reset pass", response.data);
          if (response.data.status == "failed") alert("Wrong current password");
          else alert("Password has been reset");
        });
      }
    },
  },
};
</script>
