import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ProductProvider } from "../contexts/ProductContext";

function AppLayout() {
	return (
		<>
			<ProductProvider>
				<Header />
				<Outlet />
				<Footer />
			</ProductProvider>
		</>
	);
}
export default AppLayout;
