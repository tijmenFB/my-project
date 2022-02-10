<template>
  <div id="app">
    <navigation-bar @open="openPagina"/>

    <lijst v-if="pagina === 'lijst'"/>
    <reken v-if="pagina === 'reken'"/>

  </div>
</template>

<script>

import NavigationBar from "@/components/NavigationBar";
import lijst from "@/views/lijst";
import reken from "@/views/reken";


export default {
  name: 'App',
  components: {
    NavigationBar,
    lijst,
    reken

  },

  data: () => {
    return {
      pagina:''

    }
  },
  methods: {
    openPagina(pagina){
      this.pagina = pagina
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.niet-done{
  float: left;
}
.gedaan{
  float: right;
}
</style>
