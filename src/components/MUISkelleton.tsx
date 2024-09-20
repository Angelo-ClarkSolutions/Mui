import { Skeleton, Stack } from "@mui/material";
import React from "react";

export const MUISkelleton = () => {
  return (
    <Stack spacing={1} width={"250px"}>
      <Skeleton variant="rounded" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={250} height={125} />
      <Skeleton variant="rectangular" width={250} height={125} animation="wave" />
      <Skeleton variant="rectangular" width={250} height={125} animation={false} />
    </Stack>
  );
};
