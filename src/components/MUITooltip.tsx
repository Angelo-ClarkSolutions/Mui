import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const MUITooltip = () => {
  return (
    <Tooltip title="delete" placement="left" arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default MUITooltip;
