import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './componnent/Header/Header'
import Shop from './componnent/Shop/Shop'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Layout from './componnent/Layout/Layout';
import Review from './componnent/Review/Review';
import Inventory from './componnent/Inventory/Inventory';
import Notfound from './componnent/Notfound/Notfound';
import ProductDetail from './componnent/ProdutDetails/ProductDetail';



const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
   <Route path='/shop'element={<Shop/>} />
   <Route path='/review'element={<Review/>} />
   <Route path='/inventory'element={<Inventory/>} />
   <Route path='/product/:productKey'element={<ProductDetail/>} />
   <Route path='/*'element={<Notfound/>} />

    </Route>
  )
)










function App() {


  return (
   <div >

   <RouterProvider router={router}/>

   </div>
     
  )
}

export default App
