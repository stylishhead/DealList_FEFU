import { createStore } from 'vuex';

export default createStore({
  state: {
    brands: [
      {
        name: 'Zegna',
        image: require('../assets/images/zegna.jpg'),
        description: 'Zegna — это известный итальянский бренд, специализирующийся на классических костюмах с акцентом на качество и элегантность.',
        details: [
          { title: 'Пошив', info: 'Итальянские мастера делают акцент на идеальной посадке и качестве обработки.' },
          { title: 'Материал', info: 'Используются натуральные ткани, такие как шерсть, кашемир и шелк.' }
        ]
      },
      {
        name: 'Brioni',
        image: require('../assets/images/brioni.jpg'),
        description: 'Brioni — это люксовый бренд, известный своими элегантными и престижными костюмами ручной работы.',
        details: [
          { title: 'Пошив', info: 'Костюмы Brioni славятся индивидуальным подходом и ручной работой.' },
          { title: 'Материал', info: 'Brioni использует только лучшие ткани, что обеспечивает высочайшее качество.' }
        ]
      },
      {
        name: 'Armani',
        image: require('../assets/images/armani.jpg'),
        description: 'Armani — это бренд, который воплощает в себе современный стиль и изысканность, предлагая элегантные и минималистичные костюмы.',
        details: [
          { title: 'Материал', info: 'Для костюмов Armani используются легкие ткани, такие как шелк и льняные смеси.' },
          { title: 'Пошив', info: 'Armani делает акцент на минималистичном дизайне и высокотехнологичных тканях.' }
        ]
      }
    ]
  },
  mutations: {
    // Мутация для обновления деталей бренда
    setBrandDetail(state, { brandName, detail }) {
      const brand = state.brands.find(b => b.name === brandName);
      if (brand) {
        brand.details.push(detail);
      }
    }
  },
  actions: {
    // Асинхронное добавление нового detail
    addBrandDetail({ commit }, payload) {
      commit('setBrandDetail', payload);
    }
  },
  getters: {
    // Получить информацию о бренде
    getBrand: (state) => (brandName) => {
      return state.brands.find(brand => brand.name === brandName);
    },
    // Получить все бренды
    allBrands(state) {
      return state.brands;
    }
  }
});
