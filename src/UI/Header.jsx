import { FaRegCircleQuestion, FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";

function Header() {
	const { numCart } = useProducts();

	return (
		<header className='w-full  h-[60px] z-10 shadow-md sticky top-0 bg-[#ffffff50] backdrop-blur-sm'>
			<div className='w-5/6 mx-auto flex items-center h-full'>
				<SearchBox />
				<Link to='/' className='mr-auto '>
					<Logo />
				</Link>
				<div className='flex items-center gap-6 mr-auto'>
					<button className='bg-none border-none text-secondary-100 font-normal flex gap-2 hover:font-semibold hover:underline duration-150 transition-all'>
						<span className='text-2xl'>
							<FaRegCircleQuestion />
						</span>
						<Link to='/contact'>Help</Link>
					</button>
					<Link
						to='/cart'
						className='bg-none border-none text-secondary-100 font-normal flex gap-2 hover:font-semibold hover:underline duration-150 transition-all'>
						<span className='text-2xl relative'>
							{numCart > 0 && (
								<span className='w-[10px] h-[10px] p-[6px] bg-red-600 rounded-full absolute top-0 right-0 flex items-center justify-center text-white text-[8px]'>
									{numCart}
								</span>
							)}
							<IoCartOutline />
						</span>
						<p>Cart</p>
					</Link>
					<button className='bg-none border-none text-secondary-100 font-normal flex gap-2 hover:font-semibold hover:underline duration-150 transition-all'>
						<span className='text-2xl'>
							<FaRegCircleUser />
						</span>
						<Link to='/login'>Login</Link>
					</button>
				</div>
			</div>
		</header>
	);
}
export default Header;
