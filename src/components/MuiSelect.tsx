import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value == "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px" paddingTop={3}>
      <TextField
        label="Select Countries"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        slotProps={{ select: { multiple: true } }}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="BR">Brasil</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
