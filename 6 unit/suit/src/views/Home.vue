<template>
  <div class="home">
    <h1>Мужские костюмы</h1>
    <p class="intro">Выберите один из наших брендов, чтобы узнать больше:</p>
    <div class="brands">
      <div v-for="brand in allBrands" :key="brand.name" class="brand-card">
        <router-link :to="`/brand/${brand.name}`" class="brand-link">
          <img :src="brand.image" :alt="brand.name" class="brand-image"/>
          <h3>{{ brand.name }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allBrands() {
      return this.$store.getters.allBrands;
    }
  }
}
</script>
