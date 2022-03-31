<template>
<div>
  <div class="card col-md-4 m-auto p-5" style="text-align:left">
    <label>Enter current password:</label>
    <input type="password" v-model="currpass" />
    <label class="mt-3">Enter new password:</label>
    <input type="password" v-model="newpass" />
    <label class="mt-3">Re-Enter new password:</label>
    <input type="password"  />
    <button class="btn btn-primary mt-3" @click="resetPass()">Reset password</button>
  </div>
   
  <div class="card mt-2  col-md-4 m-auto p-1">
     <p class="mb-0" @click="chngStr">Change store</p>
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
    };
  },
  methods: {
    chngStr(){
      localStorage.setItem('chngStr',1)
      this.$router.push('/select-store')
    },
    resetPass() {
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
    },
  },
};
</script>
