import "./App.css";
import SideMenu from "../Components/SideMenu";
import { makeStyles } from "@material-ui/core";
import Header from "../Components/Header";

const useStyles = makeStyles({
	appMain: {
		paddingLeft: "320px",
		width: "100%",
	},
});

function App() {
	const classes = useStyles();
	return (
		<div>
			<SideMenu />
			<div className={classes.appMain}>
				<Header />
			</div>
		</div>
	);
}

export default App;
