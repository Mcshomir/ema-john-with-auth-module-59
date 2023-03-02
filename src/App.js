import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Shiping from './components/Shiping/Shiping';
import PrivetRoute from './Route/PrivetRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <PrivetRoute><Orders></Orders></PrivetRoute>
        },
        {
          path: '/inventory',
          element: <PrivetRoute><Inventory></Inventory></PrivetRoute>
        },
        {
          path: '/shipping',
          element: <PrivetRoute><Shiping></Shiping></PrivetRoute>
        },
        {
          path: '/about',
          element: <PrivetRoute><About></About></PrivetRoute>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/*',
          element: <h1>Not Found ! 404</h1>
        }

      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
