/** @format */

import { Route , Switch} from "react-router-dom";
import Account from "./pages/Account";
import Home from "./pages/Home";
import ReportBug from "./pages/ReportBug";
import SignIn from "./pages/SignIn";
import Trips from "./pages/Trip";
import Layout from "./components/layout/Layout";
import NewTripForm from "./components/NewStuff/NewTripForm";



function App() {
	return (
		<div>
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/report-bug">
					<ReportBug />
				</Route>
				<Route path="/trips">
					<Trips />
          <NewTripForm />
				</Route>
				<Route path="/account">
          Your Account
					<Account />
          
				</Route>
				<Route path="/sign-in">
					<SignIn />
				</Route>
			</Switch>
		</Layout>
    </div>
	);
}

export default App;
