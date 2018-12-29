<template>
  <div v-init="meta">
    <div class="content-title">
      <h4>Detail for Current Customer</h4>
    </div>
    <div class="content-item-title" v-on:click="onclickDetail(meta)">{{meta.name}}</div>
  </div>
</template>

<script>
import Customer from './customer-detail.js'

export default {
  name: 'CustomerDetail',
  props: {
    meta: Customer
  },
  mounted: function () {
    alert('mounted detail')
  },
  updated: function () {
    alert('updated detail')
  },
  methods: {
    onclickDetail: function (detail) {
      this.$emit('click-detail', detail)
    }
  },
  directives: {
    init: {
      componentUpdated: function (el, binding, vnode) {
        if (
          binding !== undefined &&
          binding.value !== undefined &&
          binding.value instanceof Customer
        ) {
          var customer = binding.value
          alert(`customer-directive prompting out ${customer.name}`)
        }
      }
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
