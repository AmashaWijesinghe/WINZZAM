// import "../style.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import styled from "styled-components";

const Cards = styled.div`
	background: linear-gradient(45deg, #26baee, #5ddfff);
	height: 200px;
`;
const Cardsh = styled.div`
	color: #fff;
`;

const ClientBase = (props) => {
	const StyleDiv = styled.div`
		align-items: flex-start;
		display: flex;
		height: 100px;
		width: 200px;
		border-radius: 15px;
		background-color: #33bdfe;
		font-family: "Sans Serif";
		margin-right: 1%;
		margin-left: 2%;
		color: green;
		padding: 1%;
	`;

	const [items, setItems] = useState();
	const userRole = String(props.role);
	console.log(userRole);
	const token = Cookies.get("token");
	console.log(token);
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: "Bearer " + token,
			},
		};
		async function fetchData() {
			const response = await fetch(
				"http://localhost:8800/api/staff/clientInfo?userRole=" +
					userRole.substring(0, userRole.length - 1),
				options
				// remove the last character from the string
			);

			const json = await response.json();
			console.log(json);
			setItems(json);
		}
		fetchData();
	}, []);
	return (
		<Cards className="activeUserCard ongoing card align-items-center justify-content-center m-4 px-5 rounded-4 border-0 text-light h-100">
			<Cardsh>
				<h2 className="text-light fw-light">
					{items && "0" + items.count}
				</h2>
				<h4 className="text-light fw-light">{props.role}</h4>
			</Cardsh>
		</Cards>
	);
};

export default ClientBase;
