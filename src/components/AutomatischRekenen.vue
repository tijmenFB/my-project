<template>
  <div class="automatisch-Berekenen">
    <p> Voer 2 getallen in.</p>
    <div class="tekstvakje-container">
    <input type="number" id="getal1" class="tekstvakje" placeholder="Getal 1" v-model.number="inputGetal1">
    <input type="number" id="getal2" class="tekstvakje" placeholder="Getal 2" v-model.number="inputGetal2">
    </div>

    <div class="uitkomst-container">
      <p> Plus =</p>
      <input type="number" id="uitkomstPlus" class="uitkomst" placeholder="+" disabled :value="berekenPlus">
    </div>
    <div class="uitkomst-container">
      <p> Min =</p>
      <input type="number" id="uitkomstMin" class="uitkomst" placeholder="-" disabled :value="berekenMin">
    </div>
    <div class="uitkomst-container">
      <p> Keer =</p>
      <input type="number" id="uitkomstKeer" class="uitkomst" placeholder="*" disabled :value="berekenKeer">
    </div>
    <button @click="automatischBereken()" class="bereken">Bereken</button>
  </div>
</template>

<script>
export default {
  name: "AutomatischRekenen",

  data: () => {
    return {
      inputGetal1: undefined,
      inputGetal2: undefined,
      uitkomstPlus: undefined,
      uitkomstMin: undefined,
      uitkomstKeer: undefined,
    }
  },

  computed: {

    berekenPlus(){
      if(this.inputGetal1  && this.inputGetal2 ){
        return this.inputGetal1 + this.inputGetal2;
      }
      return undefined;
    },
    berekenMin(){
      if(this.inputGetal1  && this.inputGetal2 ){
        return this.inputGetal1 - this.inputGetal2;
      }
      return undefined;
    },
    berekenKeer(){
      if(this.inputGetal1  && this.inputGetal2 ){
        return this.inputGetal1 * this.inputGetal2;
      }
      return undefined;
    },


  },

  methods: {
    automatischBereken() {
      let getal1 = parseInt(this.inputGetal1)
      let getal2 = parseInt(this.inputGetal2)

      this.uitkomstPlus = getal1 + getal2;
      this.uitkomstMin = getal1 - getal2;
      this.uitkomstKeer = getal1 * getal2;
    }
  }

}


</script>

<style scoped lang="scss">

.automatisch-Berekenen {
  width: 300px;
.tekstvakje-container{
  display: flex;
}
  .uitkomst-container {
    display: flex;
    margin: 5px 0;
    align-items: center;
    .uitkomst {
      width: 150px;
      height: 30px;
    }

    p{
      flex: 1;
    }
  }

  .bereken {
    width: 150px;
    float: right;
  }
}


</style>