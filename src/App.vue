<template>
  <div id="app">
    <NavBar />
    <img src="./assets/logo.png">
    <!-- <PropsPractice 
      :title = "parentTitle"
      @parentMtd = "parentMethod"
    /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue';
import PropsPractice from './components/PropsPractice.vue';
import NavBar from './components/NavBar.vue';


export default {
  name: 'app',
  data () {
    return {
      parentTitle: "Parent title"
    }
  },
  components: {
    HelloWorld,
    ContactList,
    PropsPractice,
    NavBar
  },
  methods: {
    parentMethod(value) {
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
table {
  margin: 0 auto;
}
td, th {
  border: 1px solid gray;
  padding: 0.3rem;
  text-align: left;
}
</style>
