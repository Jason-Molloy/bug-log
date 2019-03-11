<template>
  <div class="addBug container-fluid">
    <div class="row">
      <div class="col-10 offset-1">
        <form @submit.prevent="PostBug">
          <input required type="text" v-model="newBug.title" placeholder="Bug name">
          <input required type="text" v-model="newBug.creator" placeholder="Logged by">
          <textarea required v-model="newBug.description" placeholder="Bug description" cols="100" rows="4"></textarea>
          <button type="submit" class="btn btn-danger">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addBug",
    props: [],
    data() {
      return {
        newBug: {
          title: '',
          creator: '',
          description: ''
        }
      }
    },
    computed: {},
    methods: {
      postBug() {
        this.$store.dispatch('postBug', this.newBug)
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  form {
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 5px black;
  }
</style>