import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import LandingPage from "./Pages/LandingPage";
import Cart from "./Pages/Cart";
import CheckoutForm from "./Pages/Checkout";
import Summary from "./Pages/Summary";
import SuccessPage from "./Pages/SuccessPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<LandingPage />} />
					<Route path='cart' element={<Cart />} />
					<Route path='checkout' element={<CheckoutForm />} />
					<Route path='summary' element={<Summary />} />
				</Route>
				<Route path='success' element={<SuccessPage />} />

				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
