<template>
  <div class="details">
    <div class="row">
      <div class="col-10 offset-1">
        <h3>Created by: Issue: Date:</h3>
      </div>
      <div class="row">
        <div class="col-8 offset-1">
          <p>Bug Description:</p>
        </div>
        <div class="col-2">
          <button>Close</button>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <h3>User</h3>
        </div>
        <div class="col-5">
          <h3>Message</h3>
        </div>
        <div class="col-2">
          <button>Add Note</button>
        </div>
      </div>
      <div class="row">
        <noteCard />
      </div>

    </div>
  </div>
</template>
<script>
  import noteCard from '@/components/noteCard.vue'
  export default {
    name: 'details',
    components: {
      noteCard
    },
    computed: {},
    methods: {},
  }
</script>
<style>

</style>