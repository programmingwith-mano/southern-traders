/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

// Route Views
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

import CartContainer from "../views/Cart/CartContainer";
import HomeContainer from "../views/Home/HomeContainer";

var PrivateRoutes = [
  {
    path: "/southern-traders",
    exact: true,
    layout: BaseLayout,
    component: HomeContainer,
  },
];

export default PrivateRoutes;
