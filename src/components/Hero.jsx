import React from "react";
import Typed from "react-typed";

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="text-[#00df9a] font-bold p-2">Empowering Health, One Drop at a Time</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					Injecting Precision, Inspiring Care.
				</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
						<Typed
							className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
							strings={["Precision", "Versatility", "Sterility"]}
							typeSpeed={120}
							backSpeed={140}
						/>
					</p>
				</div>
				<p className="md:text-2xl text-xl font-bold text-gray-400 ">
					Setting the Standard in Precision: Crafting Quality Syringes for Health and Care.
				</p>
				<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
					Launching Soon! 🚀
				</button>
			</div>
		</div>
	);
};

export default Hero;
