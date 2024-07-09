function ModifyCart({ product, increment, decrement }) {
	const { quantity } = product;

	return (
		<div className='flex items-center justify-center gap-2'>
			<button
				className='rounded-full border-2 border-solid border-secondary-100 w-6 h-6 flex items-center justify-center'
				onClick={decrement}>
				-
			</button>
			<span>{quantity}</span>
			<button
				className='rounded-full border-2 border-solid border-secondary-100 w-6 h-6 flex items-center justify-center'
				onClick={increment}>
				+
			</button>
		</div>
	);
}
export default ModifyCart;
