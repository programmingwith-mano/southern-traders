/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  HashRouter 
} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import { createBrowserHistory } from "history";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

const PrivateRouter = ({ component, ...options }) => {
  console.log('...options', options);
  const finalComponent = <Route {...options} component={component} />
  return finalComponent;
};

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const browserHistory = createBrowserHistory();

    return (
      <div>
        <Router ref={registerNav}>
            {HomeRoutes.map((homeRoute, index) => {
              return (
                <Route
                  key={index}
                  path={homeRoute.path}
                  exact={homeRoute.exact}
                  component={props => {
                    return (
                      <homeRoute.layout {...props}>
                        <homeRoute.component {...props} />
                      </homeRoute.layout>
                    );
                  }}
                />
              );
            })}
            
        </Router>
      </div>
    );
  }
}

export default Routes;
