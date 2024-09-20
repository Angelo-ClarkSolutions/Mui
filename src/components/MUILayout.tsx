import React from "react";
import { Box, Stack, Divider, Grid2, Paper } from "@mui/material";

const MUILayout: React.FC = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
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
      <Grid2 container my={4}>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default MUILayout;
