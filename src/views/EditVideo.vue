<template>
  <!-- Section edit video -->
  <section class="edit-video">
    <div>
      <h2 class="edit-video-title">Editar video</h2>
      <form class="edit-video-form" @submit.prevent="submitEditVideo">
        <div>
          <input
            class="edit-video-input title"
            required
            type="text"
            name="title"
            placeholder="Titulo"
            v-model="editTitle"
          />
          <input
            class="edit-video-input url-video"
            required
            type="text"
            name="url-video"
            placeholder="url-video"
            v-model="editUrl_video"
          />
        </div>
        <div class="description-content">
          <textarea
            class="edit-video-input description"
            required
            name="description"
            cols="30"
            rows="10"
            placeholder="Descripción"
            v-model="editDescription"
          ></textarea>
        </div>

        <div class="buttons-actions">
          <button class="btn btn-primary" type="submit">Guardar</button>
          <router-link to="/" class="btn btn-secondary">
            Cancelar
          </router-link>
        </div>
      </form>
    </div>
    {{ con() }}
  </section>
</template>

<script>
export default {
  name: "EditVideo",
  data() {
    return {
      editTitle: "",
      editUrl_video: "",
      editDescription: "",
      editId: 0,
    };
  },
  methods: {
    con() {
      console.log(this.editTitle);
      console.log(this.editUrl_video);
      console.log(this.editDescription);
      console.log(this.editId);
    },
    submitEditVideo() {
      fetch(`http://localhost:3000/videos/${this.editId}`, {
        method: "PUT",
        body: JSON.stringify({
          title: this.editTitle,
          url_video: this.editUrl_video,
          description: this.editDescription,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((videoEdited) => {
          return console.log(videoEdited);
        });
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
/*editar video*/
.edit-video {
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
