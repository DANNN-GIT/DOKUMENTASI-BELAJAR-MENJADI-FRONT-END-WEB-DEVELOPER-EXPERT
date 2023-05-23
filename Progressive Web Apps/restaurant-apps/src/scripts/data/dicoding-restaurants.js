import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurants {
  static async showAllRestaurants() {
    const response = await fetch(API_ENDPOINT.DATA_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DicodingRestaurants;