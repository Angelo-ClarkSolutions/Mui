import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const MUICard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component="img" height="140" image="https://source.unsplash.com/random" alt="unsplash image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography gutterBottom variant="body2" component="div" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ea pariatur quisquam deserunt praesentium eius corrupti nulla, fugiat dignissimos, possimus, eos placeat aperiam quasi
            qui? Illo ab nihil aut minus!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MUICard;
