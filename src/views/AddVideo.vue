<template>
  <!-- Section add video -->
  <section class="add-video">
    <div>
      <h2 class="add-video-title">Agregar video</h2>
      <form class="add-video-form" @submit.prevent="AddVideo">
        <div>
          <input
            class="add-video-input title"
            required
            type="text"
            name="title"
            placeholder="Titulo"
            v-model="title"
          />
          <input
            class="add-video-input url-video"
            required
            type="text"
            name="url-video"
            placeholder="url-video"
            v-model="url_video"
          />
        </div>
        <div class="description-content">
          <textarea
            class="add-video-input description"
            required
            name="description"
            cols="30"
            rows="10"
            placeholder="Descripción"
            v-model="description"
          ></textarea>
        </div>
        <div class="buttons-actions">
          <button class="btn btn-primary" type="submit">Agregar</button>
          <router-link to="/" class="btn btn-secondary">
            Cancelar
          </router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddVideo",
  data() {
    return {
      title: "",
      url_video: "",
      description: ""
    };
  },
  methods: {
    AddVideo() {
      console.log("Click, añadir");
      fetch("http://localhost:3000/videos", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          url_video: this.url_video,
          description: this.description
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => { response.json();})
        .then(videoCreate =>{ console.log(videoCreate);});
      this.$router.push( "/" );
    }
  }
};
</script>

<style lang="scss">
/*Añadir video y editar video*/
.add-video {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  & div:first-child {
    width: 590px;
  }
  &-title {
    padding: 0 0 15px 0;
    margin: 0 0 26px 0;
    border-bottom: 1px solid var(--gray-color);
  }
  &-input {
    border: 1px solid var(--gray-color);
    padding: 13px;
    outline: none;
    width: 100%;
  }

  &-input:focus {
    border: 1px solid var(--color-btn);
  }

  &-input:first-child {
    margin: 0 20px 0 0;
  }

  .description-content &-input {
    margin: 0;
    font-family: var(--font-roboto);
  }

  &-form {
    width: 100%;
  }

  &-form div:first-child {
    margin: 0 0 20px 0;
  }

  &-form div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
//General
.buttons-actions {
  margin: 26px 0 0 0;
  & .btn.btn-primary {
    margin: 0 20px 0 0;
    background: var(--primary-color);
  }
  & .btn.btn-primary,
  & .btn.btn.btn-secondary {
    width: 121px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: unset;
    font-size: 14px;
    font-weight: normal;
  }
}


</style>
