import React from "react";
import { Typography, Container, Button, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="sm">
      <Paper square elevation={4} varinat='outlined'>
        <Box p={2}>
          <Typography variant="h3"> Read Docs</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum
            eligendi natus veritatis! Inventore perferendis quaerat ratione
            perspiciatis laudantium recusandae veritatis quod? Molestias iure
            nam exercitationem delectus, quasi perferendis sed. Nam suscipit
            blanditiis vel?
          </Typography>
          <Button variant="contained" color="primary">
        Learn More
      </Button>
        </Box>
      </Paper>
     
    </Container>
  );
}

export default App;
