<template>
  <div class="card-stats">
    <div class="one-third" v-for="(elem, ind) in statistics" :key="ind">
      <div class="stat-value">{{ elem.value }}</div>
      <div class="stat">{{ elem.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statistics: {
      type: Array,
      required: false,
      default: () => []
    }
  }

}
</script>

<style>

</style>
