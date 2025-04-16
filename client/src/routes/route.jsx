import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import App from '../App';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default appRouter;
