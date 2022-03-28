<template>
<div>
    <div class="row col-8"><h3>Delivery Info</h3>  </div>
    <div class="row col-8"><h3>Email:  </h3> </div>
    <div class="row col-8"><h3>Delivery: </h3>
        <div><input type="radio" @click="storePickup()">Pickup at the Store</div>
  <div><input type="radio" @click="loadAddress()">Delivery Service </div>
  <div v-show="showaddr">
    <div>
        <h5 style="font-weight: 700" class="text-left">Saved Addresses</h5>
        <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="editAddAddress('')"
                    type="button"
                    name="button"
                  >
                    Add address
                    
                  </button>  

      </div>
<div class="card p-1" v-for="(data) in addrarr" :key="data.addressId">
  <input type="radio" @click="selAddress(data)">
            <div class="d-flex justify-content-between">
              <div>
              <p>{{ data.tag }}</p>
              </div>
              <div class="d-flex flex-row-reverse" :v-if="data.defaultDeliveryAddress">
              <p><b>Default address</b></p>
              </div>
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
                    @click="editAddAddress(data)"
                    type="button"
                    name="button"
                  >
                    Edit address
                    
                  </button>  




                  

  <b-modal v-model = "clickededit" id="modal-1" title="Edit address" no-close-on-esc hide-footer>
    <b-form>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Phone number:"
        label-for="input-1"
        description="We'll never share your phone number with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.phno"
          type="number"
          placeholder="Enter phone number"
          required
        ></b-form-input>
      </b-form-group>

      

      <b-form-group id="input-group-2" label="Enter Address Line 1:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.addrlin1"
          placeholder="Enter Address Line 1"
          required
        ></b-form-input>
      </b-form-group>
       <b-form-group id="input-group-2" label="Enter Address Line 2:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.addrlin2"
          placeholder="Enter Address Line 2"
          required
        ></b-form-input>
      </b-form-group>
       <b-form-group id="input-group-2" label="Enter Address Line 3:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.addrlin3"
          placeholder="Enter Address Line 3"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="City:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.city"
          placeholder="Enter city"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="District:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.district"
          placeholder="Enter district"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="State:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.state"
          placeholder="Enter state"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Country:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.country"
          placeholder="Enter country"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group id="input-group-2" label="PIN Code:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.pincode"
          placeholder="Enter PIN code"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Landmark:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.landmark"
          placeholder="Enter landmark"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Enter label: (eg. Home, Office, etc.)" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.label"
          placeholder="Enter label"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Delivery type" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Home">Home</b-form-radio>
      <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Office">Office</b-form-radio>
    </b-form-group>
      <b-form-checkbox
      id="checkbox-1"
      v-model="form.ifdefault"
      name="checkbox-1"
      value="true"
      unchecked-value="false"
    >
      Make this default address
    </b-form-checkbox>
   
      <b-button type="button" @click ="onSubmitAddr()" variant="primary">Submit</b-button>
      <b-button type="button" @click="onResetAddr()" variant="danger">Reset</b-button>
    </b-form>
  </b-modal>     


<b-modal v-model = "clickedadd" id="modal-1" title="Add address" no-close-on-esc hide-footer>
    <b-form>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Phone number:"
        label-for="input-1"
        description="We'll never share your phone number with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.phno"
          type="number"
          placeholder="Enter phone number"
          required
        ></b-form-input>
      </b-form-group>

      

      <b-form-group id="input-group-2" label="Enter Address Line 1:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.addrlin1"
          placeholder="Enter Address Line 1"
          required
        ></b-form-input>
      </b-form-group>
       <b-form-group id="input-group-2" label="Enter Address Line 2:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.addrlin2"
          placeholder="Enter Address Line 2"
          required
        ></b-form-input>
      </b-form-group>
       <b-form-group id="input-group-2" label="Enter Address Line 3:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.addrlin3"
          placeholder="Enter Address Line 3"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="City:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.city"
          placeholder="Enter city"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="District:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.district"
          placeholder="Enter district"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="State:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.state"
          placeholder="Enter state"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Country:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.country"
          placeholder="Enter country"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group id="input-group-2" label="PIN Code:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.pincode"
          placeholder="Enter PIN code"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Landmark:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.landmark"
          placeholder="Enter landmark"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Enter label: (eg. Home, Office, etc.)" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.label"
          placeholder="Enter label"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Delivery type" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Home">Home</b-form-radio>
      <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Office">Office</b-form-radio>
    </b-form-group>
      <b-form-checkbox
      id="checkbox-1"
      v-model="form.ifdefault"
      name="checkbox-1"
      value="true"
      unchecked-value="false"
    >
      Make this default address
    </b-form-checkbox>
   
      <b-button type="button" @click ="submitAddr()" variant="primary">Submit</b-button>
      <b-button type="button" @click="onResetAddr()" variant="danger">Reset</b-button>
    </b-form>
  </b-modal>     




                </div>  
              <div class="mt-1">
                   <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="removeAddress(data.addressId)"
                    type="button"
                    name="button"
                  >
                    Remove address
                  </button>                  
                </div>                
              </div>
            </div>
