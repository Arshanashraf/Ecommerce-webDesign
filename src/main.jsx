import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Details from './pages/Details.jsx'
import MyCart from './pages/MyCart.jsx'
import OrderSummary from './pages/OrderSummary.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/products",
        element: <Products />
      },
      {
        path:"/details/:productId",
        element: <Details />
      },{
        path: "/mycart",
        element: <MyCart />
      },
      {
        path: "/order-summary",
        element: <OrderSummary />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
