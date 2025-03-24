import React from "react";
import { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SimpleCounter";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(prevCount => (typeof prevCount === "number" ? prevCount + 1 : 0));
		}, 1000);

		return () => clearInterval(interval);
	}, []);
return (
		<div className="text-center">
			<SimpleCounter
				digitFour={isNaN(count) ? 0 : Math.floor(count / 1000)}
				digitThree={isNaN(count) ? 0 : Math.floor(count / 100) % 10}
				digitTwo={isNaN(count) ? 0 : Math.floor(count / 10) % 10}
				digitOne={isNaN(count) ? 0 : count % 10}
			/>
		</div>
	);
};

export default Home;