</div>
    
    
    
    
    
    </div>
    </div>

<div class="row col-8"><h3>Payment Method: </h3>
<div>
<input type="radio">Pay at Store
</div>
      <div><input type="radio" >Credit Card  </div></div>  
  
<div class="row col-8"><h3>Order Summary: </h3>
        <p>Your Order</p>  
        <div class="card p-3" v-for="(data,index) in cartitemarr" :key="index">
            <div class="d-flex flex-row-reverse justify-content-between">              
              <p>Rs. {{ data.mrp }}</p>
            </div>
            <div class="col-md-12 d-flex">
              <div class="col-md-2 ml-0 pl-0">
                <img
                  :src="data.img_url"
                  alt=""
                  width="auto"
                  height="100px"
                />
              </div>
              <div class="col-md-6 text-left">
                <p>{{ data.name }}</p>                
                <p>Colour: , Size:</p>
              </div>            
            </div>
          </div>
        
        
        </div>
        <div class="row col-8">
              <p>  Subtotal: Rs. {{this.mrptotal}}</p>
              <p>  You saved: Rs. {{this.discount}}</p>  
              <p>  Shipping: --</p>  
              <h3>  Total: Rs. {{this.totalamt}}</h3>  
        </div>
        <div class="row col-8">
             <button @click="placeOrder()">Place Order</button>   
        </div>


</div>
</template>

<script>
import axios from 'axios'

