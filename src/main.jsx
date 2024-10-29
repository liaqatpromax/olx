import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Product from './components/Product.jsx'
import Body from './components/Body.jsx'
import { Provider } from 'react-redux'
import { stor } from './app/stor.js'
import CatDetails from './components/CatDetails.jsx'
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import './index.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    {/* Default route to render Body component */}
    <Route path="" element={<Body />} />
    {/* Route for product details page */}
    <Route path="details/:label" element={<Product />} />
    //route for catogries
    <Route path='list' element={<CatDetails/>}/>
  </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={stor}>
    <RouterProvider router={router}/>

    </Provider>
  </StrictMode>,
)
