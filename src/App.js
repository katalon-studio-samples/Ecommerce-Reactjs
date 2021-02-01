import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { registerNav } from './modules/Navigation'
import { insertToken } from './redux/action/tokenAction'
import SigninContainer from './pages/loginsignin/SigninContainer'
import SignupContainer from './pages/loginsignin/SignupContainer'
import DashboardContainer from './pages/dashboard/DashboardContainer'
import ProductOverview from './pages/productOverview/ProductOverviewContainer'
import ShoppingBagContainer from './pages/shoppingBag/ShoppingBagContainer'
import CheckoutContainer from './pages/checkout/checkoutContainer'
import CheckoutSuccessContainer from './pages/checkoutSuccess/CheckoutSuccessContainer'
import CheckoutCancel from './pages/checkoutCancel/CheckoutCancel'
class App extends Component {
  componentDidMount() {
    this.props.insertToken()
  }
  render() {
    return (
      <div>
        <Router ref={registerNav}>
          <Switch>
            <Route path="/signup" component={SignupContainer} />
            <Route path="/signin" component={SigninContainer} />
            <Route key="productOverview" path="/product-overview" component={ProductOverview} />,
            {this.props.token && [
              <Route key="ShoppingBagContainer" path="/bag" component={ShoppingBagContainer} />,
              <Route key="Checkout" path="/checkout" component={CheckoutContainer} />,
              <Route key="success" path="/success_page" component={CheckoutSuccessContainer} />,
              <Route key="cancel" path="/cancel_page" component={CheckoutCancel} />,
            ]}
            <Route key="dashboard" path="/dashboard" component={DashboardContainer} />,
            <Route exact path="/" component={DashboardContainer} />
            <Redirect to='/signin' />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStoreToProps = state => ({
  token: state.token.user_token
})
const mapDispatchToProps = {
  insertToken
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
