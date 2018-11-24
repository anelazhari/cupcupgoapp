<template>
  <div class="activities">
    <h1>Recent Activities</h1>
    <div class="activities">
        <table>
            <tr v-for="item in activitiesData" :key="item.id">
                <td>
                    {{ item.product_id }}
                </td>
                <td>
                    {{ item.price }}
                </td>
                <td>
                    ${{ item.date}}
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
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
