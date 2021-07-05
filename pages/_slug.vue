<template>
  <div class="container">
    <h1>This is the _slug.</h1>
    <!-- {{ doc }}
    <nuxt-content :document="doc"></nuxt-content> -->
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}){
    const doc = await $content(params.slug || 'index').fetch();
    return { doc }
  }
}
</script>

<style>
</style>
 