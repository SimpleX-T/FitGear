import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useProducts } from "../contexts/ProductContext";
import { formatCurrency } from "../utils/helpers";
import { Link } from "react-router-dom";

const FormSection = ({ title, children, onChangeClick }) => (
	<div className='bg-secondary-300 border border-gray-200  mb-4 p-4 shadow-md text-secondary-100'>
		<div className='flex justify-between items-center mb-4'>
			<h2 className='text-lg font-semibold '>{title}</h2>
			<button
				type='button'
				className='text-secondary-100 text-sm hover:font-semibold flex items-center gap-2'
				onClick={onChangeClick}>
				CHANGE
				<FaAngleRight />
			</button>
		</div>
		<div>{children}</div>
	</div>
);

const InputField = ({ type, placeholder, value, onChange }) => (
	<input
		type={type}
		placeholder={placeholder}
		value={value}
		onChange={(e) => onChange(e.target.value)}
		className='w-full p-2 mb-2 border border-gray-300 rounded-md bg-[#ffffff60] backdrop-blur-sm focus:border focus:border-solid focus:border-secondary-100 focus:outline-none'
	/>
);

const SelectField = ({ placeholder, value, onChange, options }) => (
	<select
		value={value}
		onChange={(e) => onChange(e.target.value)}
		className='w-full p-2 mb-2 border border-gray-300 rounded-md bg-[#ffffff60] backdrop-blur-sm'>
		<option value=''>{placeholder}</option>
		{options.map((option) => (
			<option key={option.value} value={option.value}>
				{option.label}
			</option>
		))}
	</select>
);

const SummaryItem = ({ label, value }) => (
	<div className='flex justify-between mb-2'>
		<span>{label}</span>
		<span>{value}</span>
	</div>
);

const ProductItem = ({ name, imageUrl }) => (
	<div className='flex items-center mb-2'>
		<img src={imageUrl} alt={name} className='w-16 mr-6' />
		<span className='capitalize font-semibold'>{name}</span>
	</div>
);

const CheckoutForm = () => {
	const [formData, setFormData] = useState({
		address: "",
		phone: "",
		deliveryOption: "",
		paymentMethod: "",
	});

	const deliveryFee = formData.deliveryOption === "doorstep" ? 600 : 0;

	const updateFormData = (key, value) => {
		setFormData((prevData) => ({ ...prevData, [key]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted", formData);
	};

	const { cart, totalPrice } = useProducts();

	return (
		<div className='w-full bg-primary p-12'>
			<div className='w-5/6 mx-auto'>
				<form onSubmit={handleSubmit}>
					<FormSection
						title='Customer Address'
						onChangeClick={() => console.log("Change address")}>
						<InputField
							type='text'
							placeholder='Address'
							value={formData.address}
							onChange={(value) =>
								updateFormData("address", value)
							}
						/>
						<InputField
							type='tel'
							placeholder='Phone number'
							value={formData.phone}
							onChange={(value) => updateFormData("phone", value)}
						/>
					</FormSection>

					<FormSection
						title='Delivery Option'
						onChangeClick={() => console.log("Change delivery")}>
						<SelectField
							placeholder='Select delivery option'
							value={formData.deliveryOption}
							onChange={(value) =>
								updateFormData("deliveryOption", value)
							}
							options={[
								{
									value: "doorstep",
									label: "Door Step Delivery From ₦600",
								},
							]}
						/>
						<p className='text-sm text-gray-600'>
							Delivery between 10th July and 12th July
						</p>
					</FormSection>

					<FormSection
						title='Payment Method'
						onChangeClick={() => console.log("Change payment")}>
						<SelectField
							placeholder='Select payment method'
							value={formData.paymentMethod}
							onChange={(value) =>
								updateFormData("paymentMethod", value)
							}
							options={[
								{ value: "card", label: "Pay with Cards" },
								{ value: "transfer", label: "Bank Transfer" },
								{ value: "ussd", label: "USSD" },
							]}
						/>
						<p className='text-sm text-gray-600'>
							You will be redirected to our secure checkout page
						</p>
					</FormSection>

					<FormSection title='Order Summary'>
						<SummaryItem
							label={`Items total (${cart.length})`}
							value={`${formatCurrency(totalPrice)}`}
						/>
						{cart.map((item, index) => (
							<ProductItem
								name={item.title}
								imageUrl={item.imageUrl}
								key={index}
							/>
						))}

						<SummaryItem
							label='Delivery fees'
							value={formatCurrency(deliveryFee)}
						/>
						<div className='flex justify-between font-bold'>
							<span>Total</span>
							<span>
								{formatCurrency(totalPrice + deliveryFee)}
							</span>
						</div>
					</FormSection>

					<Link
						to='/summary'
						type='submit'
						className='w-full py-3 bg-blue-500 text-white text-center rounded-md font-semibold hover:bg-blue-600 transition-colors block'>
						CONFIRM ORDER
					</Link>
				</form>

				<Link
					to='/'
					className='mt-4 block text-blue-500 hover:text-blue-600'>
					Go back & continue shopping
				</Link>
			</div>
		</div>
	);
};

export default CheckoutForm;
