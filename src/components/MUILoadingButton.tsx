import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React from "react";

export const MUILoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="contained" loadingPosition="start" startIcon={<Save></Save>}>
        Save
      </LoadingButton>
      <LoadingButton variant="outlined" loadingPosition="start" startIcon={<Save></Save>}>
        Save
      </LoadingButton>
    </Stack>
  );
};
