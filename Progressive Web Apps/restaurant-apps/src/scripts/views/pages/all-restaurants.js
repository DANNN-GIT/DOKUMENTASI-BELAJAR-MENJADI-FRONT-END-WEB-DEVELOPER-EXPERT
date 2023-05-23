import DicodingRestaurants from '../../data/dicoding-restaurants';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const AllRestaurant = {
  async render() {
    return `
      <h2>Pilihan Restoran Populer di Indonesia</h2><hr>
      <div class="restaurant-container"></div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurants.showAllRestaurants();
    const restaurantContainer = document.querySelector('.restaurant-container');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default AllRestaurant;
