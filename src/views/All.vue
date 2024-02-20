<template>
  <main class="container d-flex align-items-center justify-content-center text-center" style="height: 100vh;">
    <div class="card">
      <h2>Login</h2>  
      <form>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingUsername">
          <label for="floatingUsername">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword">
          <label for="floatingPassword">Senha</label>
        </div>
        <RouterLink :to="{ path: '/client' }"><button class="btn me-5">Cliente</button></RouterLink>
        <RouterLink :to="{ path: '/admin/dashboard/' + id }"><button class="btn">Barbeiro</button></RouterLink>
      </form>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      id: 'dashboard', 
    };
  },
};
</script>
