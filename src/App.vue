<template>
  <div id="app">
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-body': Body
  }
}
</script>

<style>
</style>