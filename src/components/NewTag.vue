<template>
  <div class="newtag">
    <h1>New Tag</h1>

    <div class="email">
        <input v-model="tagName" id="tagName" type="text" placeholder="Tag Name"/> 
    </div>
    <div class="tagnumber">
        <input v-model="tagNumber" id="tagNumber" type="text" placeholder="Tag Number"/> 
    </div>


    <div>
        <button @click="saveTag" class="save">Save</button>
    </div>


    <div class="error">{{errorMessage}}</div>

    <div class="navigation">
        <button @click="goBack" class="button-menu"></button>
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
.navigation {
    position: absolute;
    top: 0px;
    left: 50px;
}
input {
    margin: 0 auto;
    border: none; /* <-- This thing here */
    border:solid 1px #ccc;
    border-radius: 20px;
    padding: 2vh 8vh;
    margin-top: 10px;
    overflow: hidden;
}

label {
    display: block;
}

.save {
  margin: 10px;
  margin-top: 50vh;
  padding: 10px 40px;
  border-radius: 15px;
}
</style>
