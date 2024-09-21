<template>
  <div class="home">
    <h1>Мужские костюмы</h1>
    <p class="intro">Выберите один из наших брендов, чтобы узнать больше:</p>
    <div class="brands">
      <div v-for="brand in brands" :key="brand.name" class="brand-card">
        <router-link :to="`/brand/${brand.name}`" class="brand-link">
          <img :src="brand.image" :alt="brand.name" class="brand-image"/>
          <h3>{{ brand.name }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import zegnaImage from '../assets/images/zegna.jpg';
import brioniImage from '../assets/images/brioni.jpg';
import armaniImage from '../assets/images/armani.jpg';

export default {
  data() {
    return {
      brands: [
        { name: 'Zegna', image: zegnaImage },
        { name: 'Brioni', image: brioniImage },
        { name: 'Armani', image: armaniImage },
      ],
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px 20px;
}

h1 {
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 10px;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
}

.brands {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.brand-card {
  margin: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.brand-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.brand-image {
  width: 250px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.5rem;
  color: #333;
}
</style>
