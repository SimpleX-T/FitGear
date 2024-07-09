import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div>
			<h1 className='text-center text-secondary-100'>
				404 Page Not Found :(
			</h1>
			<Link to='/'>Go Back Home</Link>
		</div>
	);
}
export default ErrorPage;
