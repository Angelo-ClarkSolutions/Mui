import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useState } from "react";

const MUIDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog aria-labelledby="dialog-title" aria-describedby="dialog-description" open={open} onClose={() => setOpen(false)}>
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">Are you sure you want to submit the test? You will not be able to edit after submitting</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setOpen(false)} variant="contained">
            Cancel
          </Button>
          <Button autoFocus onClick={() => setOpen(false)} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MUIDialog;
