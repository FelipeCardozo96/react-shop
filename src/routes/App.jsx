import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../containers/Layout';
import PasswordRecovery from '../pages/PasswordRecovery';
import EmailSent from '../pages/EmailSent';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import AccountMenu from '../containers/AccountMenu';
import MobileMenu from '../containers/MobileMenu';
import MyOrder from '../pages/MyOrder';
import OrderHistory from '../pages/OrderHistory';
import ProductDescription from '../components/ProductDescription';
import Chart from '../pages/Chart';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
	return (
		<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/password-recovery" component={PasswordRecovery}/>
				<Route exact path ="/emailsent" component={EmailSent} />
				<Route exact path='/create-account' component={CreateAccount}/>
				<Route exact path='/my-account' component={MyAccount}/>
				<Route exact path='/account' component={AccountMenu}/>
				<Route exact path='/mobilemenu' component={MobileMenu}/>
				<Route exact path='/myorder' component={MyOrder}/>
				<Route exact path='/orderhistory' component={OrderHistory}/>
				<Route exact path='/prd' component={ProductDescription}/>
				<Route exact path='/chart' component={Chart}/>
				<Route component={NotFound}/>
			</Switch>
		</Layout>
		</BrowserRouter>
	);
}

export default App;
