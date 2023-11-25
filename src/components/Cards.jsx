import React from "react";
import Single from "../assets/bale.jpg";
import Double from "../assets/nolan.jpg";
import Triple from "../assets/zimmer.jpg";

const Cards = () => {
	return (
		<div className="w-full py-[10rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-50 rounded-md mx-auto mt-[-3rem] bg-white"
						src={Single}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Bruce Wayne</h2>
					<p className="text-center font-medium">
						Remine India tackles the E-waste very skillfully and efficiently.
						After upgrading my BatMobile, there was a lot of E-Waste that can be
						recycled. Folks over at Remine India were more than willing to help
						me out. Recommended 10/10.
					</p>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Get in Touch
					</button>
				</div>
				<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-50 rounded-md mx-auto mt-[-3rem] bg-transparent"
						src={Double}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">
						Christopher Nolan
					</h2>
					<p className="text-center font-medium">
						During the shooting of Tenet, we blew up a plane and generated a
						lotta of waste and e-waste. Thankfully, Remine India came in clutch
						and took care of everything. They are a crew of focused yet funny
						people. Looking forward to creating another mess so I can meet these
						guys. <br />
						PS - Will Blow up something again, but it's gonna be something on a
						bigger scale ;)
					</p>
					<button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Get in Touch
					</button>
				</div>
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-50 rounded-md mx-auto mt-[-3rem] bg-white"
						src={Triple}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Hans Zimmer</h2>
					<p className="text-center font-medium">
						Chris suggested me to try Remine India and I've to say, never have I
						ever felt so lightweight, it's like I'll make you fly with my music.
						Thanks to Chris and folks over at Remine India, I can create music
						peacefully. Would highly Recommend.
					</p>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Get in Touch
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
