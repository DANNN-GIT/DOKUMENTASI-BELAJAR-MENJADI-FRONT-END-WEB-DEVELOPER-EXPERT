import DicodingRestaurants from '../../data/dicoding-restaurants';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const BestRestaurant = {
  async render() {
    return `
      <h2>Rekomendasi Restoran dengan Rating Terbaik</h2><hr>
      <div class="restaurant-container"></div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurants.showAllRestaurants();
    const restaurantContainer = document.querySelector('.restaurant-container');
    restaurants.forEach((restaurant) => {
      if (restaurant.rating > 4.5) {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      }
    });
  },
};

export default BestRestaurant;
