import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles({
  container:{
    width:"100vw",
    height:"100vh",
    display:"flex",
    alignItems:"flex-start"
    
  },
  mybox: {
    width: 300,
    backgroundColor: "red",
    color: "white",
    paddingTop: 50,
    borderRadius:4,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.mybox}>
        <Typography variant="h4">Heading 1</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
          corrupti.
        </Typography>
      </Box>
      <Box className={classes.mybox}>
        <Typography variant="h4">Heading 2</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
          corrupti.
        </Typography>
      </Box>
      <Box className={classes.mybox}>
        <Typography variant="h4">Heading 3</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
          corrupti.
        </Typography>
      </Box>
    </Box>
  );
}
