<template>
  <div class="activities">
    <h1>Recent Activities</h1>

    <div class="activities">
        <table>
            <tr v-for="item in activitiesData" :key="item.id">
                <td>
                    {{ item.productId }}
                </td>
                <td>
                    {{ item.merchantId }}
                </td>
                <td>
                    ${{ item.amount}}
                </td>
                <td>
                    
                </td>

            </tr>
        </table>
    </div>

    <div class="error">{{errorMessage}}</div>

    <div class="navigation">
        <button @click="goAccount">Account</button>
        <button @click="goTags">Tags</button>
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
          errorMessage: null
      }
  },
  computed: {
      activitiesData: function () {
          return this.getActivities();
      },
      accountId: function () {
          return this.$session.get('accountId');
      }
  },
  methods: {
    getActivities: function() {
      return [
          {
            id: 0,
            amount: 4.9,
            merchantId: 12,
            productId: 1,
            timestamp: 23434              
          },
                    {
            id: 1,
            amount: 12.5,
            merchantId: 12,
            productId: 1,
            timestamp: 23434              
          }
        ];
    },
    getActivitiesReal: function () {
        backendAPI.activities(this.accountId).then((data) => {

        }).catch((error) => {
            this.errorMessage = error || 'An unforseen error happened please try again';
            this.password = null;
        });
    },
    goAccount: function () {
        this.$router.push('/Account');
    },
    goTags: function () {
        this.$router.push('/Tags')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
