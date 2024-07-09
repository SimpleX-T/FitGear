import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import { FaAngleRight } from "react-icons/fa6";
import { formatCurrency } from "../utils/helpers";

function Summary() {
	const navigate = useNavigate();
	const { cart, totalPrice, clearCart } = useProducts();
	const numCart = cart.length;

	return (
		<div className='w-full bg-primary p-12'>
			<div className='w-5/6 bg-secondary-300 mx-auto rounded-md shadow-md my-4'>
				<div className='border-b border-solid border-secondary-200 flex items-center justify-start p-6'>
					<h1 className='text-secondary-100 capitalize font-semibold text-2xl mr-auto'>
						Order Summary
					</h1>
					<button
						type='button'
						className='text-secondary-100 text-sm hover:font-semibold flex items-center gap-2'>
						CHANGE
						<FaAngleRight />
					</button>
				</div>

				<div className='flex items-center px-6 mt-4 pb-6'>
					<p className='mr-auto text-secondary-100 capitalize'>
						total to pay
					</p>
					<p className='font-semibold'>
						{formatCurrency(totalPrice)}
					</p>
				</div>
			</div>
			<div className='w-5/6 bg-secondary-300 mx-auto rounded-md shadow-md my-4 mt-10'>
				<div className='border-b border-solid border-secondary-200 flex items-center justify-start p-6'>
					<h1 className='text-secondary-100 capitalize font-semibold text-2xl mr-auto'>
						select payment method
					</h1>
				</div>

				<div className='px-6 mt-4'>
					<p className='mr-auto text-secondary-100 capitalize'>
						pay with usd or bank transfer
					</p>
				</div>
				<Link
					to='/checkout'
					className='text-xl block p-4 text-center font-semibold uppercase'>
					Go back and continue shopping
				</Link>
			</div>
			<div className='w-5/6 bg-secondary-300 mx-auto rounded-md shadow-md my-4 mt-10 p-4'>
				<Link
					to=''
					onClick={(e) => {
						e.preventDefault();
						clearCart();
						navigate("/success");
					}}
					className='block w-full border-2 border-solid border-secondary-100 text-xs uppercase py-2 text-center font-semibold'>
					pay now
				</Link>
			</div>
			<div className='w-5/6 mx-auto'>
				<p className='text-center text-[23px] my-3'>
					By tapping &quot;PAY NOW&quot; I accept the Payment Terms
					and Conditions, General Terms and Conditions and Privacy and
					Cookie Notice.
				</p>
				<p className='text-center text-[23px] m-6 mt-12'>
					NOTE: we will never ask you for your password, CVV or full
					card details over the phone or is email
				</p>
				<div className='flex items-center w-fit mx-auto'>
					<Link to=''>Need Help?</Link>
					<Link to='/contact'>Contact </Link>
				</div>
			</div>
			<Link
				to='/'
				className='block w-full text-lg uppercase py-2 text-center font-semibold'>
				back home
			</Link>
		</div>
	);
}
export default Summary;
