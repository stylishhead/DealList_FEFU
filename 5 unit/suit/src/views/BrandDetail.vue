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

    <!-- Другие бренды -->
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
import zegnaImage from '../assets/images/zegna.jpg';
import brioniImage from '../assets/images/brioni.jpg';
import armaniImage from '../assets/images/armani.jpg';

export default {
  props: {
    brandName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeDetail: null,
      brands: {
        Zegna: {
          image: zegnaImage,
          description: 'Zegna — это известный итальянский бренд, специализирующийся на классических костюмах с акцентом на качество и элегантность.',
          details: [
            { title: 'Пошив', info: 'Итальянские мастера делают акцент на идеальной посадке и качестве обработки.' },
            { title: 'Материал', info: 'Используются натуральные ткани, такие как шерсть, кашемир и шелк.' }
          ]
        },
        Brioni: {
          image: brioniImage,
          description: 'Brioni — это люксовый бренд, известный своими элегантными и престижными костюмами ручной работы.',
          details: [
            { title: 'Пошив', info: 'Костюмы Brioni славятся индивидуальным подходом и ручной работой.' },
            { title: 'Материал', info: 'Brioni использует только лучшие ткани, что обеспечивает высочайшее качество.' }
          ]
        },
        Armani: {
          image: armaniImage,
          description: 'Armani — это бренд, который воплощает в себе современный стиль и изысканность, предлагая элегантные и минималистичные костюмы.',
          details: [
            { title: 'Материал', info: 'Для костюмов Armani используются легкие ткани, такие как шелк и льняные смеси.' },
            { title: 'Пошив', info: 'Armani делает акцент на минималистичном дизайне и высокотехнологичных тканях.' }
          ]
        }
      },
      allBrands: [
        { name: 'Zegna', image: zegnaImage },
        { name: 'Brioni', image: brioniImage },
        { name: 'Armani', image: armaniImage }
      ]
    };
  },
  computed: {
    brandInfo() {
      return this.brands[this.brandName] || null;
    }
  },
  methods: {
    showDetail(detail) {
      this.activeDetail = detail;
    }
  }
};
</script>

<style scoped>
.brand-detail {
  padding: 50px 20px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #007BFF;
  margin-bottom: 20px;
}

.brand-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.brand-detail-image {
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.brand-description {
  max-width: 800px;
  text-align: left;
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #007BFF;
}

a:hover {
  text-decoration: underline;
}

.detail-info {
  margin-top: 20px;
}

h3 {
  font-size: 1.5rem;
  color: #333;
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
