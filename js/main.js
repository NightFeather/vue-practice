
Vue.component('card-list',{
  props: ["cards"],
  template: '<ul><card-item v-for="(card,index) in cards" v-bind:card="card"></card-item></ul>',
  methods: {
    deleteCard: function(index){
      this.cards.splice(index, 1)
    }
  }
})

Vue.component('card-item',{
  props: ["card","index"],
  template: '<li class="card"><button v-on:click="$parent.deleteCard(index)">X</button><span>{{ card.text }}</span></li>'
})

main = new Vue({
  el: '#main',
  data: {
    title: " ' -')",
    currentBoard: "testboard",
    input: '',
    cards: [
      { text: "Vuejs" },
      { text: "Reddit clone ver.RoR" },
      { text: "Some Random Shits" }
    ]
  },
  methods: {
    addCard: function(){
      if(this.input == "") { return; }
      this.cards.push({ text: this.input });
      this.input = "";
    }
  }
})
