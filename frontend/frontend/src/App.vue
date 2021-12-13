<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://www.svgrepo.com/show/206475/computer-healthcare-and-medical.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
          MiHistoriApp
        </a>
      </div>
    </nav>

    <div class="main-component">
      <router-view

      ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data: function (){
    return {
      is_auth: false
    }
  },

  methods:{
    verifyAuth: function (){
      if (this.is_auth == false){
        this.$router.push({name: "logIn"})
      }
    }
  },

  created: function () {
    this.verifyAuth();
  }
}
</script>

<style>
.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
}
</style>