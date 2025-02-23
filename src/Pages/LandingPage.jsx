import { Link } from "react-router-dom";
import ProductCard from "../UI/ProductCard";
import Section from "../UI/Section";
import { useProducts } from "../contexts/ProductContext";

function LandingPage() {
	const { productsList } = useProducts();

	return (
		<div className='w-full '>
			<main className='flex items-center justify-center h-screen bg-hero-bg bg-cover bg-repeat-none bg-fixed'>
				<div className='text-center w-1/2'>
					<h1 className='text-white font-bold text-4xl md:text-6xl leading-tight mb-4'>
						Your one-stop shop for all things fitness!
					</h1>
					<button className='bg-none px-4 py-2 border-2 border-solid text-center transition-colors duration-200 hover:text-secondary-100 text-white font-semibold text-xl hover:backdrop-blur-sm hover:bg-[#ffffff70]'>
						Shop now
					</button>
				</div>
			</main>
			<Section title='best selling'>
				<div className='flex w-5/6 mx-auto mb-6 '>
					<div
						className='flex items-center justify-between w-full '
						id='bs1'>
						{productsList.map(
							({ id, title, unitPrice, imageUrl }) => (
								<ProductCard
									id={id}
									key={id}
									title={title}
									price={unitPrice}
									imageUrl={imageUrl}
								/>
							)
						)}
					</div>
					{/* <div
						className='flex items-center justify-between w-full'
						id='bs1'>
						{products.map(({ id, title, price, imageUrl }) => (
							<ProductCard
							id={id}
								key={id}
								title={title}
								price={price}
								imageUrl={imageUrl}
							/>
						))}
					</div> */}
				</div>
				<nav
					role='carousel-nav'
					className='flex w-fit mx-auto gap-2 carousel-nav'>
					<Link
						to='/#bs1'
						className='rounded-full w-4 h-4 bg-secondary-100 flex items-center justify-center border border-solid border-secondary-100 p-1 transition-color duration-200'></Link>
					<Link
						to='/#bs2'
						className='rounded-full w-4 h-4 hover:bg-secondary-100 flex items-center justify-center border border-solid border-secondary-100 p-1 transition-color duration-200'></Link>
				</nav>
			</Section>
			<Section title='all products'>
				<div className='flex items-center justify-center gap-2 w-5/6 mx-auto my-8'>
					<h3 className='text-xl text-secondary-100 font-semibold capitalize px-4 py-2 cursor-pointer border-2 border-transparent transition-colors duration-200 border-solid hover:border-secondary-100'>
						all categories
					</h3>
					<h3 className='text-xl text-secondary-100 font-semibold capitalize px-4 py-2 cursor-pointer border-2 border-transparent transition-colors duration-200 border-solid hover:border-secondary-100'>
						strength training
					</h3>
					<h3 className='text-xl text-secondary-100 font-semibold capitalize px-4 py-2 cursor-pointer border-2 border-transparent transition-colors duration-200 border-solid hover:border-secondary-100'>
						cardio equipment
					</h3>
					<h3 className='text-xl text-secondary-100 font-semibold capitalize px-4 py-2 cursor-pointer border-2 border-transparent transition-colors duration-200 border-solid hover:border-secondary-100'>
						fitness apparel
					</h3>
				</div>
				<div className='flex w-5/6 mx-auto mb-6 '>
					<div
						className='flex items-center justify-between w-full '
						id='bs1'>
						{productsList.map(
							({ id, title, unitPrice, imageUrl }) => (
								<ProductCard
									id={id}
									key={id}
									title={title}
									price={unitPrice}
									imageUrl={imageUrl}
								/>
							)
						)}
					</div>
				</div>
				<div className='flex w-5/6 mx-auto mb-6 '>
					<div
						className='flex items-center flex-row-reverse justify-between w-full '
						id='bs1'>
						{productsList.map(
							({ id, title, unitPrice, imageUrl, quantity }) => (
								<ProductCard
									id={id}
									key={id}
									title={title}
									price={unitPrice}
									imageUrl={imageUrl}
								/>
							)
						)}
					</div>
				</div>
				<nav
					role='carousel-nav'
					className='flex w-fit mx-auto gap-2 carousel-nav'>
					<Link
						to='/#bs1'
						className='rounded-full w-4 h-4 bg-secondary-100 flex items-center justify-center border border-solid border-secondary-100 p-1 transition-color duration-200'></Link>
					<Link
						to='/#bs2'
						className='rounded-full w-4 h-4 hover:bg-secondary-100 flex items-center justify-center border border-solid border-secondary-100 p-1 transition-color duration-200'></Link>
				</nav>
			</Section>
		</div>
	);
}
export default LandingPage;
