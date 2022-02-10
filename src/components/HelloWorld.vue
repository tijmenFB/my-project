<template>
  <div class="hello">


    <h1> {{ msg }}</h1>

    <input type="text" id="input" class="tekstvakje" placeholder="Enter Task" v-model="inputMessage">
    <button type="button" @click="add" class="button">Submit
    </button>
    <button type="button" @click="onDelete" class="button">Delete
    </button>


    <p v-for="message in messages" :key="message">

      {{ message }}

    </p>



  </div>

</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data: () => {
    return {
      inputMessage: "",
      messageDisplayed: false,
      messages: [],

    }
  },
  methods:{
    onDelete(){
      this.messages.splice(this.inputMessage)
      this.inputMessage=""
    },
    add(){
      this.messageDisplayed = !this.messageDisplayed
      this.messages.push(this.inputMessage)
      this.inputMessage = ""
    }

  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.tekstvakje {
  padding: 5px 16px;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
