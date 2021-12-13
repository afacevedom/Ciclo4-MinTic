<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://www.svgrepo.com/show/206475/computer-healthcare-and-medical.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
          MiHistoriApp
        </a>
        <li v-if="is_auth" class="nav-item dropdown me-5 navtest">
          <a class="nav-link dropdown-toggle navlink" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{user}}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item logOut" v-on:click="logOut">Cerrar sesión</a></li>
          </ul>
        </li>
      </div>

    </nav>

    <div class="main-component">
      <router-view
          v-on:completedLogIn="completedLogIn"
          v-on:completedSignUp="completedSignUp"
          v-on:logOut="logOut"
      ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data: function (){
    return {
      user: localStorage.getItem('username') || "none",
      is_auth: false
    }
  },

  methods:{
    verifyAuth: function (){
      this.is_auth = localStorage.getItem("isAuth") || false;
      this.user = localStorage.getItem('username') || false;
      if (this.is_auth == false){
        this.$router.push({name: "logIn"})
      }
    },
    completedLogIn: function (data) {
      localStorage.setItem('isAuth', true);
      localStorage.setItem('username', data.username);
      localStorage.setItem('token_access', data.token_acess);
      localStorage.setItem('token_refresh', data.token_refresh);
      alert('Autenticación exitosa!');
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert('Registro existoso!');
      this.completedLogIn(data);
    },
    logOut: function (){
      localStorage.clear();
      alert('Sesión cerrada');
      this.verifyAuth();
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

.navlink{
  color: white !important;
  text-decoration: none !important;
}

.logOut:hover{
  cursor: pointer;
}

.navtest {
  list-style-type: none !important;
}
</style>