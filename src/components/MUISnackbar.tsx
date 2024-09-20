import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MUISnackbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>submit</Button>
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Deu certo
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MUISnackbar;
