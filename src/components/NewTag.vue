<template>
  <div class="newtag">
    <h1>New Tag</h1>

    <div class="email">
        <label for="email">Tag Name: </label>
        <input v-model="tagName" id="tagName" type="text" placeholder="TaggyTag"/> 
    </div>
    <div class="tagnumber">
        <label for="tagNumber">Tag Number:</label>
        <input v-model="tagNumber" id="tagNumber" type="text"/> 
    </div>


    <div>
        <button @click="saveTag">Save</button>
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
  name: "NewTag",
  props: {
    msg: String
  },
  data: function () {
      return {
          errorMessage: null,
          tagName: null,
          tagNumber: null
      }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  computed: {
      accountId: function () {
          return this.$session.get('accountId');
      }
  },
  methods: {
    saveTag: function () {
        if (!this.tagName) {
            this.errorMessage = 'Please add a Tag name!';
            return;
        }
        if (!this.tagNumber) {
            this.errorMessage = 'Please add a Tag number';
            return;
        }
        backendAPI.newTag(this.accountId, this.tagName, this.tagNumber).then(() => {
            this.$router.push('/Tags');
        }).catch((error) => {
            this.errorMessage = error || 'An unforseen error happened please try again';
            this.password = null;
        });
    },
    goBack: function () {
        this.$router.push('/Activities');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
    color:red;
}
</style>
