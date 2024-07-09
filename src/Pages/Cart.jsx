import { Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import { FaArrowLeftLong, FaRegTrashCan } from "react-icons/fa6";
import { formatCurrency } from "../utils/helpers";
import ModifyCart from "../UI/ModifyCart";

function CartCard({ product }) {
	const { title, imageUrl, unitPrice, id } = product;
	const { increaseCartItem, decreaseCartItem, deleteItem } = useProducts();

	return (
		<div className='w-5/6 mx-auto shadow-sm h-36 px-4 flex items-center my-4'>
			<img src={imageUrl} alt={title} className='h-full mr-20' />
			<div className='w-1/2 mr-auto flex items-start mr-auto flex-col gap-4'>
				<h2 className='capitalize'>{title}</h2>
				<button
					className='flex items-center text-sm gap-2 hover:text-secondary-100'
					onClick={() => deleteItem(id)}>
					<FaRegTrashCan />
					<span>Remove Item</span>
				</button>
			</div>
			<div className=' mr-auto flex justify-center flex-col'>
				<h2>{formatCurrency(unitPrice)}</h2>
				<ModifyCart
					product={product}
					increment={() => increaseCartItem(id)}
					decrement={() => decreaseCartItem(id)}
				/>
			</div>
		</div>
	);
}

function Cart() {
	const { cart, numCart, totalPrice } = useProducts();

	return (
		<section className='w-full bg-primary py-12'>
			<div className='w-5/6 bg-secondary-300 mx-auto rounded-md shadow-md my-4'>
				<div className='border-b border-solid border-secondary-200 flex items-center justify-start p-6'>
					<h1 className='text-secondary-100 capitalize font-normal text-2xl'>
						cart({numCart})
					</h1>
				</div>
				<div className='w-full mx-auto py-4 overflow-auto'>
					{numCart > 0 ? (
						cart.map((product, index) => (
							<CartCard product={product} key={index} />
						))
					) : (
						<p className='text-center text-secondary-100 text-lg'>
							You do not have anything in your cart
						</p>
					)}
				</div>
				<Link
					to='/'
					className='underline text-md block p-4 text-left capitalize'>
					Go back and continue shopping
				</Link>
			</div>

			{numCart > 0 && (
				<div className='w-5/6 bg-secondary-300 mx-auto rounded-md shadow-md my-4'>
					<div className='border-b border-solid border-secondary-200 flex items-center justify-start p-6'>
						<h1 className='text-secondary-100 capitalize font-normal text-2xl'>
							Cart summary
						</h1>
					</div>
					<div className='p-6 text-secondary-100'>
						<div className='flex items-center'>
							<h3 className='font-semibold text-xl capitalize mr-auto'>
								subtotal
							</h3>
							<p className='font-semibold text-lg mr-4'>
								{formatCurrency(totalPrice)}
							</p>
						</div>
						<p className='capitalize mb-6'>
							delivery fee is not included yet
						</p>
						<Link
							to='/checkout'
							className='w-full block text-center mt-4 py-2 border-2 border-secondary-100 border-solid hover:bg-secondary-100 hover:text-white transition-colors duration-200 uppercase font-semibold'>
							check out {formatCurrency(totalPrice)}
						</Link>
					</div>
				</div>
			)}
		</section>
	);
}
export default Cart;
