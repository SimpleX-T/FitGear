function SuccessPage() {
	return (
		<div className='w-full bg-primary flex items-center justify-center h-screen'>
			<div className='w-1/2 mx-auto flex flex-col items-center'>
				<img src='ThankYou.png' alt='thank you' className='w-24' />
				<p className='text-center'>
					Congratulations! Your order has been successfully placed. A
					confirmation email has just been sent to you. We will notify
					you once your order has been shipped.
				</p>
			</div>
		</div>
	);
}
export default SuccessPage;
