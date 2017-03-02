<template>
  <article  id="app-body">
    <header>
      <h2>{{ title }} &lt; {{currentBoard}}</h2>
    </header>
    <section>
      <div>
        <input type="text" v-model="input.title"/>
        <select v-model="input.type">
          <option value="url">Url</option>
          <option value="text">Text</option>
        </select>
        <input v-if="input.type === 'url'" type="text" v-model="input.url" placeholder="url here" />
        <input v-if="input.type === 'text'" type="text" v-model="input.content" placeholder="text here" />
        <button v-on:click="addCard">Add Card</button>
      </div>
    </section>
    <section>
      <card-list v-bind:cards="cards" v-bind:currentBoard="currentBoard"></card-list>
    </section>
  </article>
</template>

<script>
import CardList from './CardList'
import DefaultList from '../../data/list-default.json'

export default {
  name: 'app-body',
  components: {
    CardList
  },
  data: function () {
    return {
      title: '',
      currentBoard: '',
      cards: [],
      input: { title: '', type: 'url', url: '', content: '' }
    }
  },
  mounted: function () {
    this.title = ' \' -\')'
    this.currentBoard = 'testBoard'
    this.cards = DefaultList
  },
  methods: {
    addCard: function () {
      if (this.input.title === '') { return }
      if (this.input.type === 'url' && this.input.url !== '') {
        delete this.input.content
        this.cards.push(this.input)
      } else if (this.input.type === 'text' && this.input.content !== '') {
        delete this.input.url
        this.cards.push(this.input)
      }
      this.input = { title: '', type: 'url', url: '', content: '' }
    }
  }
}
</script>

<style lang="scss">
ul { padding: 0;  }
li { list-style: none; }

#app-body {
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
