// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
	const data = useLoaderData();
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch("https://api.github.com/users/ssekharpatra")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);

	return (
		<div className="text-center p-4">
			Github followers: {data.followers}
			<img
				src={data.avatar_url}
				alt="github profile picture"
				width={300}
				height={300}
			/>
		</div>
	);
};

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/ssekharpatra");
	return response.json();
};
