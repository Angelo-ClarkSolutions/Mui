import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

const MUIAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Deu Ruim</Alert>
      <Alert severity="warning">Toma cuidado hein</Alert>
      <Alert severity="info">Information</Alert>
      <Alert severity="success">Ai sim!</Alert>

      <Alert variant="outlined" severity="error">
        Deu Ruim
      </Alert>
      <Alert variant="outlined" severity="warning">
        Toma cuidado hein
      </Alert>
      <Alert variant="outlined" severity="info">
        Information
      </Alert>
      <Alert variant="outlined" severity="success">
        Ai sim!
      </Alert>

      <Alert variant="filled" severity="error" onClose={() => {}}>
        <AlertTitle>Error</AlertTitle>
        Deu Ruim
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Toma cuidado hein
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        Information
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check />}
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        Ai sim!
      </Alert>
    </Stack>
  );
};

export default MUIAlert;
