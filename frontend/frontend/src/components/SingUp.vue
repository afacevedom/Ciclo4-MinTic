<template>
  <div class="center separate">
    <div class="container_logIn_user">
      <form v-on:submit.prevent="processSignUp" >
        <div id="container1">
        <div class="txt_field">
          <input type="text" v-model="user.username" >
          <span></span>
          <label>Usuario</label>
        </div>
        <div class="txt_field">
          <input type="password" v-model="user.password">
          <span></span>
          <label>Contraseña</label>
        </div>
        <div class="txt_field">
          <input type="text" v-model="user.fullname">
          <span></span>
          <label>Nombre</label>
        </div>
        </div>
        <div id="container2">
        <div class="txt_field">
          <input type="email" v-model="user.email">
          <span></span>
          <label>E-mail</label>
        </div>

        <div class="txt_field">
          <input type="number" v-model="user.edad">
          <span></span>
          <label>Edad</label>
        </div>
        <div class="txt_field">
          <input type="text" v-model="user.cc">
          <span></span>
          <label>Cedula</label>
        </div>
        <div class="txt_field">
          <input type="text" v-model="user.tel">
          <span></span>
          <label>Telefono Celular</label>
        </div>
        </div>
        <input type="submit" value="Registrarse">
        <router-link to="/login"><a class="signUp">Tengo cuenta!</a></router-link>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "SingUp",
  data: function (){
    return{
      user: {
        username: "",
        fullname: "",
        password: "",
        email: "",
        edad: 0,
        cc: "",
        tel: "",
        root: false
      }
    }
  },
  methods: {
    processSignUp: async function(){
      await this.$apollo.mutate({
        mutation: gql`
            mutation Mutation($userInput: SignUpInput!) {
                signUpUser(userInput: $userInput) {
                    refresh
                    access
                }
            }
        `,
        variables: {
          userInput: this.user
        },
      }).then((result) => {
        let dataSignUp = {
          username: this.username,
          token_access: result.data.signUpUser.access,
          token_refresh: result.data.signUpUser.refresh
        }
        this.$emit('completedSignUp', dataSignUp);
      }).catch((error) => {
        alert("Error en el registro.")
      })
    }
  }
}
</script>

<style scoped>
.center {
  margin-top: 50px;
}
</style>