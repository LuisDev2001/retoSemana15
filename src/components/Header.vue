<template>
  <header class="header">
    <router-link to="/">
      <h1 class="header-title">Pacha Video</h1>
    </router-link>
    <router-link to="/AddVideo" class="btn btn-primary">
      Agregar Video
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px rgba(53, 53, 53, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  background: var(--primary-color);
  color: var(--white-color);
  a {
    color: var(--white-color);
    &-title {
      font-size: 36px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .btn.btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
/*Botones*/
.btn {
  background: none;
  border: 0;
  outline: none;
  &.btn-primary {
    color: var(--white-color);
    font-size: 16px;
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  &.btn-secondary {
    background: var(--gray-color);
    color: #222;
  }
}


</style>
