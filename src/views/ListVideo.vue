<template>
  <section class="listVideo">
    <h1 class="listVideo-title">Lista de Video</h1>
    <div class="grid" id="js-list-video">
      {{ getVideo() }}
    </div>
    <!-- modal de eliminar data -->
    <div class="gray-out">
      <div class="content-modal">
        <div class="modal-eliminate-video__header">
          <h2 class="modal-eliminate-video__title">Eliminar video</h2>
          <span class="modal-eliminate-video__close">
            <i class="fas fa-times"></i>
          </span>
        </div>

        <div class="modal-eliminate-video__body">
          <p class="modal-eliminate-video__message">
            ¿Estas seguro que quieres eliminar este video?
          </p>
          <div class="buttons-actions">
            <button class="btn btn-primary" id="deleteCards" type="submit">
              Eliminar
            </button>
            <a href="./index.html" class="btn btn-secondary">
              Cancelar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListVideo",
  data() {
    return {};
  },
  methods: {
    getVideo() {
      fetch("http://localhost:3000/videos")
        .then((response) => response.json())
        .then((videos) => {
          videos.forEach((video) => {
            // console.log(video);
            this.insertCard(this.createCard(video));
          });
        });
    },
    createCard(video) {
      const { title, url_video, description, id } = video;
      const card = document.createElement("article");
      card.classList.add("card-video");

      card.innerHTML = `  
            <div class="card-video-img">
              <div class="card-video-actions">
                <div class="edit-btn">
                  <i class="fas fa-pen"></i>
                </div>
                <div class="delete-btn">
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div class="play-icon">
                <i class="fas fa-play"></i>
              </div>
              <img src="${url_video}" alt="img" />
            </div>
            <div class="card-video-information">
              <h3 class="card-video-title">${title}</h3>
              <span class="card-video-view">${id} visualizaciones</span>
              <p class="card-video-description">${description}</p>
              <a href="#" class="card-video-detail">
                Ver detalle
              </a>
            </div>
        `;
      //Eliminar card de la bd

      card.querySelector(".delete-btn").onclick = () => {
        const modalDelete = document.querySelector(".gray-out");
        const closeIconModal = document.querySelector(
          ".modal-eliminate-video__close"
        );
        const btnDelteCard = document.querySelector("#deleteCards");
        //Appear modal delete
        modalDelete.classList.add("active");

        //Close event modal delete
        closeIconModal.addEventListener("click", () => {
          modalDelete.classList.remove("active");
        });

        //Delete event of bd
        btnDelteCard.addEventListener("click", () => {
          this.deleteVideo(video);
          window.location.reload(true);
          modalDelete.classList.remove("active");
        });
      };
      return card;
    },
    insertCard(card) {
      const containerList = document.querySelector("#js-list-video");
      containerList.appendChild(card);
    },
    deleteVideo(video) {
      fetch(`http://localhost:3000/videos/${video.id}`, {
        method: "DELETE",
      });
    },
  },
};
</script>

<style lang="scss">
.listVideo {
  width: 100%;
  height: auto;
  padding: 0 6%;
  margin: 48px 0;
  &-title {
    margin: 0 0 36px 0;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
  }
}
/* Card styles */
.card-video {
  width: 100%;
  transition: 0.3s ease box-shadow;
  border: 1px solid var(--gray-color);
  position: relative;
  &:hover {
    box-shadow: 0px 0px 8px rgba(146, 146, 146, 0.53);
  }
  /*actions btn*/
  &-img {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &-actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background: transparent;
    position: absolute;
    top: 6px;
    left: 0;
  }
  &-information {
    padding: 9px 17px 16px 12px;
    background: var(--white-color);
  }
  &-title,
  &-view {
    margin: 0 0 3px 0;
  }
  &-title {
    font-size: 14px;
  }
  &-view {
    font-size: 11px;
  }
  &-description {
    font-size: 12px;
    margin: 0 0 6px 0;
  }
  &-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 34px;
    background: var(--color-btn);
    font-size: 12px;
    color: var(--white-color);
  }
  & img {
    width: 100%;
    height: 190px;
  }
  &:hover {
    .play-icon i {
      color: var(--primary-color);
    }
  }
}

.edit-btn,
.delete-btn {
  background: var(--gray-color);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & i,
  & i {
    color: var(--white-color);
    font-size: 0.7rem;
  }
}

.play-icon {
  position: absolute;
  cursor: pointer;
  & i {
    font-size: 3.5rem;
    color: var(--white-color);
    transition: 0.3s ease color;
  }
}
/*modal delete item*/
.gray-out.active {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}
.gray-out {
  display: none;
}
.content-modal {
  background: var(--white-color);
  width: 532px;
  height: 270px;
  padding: 15px 19px;
  display: flex;
  flex-direction: column;
}

.modal-eliminate-video__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--gray-color);
}

.modal-eliminate-video__body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.modal-eliminate-video__body .buttons-actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-eliminate-video__close {
  cursor: pointer;
}
.modal-eliminate-video__close i {
  font-size: 22px;
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
