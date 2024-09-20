import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MUIAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Jucinda" />
          <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adalberto" />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar variant="rounded" sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar variant="square" sx={{ bgcolor: "success.light" }}>
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MUIAvatar;
