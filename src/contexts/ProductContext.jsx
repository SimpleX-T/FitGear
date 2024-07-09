import { createContext, useContext, useEffect, useState } from "react";

const products = [
	{
		id: 1,
		title: "dumbbell",
		unitPrice: 15_000,
		imageUrl: "Dumbbell.png",
		favorite: false,
		quantity: 1,
	},
	{
		id: 2,
		title: "yoga mat",
		unitPrice: 10_000,
		imageUrl: "YogaMat.png",
		favorite: false,
		quantity: 1,
	},
	{
		id: 3,
		title: "GPS watch",
		unitPrice: 15_000,
		imageUrl: "RunningWatch.png",
		favorite: false,
		quantity: 1,
	},
	{
		id: 4,
		title: "Women's gym bag",
		unitPrice: 15_000,
		imageUrl: "GymBag.png",
		favorite: false,
		quantity: 1,
	},
];

const ProductContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function ProductProvider({ children }) {
	const [productsList, setProductsList] = useState(products);
	const [cart, setCart] = useState(cartFromLocalStorage);
	const numCart = cart.length;

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const totalPrice = cart.reduce(
		(sum, product) => sum + product.unitPrice * product.quantity,
		0
	);

	function handleFavorite(id) {
		setProductsList(
			productsList.map((product) =>
				product.id === id
					? { ...product, favorite: !product.favorite }
					: product
			)
		);
	}

	function handleAddToCart(id) {
		setCart([...cart, productsList.find((product) => product.id === id)]);
	}

	function handleCartItemIncrement(id) {
		setCart(
			cart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	}

	function handleCartItemDecrement(id) {
		if (cart.find((item) => item.id === id).quantity === 1) {
			handleDeleteItem(id);

			return;
		}
		setCart(
			cart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity - 1 } : item
			)
		);
	}

	function handleDeleteItem(id) {
		setCart(cart.filter((item) => item.id !== id));
	}

	function handleRemoveCart() {
		console.log("clearing cart");
		localStorage.setItem("cart", []);
		setCart([]);
		console.log(cart);
	}

	return (
		<ProductContext.Provider
			value={{
				productsList,
				setFavorite: handleFavorite,
				updateCart: handleAddToCart,
				cart,
				numCart,
				increaseCartItem: handleCartItemIncrement,
				decreaseCartItem: handleCartItemDecrement,
				deleteItem: handleDeleteItem,
				totalPrice,
				clearCart: handleRemoveCart,
			}}>
			{children}
		</ProductContext.Provider>
	);
}

function useProducts() {
	const context = useContext(ProductContext);

	if (context === undefined)
		throw new Error("Product Context was used out of scope");
	return context;
}

export { ProductProvider, useProducts };
