<template>
<div>
    <div>
        <h5 style="font-weight: 700" class="text-left">Saved Addresses</h5>
        
      </div>
<div class="card p-3" v-for="(data,index) in deladdarr" :key="index">
    <input type="radio" @click="checks(data)">
    
            <div class="d-flex justify-content-between">
              
              <p>{{ data.tag }}</p>
            </div>
            <div class="col-md-12 d-flex">
            <div class="col-md-6 text-left">
                <p>{{ data.contactPerson }}</p>
                <p>{{data.addressLine1}} </p>
                <p>{{data.addressLine2}} </p>
                <p>{{data.addressLine3}} </p>
                <p>{{data.city}} - {{data.pinCode}} </p>
                <p>{{data.district}}</p>
                <p>{{data.state}}, {{data.country}}</p>

                <h4>Landmark:</h4><p>{{data.landmark}}</p>
              </div>
              <div
                class="col-md-4 mt-4 pt-5 pr-0 mr-0 text-right align-text-bottom"
              >
              <div class="mt-1">
                   <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="removeAddress(data.addressId)"
                    type="button"
                    name="button"
                  >
                    Remove item
                  </button>                  
                </div>                
              </div>
            
            </div>
    
          </div>
</div>
</template>

<script>

import axios from 'axios'
export default{
data(){
    return{
        deladdarr: []
    }
},
created(){
axios.get('customer-service/cws/address/').then((response) =>{
    console.log('addresses', response.data.addresses)
    this.deladdarr = response.data.addresses
})

},
methods:{

    removeAddress(addr){
        axios.delete('customer-service/cws/address/'+addr).then((response)=>
        {
            console.log('afa delte adrr',response.data)
            if(response.data.status == "success"){
                axios.get('customer-service/cws/address/').then((response) =>{
                console.log('new list of addresses', response.data.addresses)
                this.deladdarr = response.data.addresses

            })
            }
        })
    },
    checks(data)
    {
        console.log('seld row',data)
    }
}
   
}
</script>
