import * as React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

function ForgotPassword({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
        sx: {
          backgroundImage: "none",
          bgcolor: "background.paper",
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
          boxShadow: "none",
          width: "100%",
          maxWidth: 520,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 800 }}>Reset password</DialogTitle>

      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <DialogContentText sx={{ color: "text.secondary" }}>
          Enter your account&apos;s email address, and we&apos;ll send you a
          link to reset your password.
        </DialogContentText>

        <TextField
          autoFocus
          required
          id="email"
          name="email"
          type="email"
          label="Email address"
          placeholder="your@email.com"
          fullWidth
        />
      </DialogContent>

      <DialogActions sx={{ pb: 3, px: 3, gap: 1 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{ fontWeight: 700 }}
        >
          Cancel
        </Button>
        <Button variant="contained" type="submit" sx={{ fontWeight: 700 }}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
