import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField: React.FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Stack spacing={4} marginTop={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="FormInput" required value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? "Required" : "Do not share your password with anyone"} />
        <TextField label="Password" type="password" disabled helperText="Do not share your password with anyone" />
        <TextField
          label="Read only"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Amount" slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment> } }}></TextField>
        <TextField label="Weight" slotProps={{ input: { endAdornment: <InputAdornment position="end">kg</InputAdornment> } }}></TextField>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
