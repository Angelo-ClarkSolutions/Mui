import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const MUIChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip label="Chip" />
      <Chip label="Primary" color="primary" />
      <Chip label="Small" size="small" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Avatar" avatar={<Avatar>V</Avatar>} />
      <Chip label="Avatar" icon={<Face />} />
      <Chip label="Click" color="success" onClick={() => alert("Chip clicked")} />
      <Chip label="Delete" color="error" onClick={() => alert("Chip clicked")} onDelete={() => alert("delete")} />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MUIChip;
