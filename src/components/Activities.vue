<template>
   <div class="main">
      <h1>Activity</h1>
      <div class="error">{{errorMessage}}</div>
      <div class="navigation">
         <button @click="goAccount">Account</button>
         <button @click="goTags">Tags</button>
      </div>
      <img src="../assets/histogram.png" class="histogram">
      <div class="activities">
         <table>
            <tr v-for="item in activitiesData" class="payment" :key="item.id">
               <td class="drinkIcons">
                  <img :src="getPicture(item.type)" class="drinkimage">
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

export default {
  name: "Activities",
  props: {
    msg: String
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
    getPicture: function (drinkType) {
        return '../assets/' + drinkType + '.png'
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
    padding-left: 30%;
    min-width: 55%;
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
    max-width: 35%;
}
</style>
