<template>

  <div class="topnav">
    <a @click="openLijst">Lijst</a>
    <a @click=" openReken">Reken</a>
    </div>

</template>


<script>
export default {
  name: 'NavigationBar',

  methods:{
    openLijst(){
      this.$emit("open", 'lijst')
    },
    openReken(){
      this.$emit("open", 'reken')
    }
  }

}



</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}


</style>
