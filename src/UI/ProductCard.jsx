import { FaRegHeart, FaHeart, FaRegTrashCan } from "react-icons/fa6";
import { formatCurrency } from "../utils/helpers";
import { useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import ModifyCart from "./ModifyCart";

function ProductCard({
	backgroundColor = "#80808010",
	imageUrl,
	title,
	price,
	id,
}) {
	const [isFavorite, setIsFavorite] = useState(false);
	const { setFavorite, updateCart } = useProducts();
	const { cart, increaseCartItem, decreaseCartItem, deleteItem } =
		useProducts();

	function handleFavorite(id) {
		setIsFavorite((favorite) => !favorite);
		setFavorite(id);
	}

	const quantity = cart.find((item) => item.id === id)?.quantity || 0;

	return (
		<div
			className='relative p-4 h-full text-center'
			style={{ backgroundColor }}>
			<span
				onClick={() => handleFavorite(id)}
				className='absolute right-4 top-4 cursor-pointer'>
				{isFavorite ? <FaHeart color='#01204E' /> : <FaRegHeart />}
			</span>
			<img src={imageUrl} alt={title} className='mt-10 mb-4' />
			<h3 className='font-bold text-xl text-black capitalize mb-2'>
				{title}
			</h3>
			<p className='font-semibold text-lg mb-4'>
				{formatCurrency(price)}
			</p>
			{cart.find((item) => item.id === id) ? (
				<div className='flex items-center w-full justify-evenly'>
					<ModifyCart
						increment={() => increaseCartItem(id)}
						decrement={() => decreaseCartItem(id)}
						product={{ title, price, id, quantity }}
					/>
					<button
						className='flex items-center text-sm gap-2 hover:text-secondary-100'
						onClick={() => deleteItem(id)}>
						<FaRegTrashCan />
						<span>Remove Item</span>
					</button>
				</div>
			) : (
				<button
					onClick={() => updateCart(id)}
					className='bg-none px-4 py-2 border-2 border-solid border-secondary-100 text-center transition-colors duration-200 hover:text-white text-secondary-100 font-semibold text-xl capitalize hover:bg-secondary-100'>
					add to cart
				</button>
			)}
		</div>
	);
}
export default ProductCard;
