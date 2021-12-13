<template>
  <br>
  <div class="main">
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">Nombre</span>
      <input type="text" class="form-control" placeholder="Nombre Paciente" aria-label="Username" aria-describedby="addon-wrapping" v-model="user">
    </div>

    <table class="table">
      <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">username</th>
        <th scope="col">Nombre Completo</th>
        <th scope="col">Edad</th>
        <th scope="col">Telefono</th>
        <th scope="col">Correo</th>
        <th scope="col">Doc Identidad</th>
        <th scope="col">Historial</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in mostrarPorNombre">
        <th scope="row">{{user.id}}</th>
        <td>{{user.username}}</td>
        <td>{{user.fullname}}</td>
        <td>{{user.Edad}}</td>
        <td>{{user.Mail}}</td>
        <td>{{user.DocIdentidad}}</td>
        <td>{{user.Telefono}}</td>
        <td>
          <button v-on:click="update(user.username, user.DocIdentidad)" type="button" class="btn btn-success" data-bs-toggle="modal" :data-bs-target="`#modal${index}`">
            <i class="fas fa-plus"></i>
          </button>
          <button v-on:click="historyByData(user.DocIdentidad)" type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#modals${index}`">
            <i class="fas fa-search"></i>
          </button>

          <!-- Modal -->
          <div class="modal fade" :id="`modal${index}`" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModal">Añadir historia para {{user.fullname}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form v-on:submit.prevent="processHistory">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Username Paciente</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" v-model="historyInput.username" disabled>
                      <div  class="form-text">(No hace falta rellenar campo)</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail2" class="form-label">Cedula Paciente</label>
                      <input type="text" class="form-control" id="exampleInputEmail2" v-model="historyInput.cc" disabled>
                      <div class="form-text">(No hace falta rellenar campo)</div>
                    </div>
                    <div class="mb-3">
                      <label for="title" class="form-label">Titulo Historia </label>
                      <input type="text" class="form-control" id="title" v-model="historyInput.title">
                    </div>
                    <label for="text" class="form-label">Contenido historia </label>
                    <div class="input-group">
                      <textarea type="text" class="form-control" id="text" v-model="historyInput.text"></textarea>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-success">Guardar</button>
                  </form>
                </div>

                <div class="modal-footer">
                  <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" :id="`modals${index}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Historias de {{user.fullname}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h4 v-if="historys.length == 0">No hay historias para mostrar</h4>
                  <div class="accordion" id="accordionExample" v-else>
                    <h4 class="text-center text-black"><strong>Historias</strong></h4>
                    <div v-for="(history, index) in historys" v-bind:key="history.id" class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" aria-controls="collapseOne">
                          {{history.creationDate.substring(0, 10)}} {{history.title}}
                        </button>
                      </h2>
                      <div :id="`collapse${index}`" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>Nombre:</strong> {{user.fullname}}
                          <br>
                          <strong>Cédula</strong> {{user.DocIdentidad}}
                          <br>
                          <strong>Resumen: </strong> {{history.text}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "HomeDoc",

  data: function (){
    return {
      user: null,
      userAll: [],
      historyInput: {
        username: "",
        cc: "",
        title: "",
        text: ""
      },
      historys: []
    }
  },
  apollo: {
    userAll: {
      query: gql `
          query {
            userAll {
                id
                username
                fullname
                Mail
                Edad
                DocIdentidad
                Telefono
                Doctor
            }
          }
   `
    }
  },
  methods: {
    update: function (name, cedula){
      this.historyInput.username = name;
      this.historyInput.cc = cedula;
    }, processHistory: async function (){
      this.$apollo.mutate({
        mutation: gql `
            mutation CreateHistory($history: CreationInput!) {
                createHistory(history: $history) {
                    id
                    username
                    cc
                    title
                    text
                    creationDate
                }
            }`,
        variables: {
          history: this.historyInput,
        },
      }).then((result) => {
        console.log(result);
        alert("Historia creada!");
      }).catch((error) => {
        alert('Error al crear la historia!');
      })
    }, historyByData: function (data){
      this.$apollo.query({
        query: gql `
                query HistoryByData($data: String!) {
                    historyByData(data: $data) {
                        id
                        username
                        cc
                        title
                        text
                        creationDate
                    }
                }`,variables: {
                    data: data,
                }
      }).then((response) => {
        this.historys = response.data.historyByData;
        console.log(this.historys)
      })
    }

  },
  computed: {
    mostrarPorNombre(){
      return this.userAll.filter( item => item.fullname.includes(this.user));
    }
  }
}
</script>

<style scoped>
.main{
  margin: 30px;
}
</style>