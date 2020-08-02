<template>
  <div>
    <form @submit.prevent="addThread">
      <table>
        <th>
          スレッドタイトル
        </th>
        <td>
          <input type="text" v-model="title" />
        </td>
      </table>
      <button>追加</button>
    </form>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: "",
      books: {}
    };
  },
  created: function() {
    
  },
  methods: {
    addThread() {
      axios
        .get("/api/hoge/")
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          this.message = error;
        });
    }
  }
};
</script>