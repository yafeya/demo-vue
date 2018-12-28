<template>
  <div>
    <div class="content-title">
        <h4>Detail for Current Customer</h4>
    </div>
    <div class="content-item-title">{{meta.name}}</div>
  </div>
</template>

<script>
import Customer from './customer-detail.js'

export default {
  name: 'CustomerDetail',
  props: {
    meta: Customer
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
