import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MUILink = () => {
  return (
    <Stack spacing={2} direction="row" margin={4}>
      <Link href="#" variant="body2">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="hover">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MUILink;