export default{
created(){
    console.log('payment created meth')
    const payloads = {
                    operation: "Refresh cart",
                    cartId: parseInt(localStorage.getItem('cartId'))
                    }
                    
    axios.post('/cart-service/ws/cart/refreshCart',payloads).then((response)=>{ 
        if(response.data.status === "success"){
        
        this.cartitemarr=response.data.itemResult      
        
        console.log('cart arr',this.cartitemarr)

        this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
      }    
                
    else if(response.data.status === "failed"){
                        alert('Retrieval failed')
                        

    }
              })         
},
data(){
return{
  form:{
    name:'',
    phno:'',
    addrlin1:'',
    addrlin2:'',
    addrlin3:'',
    city:'',
    district:'',
    state:'',
    country:'',
    label:'',
    pincode:'',
    landmark:'',
    selected:'',
    ifdefault:''
    },
        cartitemarr:[],
        mrptotal:null,
      discount:null,
      totalamt:null,
      addrarr: [],
      seladdr:null,
      showaddr:false,
      clickededit: false,
      clickedadd: false,
      addressid: null
}

},
methods:{
  
  submitAddr(){
    
        const payload = {
          addressLine1: this.form.addrlin1,
        addressLine2: this.form.addrlin2,
        addressLine3: this.form.addrlin3,
        city: this.form.city,
        contactPerson: this.form.name,
        contactPhoneNumber: this.form.phno,
        country: this.form.country,
        defaultDeliveryAddress: this.form.ifdefault,
        district: this.form.district,
        label: this.form.label,
        landmark: this.form.landmark,
        pinCode: this.form.pincode,
        state: this.form.state,
        tag: this.form.selected
        }
        axios.post('customer-service/cws/address',payload).then((response)=>{
          console.log('add addr succ', response.data)
          this.addrarr = response.data.addresses
        })
    this.clickedadd = false
  },
  onSubmitAddr(chec){
    console.log('address id',this.addressid, chec)
    
      const payload = {
        addressId: this.addressid,
        addressLine1: this.form.addrlin1,
        addressLine2: this.form.addrlin2,
        addressLine3: this.form.addrlin3,
        city: this.form.city,
        contactPerson: this.form.name,
        contactPhoneNumber: this.form.phno,
        country: this.form.country,
        defaultDeliveryAddress: this.form.ifdefault,
        district: this.form.district,
        label: this.form.label,
        landmark: this.form.landmark,
        pinCode: this.form.pincode,
        state: this.form.state,
        tag: this.form.selected
      }
      axios.patch('customer-service/cws/address/'+this.addressid,payload).then((response)=>{
            console.log('edit succ', response.data)
            if(response.data.status == "success")
            {
              axios.get('customer-service/cws/address/').then((response) =>{
              console.log('addresses', response.data.addresses)
                this.addrarr = response.data.addresses})
            }
            else
            alert('Address retrieval error')

      })
   this.clickededit = false
      }
    
  ,
  onResetAddr(){
    this.form.name='',
    this.form.phno='',
    this.form.addrlin1='',
    this.form.addrlin2='',
    this.form.addrlin3='',
    this.form.city='',
    this.form.state='',
    this.form.district='',
    this.form.country='',
    this.form.pincode='',
    this.form.label='',
    this.form.landmark='',
    this.form.selected='',
    this.form.ifdefault=''
    
  },
  storePickup(){
    this.addrarr = []
    this.seladdr = null
    this.showaddr = false
  },
  selAddress(addr){
    this.seladdr = addr
  },
  editAddAddress(addr){
    if(addr != ''){
      console.log('edit addr',addr)
      this.clickededit=true
      this.form.name=addr.contactPerson,
    this.form.phno=addr.contactPhoneNumber,
    this.form.addrlin1=addr.addressLine1,
    this.form.addrlin2=addr.addressLine2,
    this.form.addrlin3=addr.addressLine3,
    this.form.city=addr.city,
    this.form.state=addr.state,
    this.form.district=addr.district,
    this.form.country=addr.country,
    this.form.pincode=addr.pinCode,
    this.form.label=addr.label,
    this.form.landmark=addr.landmark,
    this.form.selected=addr.tag,
    this.form.ifdefault=addr.defaultDeliveryAddress
    this.addressid = addr.addressId
    }
    else {
      console.log('add addr',addr)
      this.clickedadd=true
      this.form.name='',
    this.form.phno='',
    this.form.addrlin1='',
    this.form.addrlin2='',
    this.form.addrlin3='',
    this.form.city='',
    this.form.state='',
    this.form.district='',
    this.form.country='',
    this.form.pincode='',
    this.form.label='',
    this.form.landmark='',
    this.form.selected='',
    this.form.ifdefault=''
    this.addressid = ''
    }
  },
  removeAddress(addr){
        axios.delete('customer-service/cws/address/'+addr).then((response)=>
        {
            
            if(response.data.status == "success"){
                axios.get('customer-service/cws/address/').then((response) =>{
                console.log('new list of addresses', response.data.addresses)
                this.addrarr = response.data.addresses

            })
            }
        })
    },

  loadAddress(){
    axios.get('customer-service/cws/address/').then((response) =>{
    console.log('addresses', response.data.addresses)
    this.addrarr = response.data.addresses})
    this.showaddr = true
  },
    placeOrder(){
       const payloads = {
                    operation: "Refresh cart",
                    cartId: parseInt(localStorage.getItem('cartId'))
                    }
       axios.post('/cart-service/ws/cart/refreshCart',payloads).then((response)=>{ 
        if(response.data.status === "success"){
          
          for(let i=0;i<response.data.itemResult.length;i++){
              let temppayload = response.data.itemResult[i]
              temppayload.scanType = "Scan"
              temppayload.scanSequence = 1
              temppayload.price = temppayload.netPrice
              temppayload.vatBit = 0
              temppayload.unit = temppayload.quantityUnit
              temppayload.productGroupNumber = temppayload.productGrpNmbr
              console.log('temp payload',temppayload)
          }
         
         let placearr = response.data.itemResult
         console.log('place order modified arr',placearr)
         if(this.seladdr == null){
            alert('Please select an address')
            }
        else{
         const payload = {
            task: "PLACE_ORDER",
            startTime: response.data.startTime,
            cartItems: placearr,
            discounts: response.data.discounts,
            grossTotal: response.data.grossTotal,
            netTotal: response.data.netTotal,
            storeId: response.data.storeId,
            storeCode: response.data.storeCode,
            cartId: response.data.cartId,
            totalProductsCount: 1,
            deliveryAddress: this.seladdr
         }
            
        axios.post('/order-service/ws/order/place',payload).then((respons)=>{
          console.log('afa sel-ing address',respons.data)
        alert(respons.data.statusMessage + ' Order ID ' + respons.data.orderId)
        }
        )
      }
}
else
alert('cart error')

})}
}
}
</script>


