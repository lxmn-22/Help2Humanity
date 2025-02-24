import React from "react";

interface FormInputProps {
	label: string;
	placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeholder }) => (
	<div className="flex flex-col sm:flex-row items-center gap-6 w-full">
		<label className="w-1/2 flex items-center justify-evenly px-4 font-semibold text-center sm:text-left">
			{label}
		</label>
		<input
			className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
			type="text"
			placeholder={placeholder}
		/>
	</div>
);

const FindBlood: React.FC = () => {
	return (
		<div className="bg-white flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 mx-4 sm:mx-16 lg:mx-24 xl:mx-96 my-6 shadow-lg xl:mb-28">
			<div className="bg-[#A8174E] w-full h-24 flex items-center px-6 mb-6">
				<h1 className="text-xl sm:text-2xl text-white font-bold">
					Find Blood Donors
				</h1>
			</div>
			<form className="w-full flex flex-col items-center justify-between gap-8">
				<FormInput label="Blood Group" placeholder="A+" />
				<FormInput label="Select Country" placeholder="India" />
				<FormInput label="Select State" placeholder="Uttarakhand" />
				<FormInput label="Select District" placeholder="Nainital" />
				<FormInput label="Select City" placeholder="Haldwani" />
				<button
					type="submit"
					className="bg-[#A8174E] text-white text-lg font-bold py-2 w-full sm:w-auto sm:px-12 mt-4 hover:bg-[#8e143e] transition"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default FindBlood;
