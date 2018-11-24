<template>
   <div class="main">
    <Slide>
      <a id="tags" @click="goTags"> 
        <span>Tags</span>  
      </a>
      <a id="account" @click="goAccount"> 
        <span>Account</span>  
      </a>
    </Slide>

      <h1>Activity</h1>
      <div class="error">{{errorMessage}}</div>

      <img src="../assets/histogram.png" class="histogram">
      <div class="activities">
         <table>
            <tr v-for="item in activitiesData" class="payment" :key="item.id">
               <td class="drinkIcons">
                  <img src="../assets/coffee_01.png" v-if="isCoffee(item.type)" class="drinkimage">
                  <img src="../assets/beer_01.png" v-else class="drinkimage">

               </td>
               <td class="drinkData">
                  <div>
                     {{ formatDate(item.date)}} 
                  </div>
                  <div>
                     {{ item.product_name }}
                  </div>
                  <div class="price">
                     1 x {{ item.price / 100 }}€
                  </div>
               </td>
            </tr>
         </table>
      </div>
   </div>
</template>

<script>
import backendAPI from '../api/payment';
import { Slide } from 'vue-burger-menu'

export default {
  name: "Activities",
  props: {
    msg: String
  },
  components: {
      Slide
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
        this.$router.push('/')
    }
  },
  data: function () {
      return {
          errorMessage: null,
          activitiesData: null
      }
  },
  mounted: function () {
    this.getActivities();
    this.interActivities =  setInterval(() => {
        this.getActivities();
    }, 2000);
  },
  destroyed: function () {
      clearInterval(this.interActivities);
  },
  computed: {
      accountId: function () {
          return this.$session.get('accountId');
      }
  },
  methods: {
    goAccount: function () {
        this.$router.push('/Account');
    },
    goTags: function () {
        this.$router.push('/Tags')
    },
    getActivities: function () {
        backendAPI.activities(this.accountId).then((data) => {
            this.activitiesData = data.payments;
        }).catch((error) => {
            this.errorMessage = error || 'An unforseen error happened please try again';
        });
      },
    formatDate: function (dateString) {
        let date = new Date(dateString);
        return date.getDate() + '.' + ( date.getMonth() + 1 )  + '.' + date.getFullYear();
    },
    isCoffee: function (drinkType) {
        if(drinkType.search('coffe') >= 0) {
            return true;
        } else return false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color:white;
}

.payment {
    text-align: left;
    font-weight: bold;
}
.drinkIcons {
    padding-left: 25%;
    min-width: 50%;
}

.activities {
    position: absolute;
    bottom: 15px;
    width: 100%;
}

.histogram {
    margin-top: 15%;
    max-width: 90%;
}

.drinkimage {
    max-width: 30%;
}

.button-tags {
  position: absolute;
  top: 5px;
  left: 0px;
  padding: 20px 20px;
  border-radius: 20px;

  background-image: url("../assets/tags.png");
  background-size: cover;
}

.buttonaccount {
  position: absolute;
  left:0px;
  top:10%;
  padding: 20px 20px;
  border-radius: 20px;
   background-image: url("../assets/profile.png");
   background-size: cover;
}
</style>
