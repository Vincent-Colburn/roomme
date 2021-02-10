<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img-top" src="" alt="">
      <div class="card-body">
        <h4 class="card-title">
          Name: {{ matchProps.fromUserId.name }}
        </h4>
        <p class="card-text">
          Text
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchDetailsComponent',
  props: {
    matchProps: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
