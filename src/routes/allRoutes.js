import User from '../pages/users';
import UserDetails from '../pages/userDetails';

const Routes = [
  {
    path: '/user',
    component: <User />
  },
  {
    path: '/user/:id',
    component: <UserDetails />
  }
];

export default Routes;
