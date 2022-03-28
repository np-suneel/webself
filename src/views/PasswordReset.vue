<template>
    <div>
       <label>Enter current password:</label> <input type="password" v-model="currpass">
       <label>Enter new password:</label> <input type="password" v-model="newpass"> 
        <button @click="resetPass()">Reset password</button>
        </div>
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return {
            currpass:'',
            newpass:''
        }
    },
    methods:{

        resetPass(){
            
         axios.post('auth-service/cws/password/reset', {}, {
  auth: {
    currentPassword: this.currpass,
    newPassword: this.newpass
  }
}).then((response) =>{
    console.log('reset pass',response.data)
    if(response.data.status == "failed")
    alert('Wrong current password')
    else
    alert('Password has been reset')
});
            
        
        
        }


    }

}
</script>
