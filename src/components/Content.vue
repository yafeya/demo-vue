<template>
  <div>
    <div class="content-title">{{title}}</div>
    <div class="content-item-title" v-for="content of contents" :key="content.title">{{content.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      title: 'This is a content demo.',
      contents: [
        { title: 'content1' },
        { title: 'content2' },
        { title: 'content3' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-title {
  color: cadetblue;
}

.content-item-title {
  background-color: beige;
}
</style>
