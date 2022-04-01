<template>
  <div class="col-md-10 pt-2 m-auto">
    <!-- Trigger/Open The Modal -->

    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content m-auto">
        <p style="text-align: right; cursor: pointer">
          <span @click="closeModal()">&times;</span>
        </p>
        <input
          type="text "
          class="form-control"
          placeholder="Enter barcode number"
          v-model="skuno"
        />
        <div class="col-md-12 text-center" style="text-align: center">
          <button type="" class="btn btn-primary my-3" @click="addViaSKU()">Submit</button>
        </div>
      </div>
    </div>

    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >
      <div>
        <p @click="cartFunc('refresh')" style="cursor: pointer">Refresh cart</p>

        <p @click="cartFunc('clear')" style="cursor: pointer">Clear cart</p>
        <p @click="cartFunc('cancel')" style="cursor: pointer">Cancel cart</p>
        <p id="myBtn" style="cursor: pointer" @click="openModal()">
          Add to cart manually
        </p>
      </div>
    </div>
    <div class="col-md-12 my-3 d-flex justify-content-between">
      <div>
        <h5 style="font-weight: 700" class="text-left">My Cart</h5>
      </div>
      <div>
        <span style="font-size: 30px; cursor: pointer" @click="openNav()"
          >&#9776;</span
        >
      </div>
    </div>
    <div class="col-md-12 row" v-show="this.iscartempty != true">
      <div class="col-md-7 ml-0 pl-0">
        <div class="col-md-12" v-show="this.iscartempty != true">
          <div
            class="card mb-3 p-3"
            v-for="(data, index) in cartitemarr"
            :key="index"
          >
            <div class="col-md-12 d-flex">
              <div class="col-md-2 ml-0 pl-0">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEW7u7vz8/O4uLjb29vk5OTs7Ozh4eHZ2dny8vLu7u7q6ur29va9vb22trbn5+fGxsbQ0NDJycnU1NSwsLCMcr6HAAAESklEQVR4nO2bgXKiMBCGSTSaJQkIff93vf2X1lqF3tydTlfv/6YdFZTJ191sFopdRwghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQvyM+jp9WW6jz7lHM9aflDCnhURT5aTklzo8TVMX55xM1HmCYH2CHY5aDA8OdDWfY35vBjrvzYjg+oI6Ofgxz2cf7F70a9yU7MQzh8BDDg5sYwvDPPxdrrfG7v8yTG8ap11op83dv8W34m6xd1hgs6dtvdG7Yaf5tDw6CeVnztrsW54bxWOTUtoY3fvZBZdPBuSEcSj+uj09DeG6CSt48smvDOLw3XXVthFEuerMybh3Zs2Gc3tOwhHnlJC9edp9l2jqya0P5zEKZ2s1nLhv1p4yhlplLhUGn45dFwcZ+DuLmkR0b1usTod3VdHz2WvqxnF+EMZ/W35Gx5Nf1BsGx4bhy1l/S5coRzz1Nql3r0KCuHNmtYexvBfPHyrEEq6IvDaWgL22jnlxO8TaMbg3jaePCTQnHi0ZOo2bnFnqKoY5v403B9WvYbV+zuZ6O6tjFsY2tra0YHg0xnd6v22w5putgwTDW40rv49FQMy7W31xcvGnk6tjqUNL1guLSENOq7c9N9We25i89TJltOmqCWumJ43gIfQphvlg0KvLXnaFVfKwU+YvWWS/rM3tR8mT/k6it4iHWJPiz5DSd/1OBR2+GKI0txr5IQkCk71NS14yXomJiW2wfUnVEFW3VrtUcRFRP9+YDAttZaLHdlaEOuKnhSdVS35ckKQ1QhJSIxkg3ABEoZpFZ/RroTrJPQcxe0rE2ZK9ur82ZIcYVuz7LIBozjFYHHSyCiKa+EmzRF5qQsE5z94Z+LeY0SIA7yP3JlsrRnWF909xqOx3jgBxNJgpTPdlVLY2l/sJQfyyHs55z6EdinItGO/S9FLXX55KmN9RkZ1naVYuHpIyUUyd90NwMOuCsrxDQfnkUMxx6i+RBUzUFMxxgl4ruCXK0mmq9qxtDJGlrey0WGCImYxo0EwNmIYrNF0PdMCQtPth3PEp4jyG89bkail3EijvNXi//e0Klad2kQ7NhauuSMANNBnmbUEk/DBf0U2kJ7rVhQSYPunLMwz77Mexa7VDvMeFQLNMiYxVEpxbmYD5XGxW0RdKe5tDDUn+1KKklNuiOozvD2k4i5ras8CiMSEX1yrbeYeIJ1sWCRF2aAJuU2Few3x7xXltNYrfTxdOR4XLp4va8Il9v/Wzhcrht8M693S66qzQ3ly7+CTMMrgzXLl28lGHc0ZCGNKQhDWlIQxrS8CkM73mPaXZoeCr35eTNsHbT8Z5Mru5NxP2leHbPo+LX0/2lr36PMErfK9/n/fr36r/89y1e/zsz/8P3nl7/u2uEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCyBPyC1stQARopdgqAAAAAElFTkSuQmCC"
                  width="auto"
                  height="100px"
                  alt=""
                />
                <!-- <img
                  :src="data.img_url"
                  alt=""
                  width="auto"
                  height="100px"
                /> -->
              </div>
              <div
                class="col-md-7 pl-2"
                style="text-align: left; padding-left: 10px"
              >
                <p class="mb-1" style="font-weight: 700">{{ data.name }}</p>
                <p class="mb-4" style="color: grey; font-size: 13px">
                  {{ data.sku }}
                </p>
                <p class="mb-0" style="font-weight: 700; color: #021e45">
                  ₹ {{ data.mrp }}
                </p>
              </div>
              <div class="col-md-3 pr-0 mr-0 text-right align-text-bottom">
                <div style="text-align: right">
                  <i
                    class="fa fa-trash-o"
                    style="font-size: 20px"
                    @click="removeItem(data.sku)"
                  ></i>
                </div>
                <div class="wrapper mt-4 pt-3" style="text-align: right">
                  <button
                    style="height: 30px; width: 30px"
                    class="btn border m-0 p-0"
                    @click="changeCounter('-1',data.sku,data.quantity)"
                    type="button"
                    name="button"
                  >
                    -
                  </button>
                  <input
                    style="height: 30px; width: 30px; border: none"
                    class="px-2 quantity"
                    type="text"
                    name="name"
                    :value="data.quantity"
                  />
                  <button
                    class="btn border m-0 p-0"
                    style="height: 30px; width: 30px"
                    @click="changeCounter('1',data.sku,data.quantity)"
                    type="button"
                    name="button"
                  >
                    <p>+</p>
                  </button>
                </div>
                <!-- <div class="mt-1">
                   <button
                    style="height: 40px;border-radius: 5%"
                    class="btn btn-primary"
                    @click="removeItem(data.sku)"
                    type="button"
                    name="button"
                  >remove
                  </button>                  
                </div>                 -->
              </div>
            </div>
          </div>
        </div>

        <!--
        <div class="col-md-12 mt-2">
          <div class="card p-3">
            <div class="d-flex justify-content-between">
              <p>Fashion Basket (1 items)</p>
              <p>₹399.00</p>
            </div>
            <div class="col-md-12 d-flex">
              <div class="col-md-2 ml-0 pl-0">
                <img
                  src="https://www.jiomart.com/images/product/150x188/440762638_red/polo-t-shirt-with-signature-branding-model-440762638_red-0-202104090103.jpg"
                  alt=""
                  width="auto"
                  height="100px"
                />
              </div>
              <div class="col-md-6 text-left">
                <p>Polo T-shirt with Signature Branding</p>
                <p>₹399.00 ₹499.00 You Save ₹100.00</p>
                <p>Size: S / Colour: Red</p>
              </div>
              <div
                class="col-md-4 mt-4 pt-5 pr-0 mr-0 text-right align-text-bottom"
              >
                <div class="wrapper">
                  <button
                    style="height: 40px; width: 40px; border-radius: 50%"
                    class="btn btn-primary"
                    @click="changeCounter('-1')"
                    type="button"
                    name="button"
                  >
                    -
                  </button>
                  <input
                    style="height: 40px; border: none"
                    class="quantity"
                    type="text"
                    name="name"
                    :value="counter"
                  />
                  <button
                    class="btn btn-primary"
                    style="height: 40px; width: 40px; border-radius: 50%"
                    @click="changeCounter('1')"
                    type="button"
                    name="button"
                  >
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div>

      <div class="col-md-5">
        <div class="card px-3 pt-3">
          <!-- <div class="d-flex justify-content-between">
            <p>MRP Total</p>
            <p>{{ this.mrptotal }}</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Product Discount</p>
            <p>- {{ this.discount }}</p>
          </div> -->
          <div class="d-flex justify-content-between">
            <div>
              <p class="mb-1" style="font-weight: 700">Subtotal</p>
              <p style="font-weight: 700">₹ {{ this.totalamt }}</p>
            </div>
            <div class="mt-3">
              <button
                class="btn btn-primary"
                @click="$router.push('/checkout')"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 row" v-show="this.iscartempty">
      <h2>Cart is empty</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    if(localStorage.getItem("cartId") == null){
      this.iscartempty = true
      this.cartitemarr = []
      
    }
    else{
    const payloads = {
      operation: "Refresh cart",
      cartId: parseInt(localStorage.getItem("cartId")),
    };

    axios
      .post("/cart-service/ws/cart/refreshCart", payloads)
      .then((response) => {
        if (response.data.status === "success") {
          this.cartitemarr = response.data.itemResult;

          console.log("cart arr", this.cartitemarr);

          this.cartId = response.data.cartId;
          localStorage.setItem("cartId", this.cartId);
          this.mrptotal = response.data.grossTotal;
          this.totalamt = response.data.netTotal;
          this.discount = response.data.discounts[0].discountAmount;
        } else if (response.data.status === "failed") {
          alert("Retrieval failed");
        }
      })

      .catch(function (e) {
        console.log("temporary error", e.response);
      });
    }
  },
  data() {
    return {
      iscartempty: false,
      cartId: null,
      mrptotal: null,
      discount: null,
      totalamt: null,
      counter: 1,
      cartitemarr: [],
      temparr: [],
      skuno:''
    };
  },
  methods: {
openModal() {
      var modal = window.document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeModal() {
      var modal = window.document.getElementById("myModal");
      modal.style.display = "none";
    },
    openNav() {
      window.document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      window.document.getElementById("mySidenav").style.width = "0";
    },
    addViaSKU() {
      if (this.skuno != "") {
        if (this.cartitemarr.length == 0) {
          console.log('came to null arr')
          const payload = {
            operation: "AddItem",
            cartItems: [
              {
                storeId: parseInt(localStorage.getItem("storeId")),
                quantity: 1,
                sku: this.skuno,
                storeCode: JSON.parse(localStorage.getItem("expandFashion"))
                  .site_code,
                sequence: 0,
              },
            ],
          };
          axios
            .post("/cart-service/ws/cart/addItemtoCart", payload)
            .then((response) => {
              if (response.data.status === "success") {
                this.cartitemarr = response.data.itemResult;

                this.cartId = response.data.cartId;

                this.mrptotal = response.data.grossTotal;
                this.totalamt = response.data.netTotal;
                this.discount = response.data.discounts[0].discountAmount;
                console.log('after adding to ar',this.cartitemarr)
              } else if (response.data.status === "failed") {
                alert("Enter correct SKU number");
              }
            });
        } else {
          console.log('not null arr')
            for(let i=0; i<this.cartitemarr.length;i++){
              if(this.cartitemarr[i].sku == this.skuno){
                let quant = this.cartitemarr[i].quantity
                const payload = {
    operation: "UpdateItemQuantity",
    cartId: this.cartId,
    cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            newQuantity: quant+1,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sku: this.skuno
        }
    ]
}

      axios.post('/cart-service/ws/cart/updateItemQty',payload).then((response) =>{
        this.cartitemarr=response.data.itemResult      
        
        

        this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
      })


              }
              return
            }



          const payload = {
            operation: "AddItem",
            cartId: parseInt(localStorage.getItem("cartId")),
            cartItems: [
              {
                storeId: parseInt(localStorage.getItem("storeId")),
                quantity: 1,
                sku: this.skuno,
                storeCode: JSON.parse(localStorage.getItem("expandFashion"))
                  .site_code,
                sequence: 0,
              },
            ],
          };
          axios
            .post("/cart-service/ws/cart/addItemtoCart", payload)
            .then((response) => {
              if (response.data.status === "success") {
                this.cartitemarr = response.data.itemResult;

                this.cartId = response.data.cartId;

                this.mrptotal = response.data.grossTotal;
                this.totalamt = response.data.netTotal;
                this.discount = response.data.discounts[0].discountAmount;
              } else if (response.data.status === "failed") {
                alert("Enter correct SKU number");
              }
            });
        }
      } else {
        alert("Empty SKU input field");
      }
    },
    removeItem(sk) {
      const payload = {
        operation: "RemoveItem",
        cartId: this.cartId,
        cartItems: [
          {
            storeId: parseInt(localStorage.getItem("storeId")),
            storeCode: JSON.parse(localStorage.getItem("expandFashion"))
              .site_code,
            sku: sk,
          },
        ],
      };
      axios
        .post("/cart-service/ws/cart/removeItem", payload)
        .then((response) => {
          alert(response.data.statusMessage);
          if (
            response.data.status === "Success" ||
            response.data.status === "success"
          ) {
            console.log("succes remove");
            const payloads = {
              operation: "Refresh cart",
              cartId: this.cartId,
            };
            axios
              .post("/cart-service/ws/cart/refreshCart", payloads)
              .then((response) => {
                console.log("remove refresh", response.data.status);
                if (response.data.status !== "failed") {
                  this.cartitemarr = response.data.itemResult;
                  this.cartId = response.data.cartId;
                  localStorage.setItem("cartId", this.cartId);
                  this.mrptotal = response.data.grossTotal;
                  this.totalamt = response.data.netTotal;
                  this.discount = response.data.discounts[0].discountAmount;
                } else {
                  console.log("empty remove");
                  this.iscartempty = true;
                  localStorage.removeItem("cartId");
                }
              });
          }
        });
    },
    cartFunc(k) {
      switch (k) {
        case "clear": {
          const payload = {
            operation: "Clear cart",
            cartId: this.cartId,
          };
          axios
            .post("/cart-service/ws/cart/clearCart", payload)
            .then((response) => {
              alert(response.data.statusMessage);
              const payloads = {
                operation: "Refresh cart",
                cartId: this.cartId,
              };
              axios
                .post("/cart-service/ws/cart/refreshCart", payloads)
                .then((response) => {
                  if (response.data.status !== "failed") {
                    this.cartitemarr = response.data.itemResult;
                    this.cartId = response.data.cartId;
                    localStorage.setItem("cartId", this.cartId);
                    this.mrptotal = response.data.grossTotal;
                    this.totalamt = response.data.netTotal;
                    this.discount = response.data.discounts[0].discountAmount;
                  } else {
                    this.iscartempty = true;
                    localStorage.removeItem("cartId");
                  }
                });
            });
          break;
        }
        case "refresh": {
          const payloads = {
            operation: "Refresh cart",
            cartId: this.cartId,
          };
          axios
            .post("/cart-service/ws/cart/refreshCart", payloads)
            .then((response) => {
              alert(response.data.statusMessage);
              this.cartitemarr = response.data.itemResult;

              this.cartId = response.data.cartId;
              localStorage.setItem("cartId", this.cartId);
              this.mrptotal = response.data.grossTotal;
              this.totalamt = response.data.netTotal;
              this.discount = response.data.discounts[0].discountAmount;
            });
          break;
        }
        case "cancel": {
          const payloadss = {
            operation: "Cancel cart",
            cartId: this.cartId,
          };
          axios
            .post("/cart-service/ws/cart/cancelCart", payloadss)
            .then((response) => {
              alert(response.data.statusMessage);
            });
          break;
        }
      }
    },
    changeCounter(num,sku,quan) {
      if(quan == 1 && num == -1)
        alert('click \'Remove Item\' button to delete item')
        

      else{
      quan += +num;
      const payload = {
    operation: "UpdateItemQuantity",
    cartId: this.cartId,
    cartItems: [
        {
            storeId: parseInt(localStorage.getItem('storeId')),
            newQuantity: quan,
            storeCode: JSON.parse(localStorage.getItem('expandFashion')).site_code,
            sku: sku
        }
    ]
}

      axios.post('/cart-service/ws/cart/updateItemQty',payload).then((response) =>{
        this.cartitemarr=response.data.itemResult      
        
        

        this.cartId = response.data.cartId
        localStorage.setItem('cartId',this.cartId)
        this.mrptotal = response.data.grossTotal
        this.totalamt = response.data.netTotal
        this.discount = response.data.discounts[0].discountAmount
      })
      
      console.log(quan);
      // !isNaN(this.counter) && this.counter > 0
      //   ? this.counter
      //   : (this.counter = 0);
    
    }
  }
  },
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 30px;

  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #f3f3f3;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
