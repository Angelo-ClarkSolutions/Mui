import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MUIBadge = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary">
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MUIBadge;
