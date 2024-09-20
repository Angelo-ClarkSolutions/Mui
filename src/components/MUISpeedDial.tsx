import { Edit, FileCopyOutlined, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const MUISpeedDial = () => {
  return (
    <SpeedDial ariaLabel="Navigation speed dial" sx={{ position: "absolute", bottom: 16, right: 16 }} icon={<SpeedDialIcon openIcon={<Edit />} />}>
      <SpeedDialAction icon={<FileCopyOutlined />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MUISpeedDial;
