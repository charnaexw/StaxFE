/** @format */
import { useHistory } from "react-router-dom";
import NewTripForm from "./NewTripForm";

function NewTripPage() {
    


	function addTripHandler(tripData) {
		fetch(
			//postmanURL that you created when setting the code
			{
				method: "POST",
				body: JSON.stringify(tripData),
				headers: {
					"Content-Type": "application/json",
				}
			}
		);
        
	}

	return (
		<section>
			<h1> Book A Trip</h1>
			<NewTripForm />
		</section>
	);
}

export default NewTripPage;
