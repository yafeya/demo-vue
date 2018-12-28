<template>
  <div>
    <div class="content-title">{{title}}</div>
    <ul>
      <li
        class="content-item-title"
        v-for="customer of customers"
        v-on:click="onselectCustomer(customer)"
        :key="customer.name"
      >{{customer.name}}</li>
    </ul>
    <div id="customer-detail-container" v-if="isCustomerSelected()">
      <customer-detail v-bind:meta="selectedCustomer"/>
    </div>
  </div>
</template>

<script>
import Customer from './customer-detail.js'
import CustomerDetail from './CustomerDetail'

export default {
  name: 'Customer',
  components: { 'customer-detail': CustomerDetail },
  data () {
    return {
      title: 'This is a Customer demo.',
      selectedCustomer: new Customer(''),
      customers: [
        new Customer('customer1'),
        new Customer('customer2'),
        new Customer('customer3')
      ]
    }
  },
  methods: {
    isCustomerSelected: function () {
      return this.selectedCustomer.name !== undefined && this.selectedCustomer.name !== ''
    },

    onselectCustomer: function (customer) {
      this.selectedCustomer = customer
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
