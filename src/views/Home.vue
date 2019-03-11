<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>BugCheck: <img alt="Vue logo" src="../assets/logo.png">erification Log</h1>
      </div>
    </div>
    <div class="row">
      <bugCard />
    </div>
    <div class="row">
      <addBug />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import bugCard from '@/components/bugCard.vue'
  import addBug from '@/components/AddBug.vue'

  export default {
    name: 'home',
    mounted() {
      if (this.bugs.length > 0) this.$store.dispatch('getBugs')
    },
    components: {
      bugCard,
      addBug
    },
    data() {
      return {}
    },
    computed: {
      bugs() {
        return this.$store.state.bugs.reverse()
      }
    },
    methods: {},
  }
</script>

<style scoped>
  img {
    height: 1em;
  }
</style>