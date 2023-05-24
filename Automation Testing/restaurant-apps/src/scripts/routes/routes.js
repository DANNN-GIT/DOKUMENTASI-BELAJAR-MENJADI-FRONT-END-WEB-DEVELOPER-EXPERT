import AllRestaurant from '../views/pages/all-restaurants';
import BestRestaurant from '../views/pages/best-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurant from '../views/pages/favorite';

const Routes = {
  '/': AllRestaurant,
  '/home': AllRestaurant,
  '/best-restaurant': BestRestaurant,
  '/detail-restaurant/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default Routes;
