import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";
import ProductList from "../components/Products/ProductList";

var routes = [
  {
    path: "/southern-traders",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },
  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/southern-traders" />,
  },
  {
    path: "/southern-traders/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/southern-traders/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
  {
    path: "/southern-traders/productlist/:item",
    layout: BaseLayout,
    component: ProductList,
  },
  {
    path: "/",
    layout: BaseLayout,
    component: () => <Redirect to="/southern-traders" />,
  }
];

export default routes;
