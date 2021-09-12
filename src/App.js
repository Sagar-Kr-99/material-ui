import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles({
  mybox: {
    width: 300,
    backgroundColor: "white",
    color:"red",
    paddingTop:50
  },
});

export default function App() {
  const classes = useStyles();

  return (
    
    <Box>
    <Box className={classes.mybox}>
      
        <Typography variant="h3" color="secondary">
          Hello World!
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, et
          facilis rem quidem nisi beatae delectus est dolore corrupti ab
          voluptatibus cupiditate consequuntur earum odit quisquam perferendis
          sint modi maxime id atque pariatur quo.{" "}
        </Typography>
     
    </Box>
    </Box>
  );
}
