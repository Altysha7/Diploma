import './App.css';
import Foryourpleasure from './pages/Foryourpleasure';
import Main from './pages/Main';
import Layout from './components/Layout';
import Ourcoffee from './pages/Ourcoffee';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import OurcoffeeOne from './pages/OurcoffeeOne';
import OurcountryOne from './pages/OurcountryOne';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/ourcoffee",
        element: <Ourcoffee />,
      },
      {
        path: "/ourcoffee/:id",
        element: <OurcoffeeOne />,
      },
      {
        path: "/ourcoffee/:country/:id",
        element: <OurcountryOne />,
      },
      {
        path: "/foryourpleasure",
        element: <Foryourpleasure />,
      },

    ]
  },

]);
function App() {
  return <RouterProvider router={router} />
}

export default App;
