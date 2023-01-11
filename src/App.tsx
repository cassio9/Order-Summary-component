import "./App.css";
import Hero from "./assets/illustration-hero.svg";
import MusicIcon from "./assets/icon-music.svg";

function App() {
	return (
		<div className="bg-VeryPaleBlue min-h-screen max-h-fit p-10  font-RedHat flex justify-center items-center">
			<main className="max-w-[23rem] bg-white text-center">
				<img className="rounded-t-xl" src={Hero} alt="cartoon dancing / enjoying music" />
				<div className="p-6">
					<h1 className="font-[900] text-2xl mb-6">Order Summary</h1>
					<p className="text-UnsaturatedBlue">
						You can now listen to millions of songs, audio books, and podcasts on any device
						anywhere you like!
					</p>
					<div className="flex justify-around px-2 my-4 py-4 bg-VeryPaleBlue rounded-xl items-center">
						<img src={MusicIcon} alt="Music icon" />
						<div>
							<p className="text-DarkBlue font-[900]">Annual Plan</p>
							<p className="text-UnsaturatedBlue text-sm">$59.99/year</p>
						</div>
						<a href="#" className="underline cursor-pointer hover:no-underline text-blue-600">
							Change
						</a>
					</div>
					<button className="py-4 w-full bg-BrightBlue cursor-pointer text-white rounded-2xl ">
						Proceed to Payment
					</button>
					<button className="py-4 my-4 text-UnsaturatedBlue font-[900] cursor-pointer">
						Cancel Order
					</button>
				</div>
			</main>
		</div>
	);
}

export default App;
