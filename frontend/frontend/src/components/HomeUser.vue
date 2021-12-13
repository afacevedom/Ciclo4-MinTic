<template>
<div class="main row d-flex justify-content-center overflow-hidden">
  <br>
  <h2 class="text-center">Bienvenid@ {{userDetailById.fullname}}</h2>
  <div class="personal">
  <div class="accordion" id="accordionExample">
    <h4 class="text-center text-black"><strong>Mis historias</strong></h4>
    <div v-for="history in historyByData" v-bind:key="history.id" class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {{history.creationDate.substring(0, 10)}} {{history.title}}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Nombre:</strong> {{userDetailById.fullname}}
          <br>
          <strong>Cédula</strong> {{userDetailById.DocIdentidad}}
          <br>
          <strong>Resumen: </strong> {{history.text}}
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "HomeUser",
  data: function (){
    return {
      userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      historyByData: [],
      userDetailById: {
        id: "",
        username: "",
        fullname: "",
        Mail: "",
        Edad: "",
        DocIdentidad: "",
        Telefono: "",
        Doctor: ""
      },
    }
  },
  apollo : {
    userDetailById: {
      query: gql `
        query UserDetailById($userId: String!) {
            userDetailById(userId: $userId) {
                id
                username
                fullname
                Mail
                Edad
                DocIdentidad
                Telefono
                Doctor
            }
         }`, variables() {
          return{
            userId: String(this.userId),
          };
      },
    },
    historyByData: {
      query: gql`
                query historyByData($data: String!) {
                     historyByData(data: $data) {
                        id
                        username
                        cc
                        title
                        text
                        creationDate
                    }
                }
        `,
      variables(){
        return {
          data: this.userDetailById.DocIdentidad,
        }
      }
    }
  },
  methods: {
    test: function (){
      console.log(this.historyByData);
    }
  }
}
</script>

<style scoped>
.personal{
  width: 1000px;
}
</style>