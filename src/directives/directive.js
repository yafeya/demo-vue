import Vue from 'vue'

export default Vue.directive('hello', {
  inserted: function (el, binding, vnode) {
    alert(`Hello: ${binding.value}`)
  }
})
