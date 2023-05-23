import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="resto-item" tabindex="0" id="focus-content">
    <section class="header-item">
      <label><span class="bi bi-star-fill"></span> ${restaurant.rating}</label>
      <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
    </section>
    <section class="content-item">
      <h3>${restaurant.name}</h3>
      <strong>${restaurant.city}</strong>
      <p>${restaurant.description}</p>
      <a href="/#/detail-restaurant/${restaurant.id}"><button tabindex="-1">Detail Restoran</button></a>
    </section>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="resto-detail" tabindex="0" id="focus-content">
    <section class="header-item">
      <label>${restaurant.name} (<span class="bi bi-star-fill"></span> ${restaurant.rating})</label>
      <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}"  crossorigin="anonymous">
    </section>
    <section class="content-item">
      <h3>${restaurant.name}</h3>
      <span class="bi bi-geo-alt-fill"></span> <strong>${restaurant.address}, ${restaurant.city}</strong>
      <h4>Deskripsi Restaurant</h4>
      <p>${restaurant.description}</p>
      <h4>Daftar Makanan</h4>
      ${restaurant.menus.foods.map((listFood) => `<p><i class="bi bi-pin-angle"></i> ${listFood.name}</p>`).join('')}
      <h4>Daftar Minuman</h4>
      ${restaurant.menus.drinks.map((listDrink) => `<p><i class="bi bi-pin-angle"></i> ${listDrink.name}</p>`).join('')}
      <h4>Review Pelanggan</h4>
      ${restaurant.customerReviews.map((review) => `
        <div class="card-review">
          <h4><i class="bi bi-person-fill-check"></i> ${review.name}</h4>
          <em><i class="bi bi-calendar-check"></i> ${review.date}</em>
          <p>${review.review}</p>
        </div>
      `).join('')}
    </section>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
