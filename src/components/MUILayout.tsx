import React from "react";
import { Box, Stack, Divider } from "@mui/material";

const MUILayout: React.FC = () => {
  return (
    <Stack sx={{ border: "1px solid black" }} direction="row-reverse" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MUILayout2
      </Box>
      <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}></Box>
    </Stack>
  );
};

export default MUILayout;
