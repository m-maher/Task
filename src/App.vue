<template>
  <div id="app">
    <div class="row" style="width: 100%">
      <div class="col-2">
        <SideNav />
      </div>
      <div class="col-10">
        <Exchange />
      </div>
    </div>
  </div>
</template>

<script>

import Exchange from './components/Exchange.vue'
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {
    SideNav,
    Exchange
  }
}
</script>


