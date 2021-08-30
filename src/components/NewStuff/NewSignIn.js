import Card from "../ui/Card";
import classes from "./NewSignIn.module.css";

function NewSignIn(){
    return(
    <Card>
			<form className={classes.form}>
				<div className={classes.control}>
					<label htmlFor="username">UserName</label>
					<input type="text" required id="title"></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="email">Email</label>
					<input type="url" required id="image"></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Password</label>
					<input type="text" required id="address"></input>
				</div>
                <div className={classes.actions}>
                    <button> Submit</button>
                </div>

			</form>
		</Card>
        );
    }

export default NewSignIn;