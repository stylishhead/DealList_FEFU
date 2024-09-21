<template>
  <div class="brand-detail">
    <h1 v-if="brandInfo">{{ brandName }} костюмы</h1>

    <div v-if="brandInfo" class="brand-content">
      <img :src="brandInfo.image" :alt="brandName" class="brand-detail-image" />
      <div class="brand-description">
        <p>{{ brandInfo.description }}</p>

        <h2>Дополнительная информация:</h2>
        <ul>
          <li v-for="detail in brandInfo.details" :key="detail.title">
            <a href="#" @click.prevent="showDetail(detail)">{{ detail.title }}</a>
          </li>
        </ul>

        <div v-if="activeDetail" class="detail-info">
          <h3>{{ activeDetail.title }}</h3>
          <p>{{ activeDetail.info }}</p>
        </div>
      </div>
    </div>

    <h2>Другие бренды:</h2>
    <div class="brands">
      <div v-for="brand in allBrands" :key="brand.name" class="brand-card">
        <router-link :to="`/brand/${brand.name}`" class="brand-link">
          <img :src="brand.image" :alt="brand.name" class="brand-image" />
          <h3>{{ brand.name }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brandName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeDetail: null
    };
  },
  computed: {
    brandInfo() {
      return this.$store.getters.getBrand(this.brandName);
    },
    allBrands() {
      return this.$store.getters.allBrands;
    }
  },
  methods: {
    showDetail(detail) {
      this.activeDetail = detail;
    }
  }
};
</script>
