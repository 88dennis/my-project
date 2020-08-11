import React, {useState, useEffect} from 'react'
import axios from 'axios';
const App = function () {
	const [users, setUsers] = useState(null);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => {
        console.log(users)
        setUsers(users)})
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		if (name === "") {
			alert("Please fill the username field");
			return;
		}
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		axios
			.post("/api/users", {
				name: name,
				email: email,
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not creat account. Please try again");
			});
	}
	return (
		<>
			<h1>My Project</h1>
      {console.log(users)}
      {/* {users === null ? ("hello") : users.map((user, index) => <h1> user.name</h1>)} */}

			{users === null ? (
				<p>Loading...</p>
			) : users.data.length === 0 ? (
				<p>No user available</p>
			) : (
				<>
					<h2>Available Users</h2>
					<ol>
            {/* {users.data.length} */}
            {/* {users[0].name} */}
						{users.data.map((user, index) => (
							<li key={index}>
								Name: {user.name} - Email: {user.email}
							</li>
						))}
					</ol>
				</>
			)}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Enter your username"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email address"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App