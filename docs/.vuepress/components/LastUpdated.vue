<template>
</template>

<script>
export default {
  props: ['slot-key'],
  mounted() {
    this.$page.lastUpdated = "2022/05/27 15:30:00"
  }
}
</script>
