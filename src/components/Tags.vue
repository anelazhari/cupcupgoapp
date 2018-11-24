<template>
  <div class="tags">
    <h1>Tags</h1>

    <div class="tags-list">
        <table>
            <tr v-for="item in tagsList" :key="item.id">
                <td>
                    {{ item.name }}
                </td>
                <td>
                    <button>Delete</button>
                </td>

            </tr>
        </table>
    </div>

    <div class="error">{{errorMessage}}</div>

    <div class="navigation">
        <button @click="goBack">Back</button>

    </div>

    

  </div>
</template>

<script>
import backendAPI from '../api/payment';

export default {
  name: "Tags",
  props: {
    msg: String
  },
  data: function () {
      return {
          errorMessage: null,
          tagsList: null
      }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  mounted: function () {
    this.getTags();
  },
  computed: {
      accountId: function () {
          return this.$session.get('accountId');
      }
  },
  methods: {
    getTags: function () {
        backendAPI.tags(this.accountId).then((data) => {
            this.tagsList = data.tags
        }).catch((error) => {
            this.errorMessage = error || 'An unforseen error happened please try again';
            this.password = null;
        });
    },
    goBack: function () {
        this.$router.push('/Activities')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
