<template>
  <div class="noteCard">
    <div v-for="note in notes" class="card col-10 offset-1">
      <div class="card-body">
        <h3>{{bugs.user}} : {{bugs.timestamps}</h3>
      <p>{{bugs.description}}</p>
      </div>
    </div>
  </div>

</template>
<script>

</script>
<style>

</style>