import { useState } from "react";
function SearchBox() {
	const [query, setQuery] = useState("");

	function handleChange(e) {
		setQuery(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='w-64 ml-4 flex items-center justify-center mr-auto'>
			<input
				type='search'
				value={query}
				placeholder='Search for Products'
				className='outline-none border border-secondary-100 p-2 w-5/6 focus:w-full transition-all duration-150 rounded-md origin-left bg-transparent'
				onChange={(e) => handleChange(e)}
			/>
		</form>
	);
}
export default SearchBox;
