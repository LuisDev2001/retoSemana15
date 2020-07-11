<template>
  <!-- Section detail data -->
  <section class="detail-section">
    <h2 class="detail-title">{{ detailTitle }}</h2>

    <figure class="detail-video-container">
      <img class="detail-video" :src="detailUrl_video" alt="Img" />
      <div class="play-icon">
        <i class="fas fa-play"></i>
      </div>
    </figure>

    <div class="detail-detail-container">
      <h3 class="detail-sub-title">{{ detailTitle }}</h3>
      <p class="detail-views">{{ editId }} visualizaciones</p>

      <p class="detail__description">
        {{ detailDescription }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailVideo",
  data() {
    return {
      etailTitle: "aaa",
      detailUrl_video: "",
      detailDescription: "aaaa",
    };
  },
};
</script>

<style scope lang="scss">
/*Detail section*/
.detail-section {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 6%;
}

.detail-title {
  margin: 48px 0 24px 0;
}

.detail-video-container {
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-video-container img {
  width: 100%;
  height: 100%;
}

.detail-detail-container {
  width: 100%;
  padding: 22px 13px;
}

.detail-sub-title {
  font-size: 14px;
}

.detail-sub-title,
.detail-views,
.detail__description {
  margin-bottom: 16px;
}

.detail-views,
.detail__description {
  color: var(--color-black3);
  font-size: 11px;
}
</style>
