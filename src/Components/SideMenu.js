import { makeStyles, withStyles } from "@material-ui/core";
import React from "react";

//-----useStyles-----

// const style = {
// 	sideMenu: {
// 		display: "flex",
// 		flesDirection: "column",
// 		posistion: "absolute",
// 		left: "0px",
// 		width: "320px",
// 		height: "100px",
// 		backgroundColor: "#253053",
// 	},
// };

// const SideMenu = (props) => {
// 	const { classes } = props;

// 	return <div className={classes.sideMenu}>Testing</div>;
// };

// export default withStyles(style)(SideMenu);

//-----makeStyles-----

const useStyles = makeStyles({
	sideMenu: {
		display: "flex",
		flexDirection: "row",
		position: "absolute",
		left: "0px",
		width: "320px",
		height: "100%",
		backgroundColor: "#253053",
	},
});

export default function SideMenu() {
	const classes = useStyles();

	return <div className={classes.sideMenu}>Test</div>;
}
