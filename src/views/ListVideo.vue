<template>
  <section class="listVideo">
    <h1 class="listVideo-title">Seccion de lista de Video</h1>
    <div class="grid" id="js-list-video">
      {{ getVideo() }}
    </div>
  </section>
</template>

<script>
export default {
  name: "ListVideo",
  components: {},
  data() {
    return {};
  },
  methods: {
    getVideo() {
      fetch("http://localhost:3000/videos")
        .then(response => response.json())
        .then(videos => {
          videos.forEach(video => {
            console.log(video);
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
      return card;
    },
    insertCard(card) {
      const containerList = document.querySelector("#js-list-video");
      containerList.appendChild(card);
    }
  }
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
  @media screen and (max-width: 992px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 420px){
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
</style>
