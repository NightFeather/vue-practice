<template>
  <article  id="app">
    <header>
      <h2>{{ title }} &lt; {{currentBoard}}</h2>
    </header>
    <section>
      <div>
        <input type="text" v-model="input" v-on:keypress.enter="addCard"/>
        <button v-on:click="addCard">Add Card</button>
      </div>
    </section>
    <section>
      <card-list v-bind:cards="cards" v-bind:currentBoard="currentBoard"></card-list>
    </section>
    <hr />
  </article>
</template>

<script>
import CardList from './components/CardList'
import DefaultList from '../data/list-default.json'

export default {
  name: 'app',
  components: {
    CardList
  },
  data: function () {
    return {
      title: ' \' -\')',
      currentBoard: 'testboard',
      input: '',
      cards: DefaultList
    }
  },
  methods: {
    addCard: function () {
      if (this.input === '') { return }
      this.cards.push({ text: this.input })
      this.input = ''
    }
  }
}
</script>

<style lang="scss">
ul { padding: 0;  }
li { list-style: none; }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  width: 80%;
  margin: 60 auto 0 auto;
  padding: 10px;
}

</style>
