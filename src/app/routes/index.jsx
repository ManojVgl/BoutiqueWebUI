import React, { Component } from 'react'
import { Route, Routes } from 'react-router'
import { HashRouter,BrowserRouter  as Router } from 'react-router-dom'
import Loadable from 'react-loadable';
import Layout from '../components/layout';
import {
  Home,
  ProductDetails,
  SalesDetails,
  Checkout,
  MyOrders

}
 from '../../screens/';
 import NewItem from '../components/item';
function Loading({ error }) {
  if (error) {
    return 'Oh nooess!'
  } else {
    return <h3>Loading...</h3>
  }
}
export const Path = {
  root: '/',
  welcome: '/welcome',
  home: '/home',
  productdetails: '/productdetails',
  salesdetails: '/sales',
  checkout:'/checkout',
  myorders:'/myorders',
  product:'/newitem',
  
}

const Welcome = Loadable({
  loader: () => import('../../screens/welcome'),
  loading: Loading
})


// history={history}  
class AppStackRoot extends Component {
  render() {
    return (
      <Router >
          
          <Layout>
            <Routes>
              <Route exact path={Path.root} element={<Welcome/>} />
              <Route exact path={Path.home} element={<Home/>} />
              <Route exact path={Path.productdetails} element={<ProductDetails/>} />
              <Route exact path={Path.salesdetails} element={<SalesDetails/>} />
              <Route exact path={Path.checkout} element={<Checkout/>} />
              <Route exact path={Path.myorders} element={<MyOrders/>} />
              <Route exact path={Path.product} element={<NewItem/>} />
            </Routes>
            </Layout>
            {/* <PrivateRoute path={Path.performtask} permission={SCREENS.SERVICE_REQUEST} component={PerformTasks} /> */}
          
      </Router >
    )
  }
}

export default AppStackRoot
