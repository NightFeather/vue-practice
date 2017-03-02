<template>
  <li class="card">
    <card-vote v-bind:card="card"></card-vote>
    <card-thumb v-bind:card="card"></card-thumb>
    <card-detail v-bind:card="card"></card-detail>
  </li>
</template>

<script>
  import Vote from './Card/Vote'
  import Detail from './Card/Detail'
  import Thumbnail from './Card/Thumbnail'

  export default {
    name: 'card',
    props: ['currentBoard', 'card', 'index'],
    components: {
      'card-vote': Vote,
      'card-detail': Detail,
      'card-thumb': Thumbnail
    }
  }
</script>

<style lang="scss">
.card {
  display: block;
  width: 100%;
  height: 5em;
  box-shadow: 2px 2px 5px black;
  padding: 2px;
  margin-bottom: 1em;

  font-size: 15px;
  line-height: 25px;

  &:last-child { margin-bottom: inherit; }

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;       
  }
  
  &:hover { box-shadow: 3px 3px 10px black; }
  
  & > * {

    display: inline-block;
    vertical-align: middle;

    &:first-child {
      display: inline-block;
      margin-left: 1em;
    }
  }

  a { text-decoration: none; }
}
</style>