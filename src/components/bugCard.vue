<template>
  <div class="bugCard">
    <div v-for="bug in bugs" class="bugCard card col-10 offset-1">
      <div class="card-body">
        <p>{{bugs.title}} : {{bugs.creator}} : {{bugs.timestamps}}<router-link :to"{name: 'bug-details' , params:
            {bugId: bugData.id}}">details</router-link>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'bugCard',
    props: ["bugData"],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>