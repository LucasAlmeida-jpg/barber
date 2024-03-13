<template>
  <h1 class="text-center my-5 color-primary">Barbeiros ativo na barbearia</h1>
  <div class="row h-100 d-flex align-items-center justify-content-center">
    <div class="row">
      <div class="col-md-4" v-for="teste in cuts">
    <div class="card mb-4">
      <div class="d-flex align-items-center justify-content-start">
        <div>
          <img class="barber" src="../assets/icons/santa-beard.png" alt="">
        </div>
        <div>
          <h1 class="h-primary">Barbeiro</h1>
          <p>Nome: {{ teste.name }}</p>
          <p>Telefone: {{ teste.phone }}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Cadastrar</button>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <img class="barber" src="../assets/icons/santa-beard.png" alt="">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="cadastro.name">
                <label for="floatingPassword">Nome</label>
              </div>
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="cadastro.phone">
                <label for="floatingInput">Telefone</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-primary" @click="addBarber()">Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cuts: [],
      cadastro: {
        name: '',
        phone: '',
      }
    }
  },
  methods: {
    addBarber() {
      this.cuts.push({ ...this.cadastro });
      this.cadastro.name = '';
      this.cadastro.phone = '';
    }
  }
};
</script>
