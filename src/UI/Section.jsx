function Section({ children, title }) {
	return (
		<section className='w-full bg-primary p-12 pt-16'>
			{title && (
				<h2 className='text-center text-secondary-100 text-2xl mb-6 capitalize font-bold'>
					{title}
				</h2>
			)}
			{children}
		</section>
	);
}
export default Section;
