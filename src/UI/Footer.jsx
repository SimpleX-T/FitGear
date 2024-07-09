import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className='w-full py-12 bg-secondary-100'>
			<h2 className='text-lg text-primary capitalize text-center mb-2'>
				connect with us
			</h2>
			<div className='flex items-center gap-4 w-fit mx-auto'>
				<Link className=''>
					<FaFacebook className='text-primary text-xl' />
				</Link>
				<Link className=''>
					<FaWhatsapp className='text-primary text-xl' />
				</Link>
				<Link className=''>
					<FaInstagram className='text-primary text-xl' />
				</Link>
			</div>
		</footer>
	);
}
export default Footer;
