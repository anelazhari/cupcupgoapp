<template>
  <div class="tags">
    <h1>Tags</h1>

    <div class="tags-list">
        <table>
            <tr v-for="item in tagsList" :key="item.id">
                <td class="name">
                    {{ item.name }}
                </td>
                <td class="delete">
                    <button @click="deleteTag(item.tag_number)">x</button>
                </td>
            </tr>
        </table>
    </div>
    <div>
        <button @click="addTag" class="add-tag-button">Add Tag</button>
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
        this.$router.push('/Activities');
    },
    addTag: function () {
        this.$router.push('/Tag/New');
    },
    deleteTag: function (tagNumber){
        backendAPI.deleteTag(this.accountId, tagNumber).then(() => {
           this.getTags();
        }).catch((error) => {
            this.errorMessage = error || 'An unforseen error happened please try again';
            this.password = null;
        });        
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-tag-button {
  margin: 10px;
  padding: 10px 40px;
  border-radius: 15px;    
}

.navigation {
    position: absolute;
    top: 0px;
    left: 50px;
}

.tags-list {
    min-height: 70vh;
    max-height: 70vh;
    overflow: scroll;
}

table {
    width: 100%;
    padding: 10px;
}

.name {
    min-width: 50%;
}
.delete {
    min-width: 50%;
}
.delete button{
    border-radius: 15px;  

}
</style>
