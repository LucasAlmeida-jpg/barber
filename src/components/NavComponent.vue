<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling">Menu</button>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class=" collapse navbar-collapse " id="navbarNav">
      <router-link to="/admin" class="nav-link me-3"><button class="btn">Sair</button></router-link>
    </div>
  </nav>
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
     <ul>
      <li>
        <div class="d-flex align-items-center justify-content-center">
          <div class="col-2"><img class="icon" src="../assets/icons/graph.png" alt=""></div>
          <div class="col-6">Dashboard</div>
        </div>
      </li>
      <li>
        <div class="d-flex align-items-center justify-content-center">
          <div class="col-2"><img class="icon" src="../assets/icons/user.png" alt=""></div>
          <div class="col-6">Clientes</div>
        </div>
      </li>
      <li>
        <div class="d-flex align-items-center justify-content-center">
          <div class="col-2"><img class="icon" src="../assets/icons/cortes.png" alt=""></div>
          <div class="col-6">Cortes</div>
        </div>
      </li>
      <li>
        <div class="d-flex align-items-center justify-content-center">
          <div class="col-2"><img class="icon" src="../assets/icons/report.png" alt=""></div>
          <div class="col-6">Relatórios</div>
        </div>
      </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

  },
};
</script>
