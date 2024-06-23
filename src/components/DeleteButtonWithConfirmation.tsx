import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FaTrash } from "react-icons/fa";

interface DeleteButtonWithConfirmationProps {
  onDelete: () => void;
  isLoading?: boolean;
}

const DeleteButtonWithConfirmation: React.FC<
  DeleteButtonWithConfirmationProps
> = ({ onDelete, isLoading = false }) => {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setConfirmDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setConfirmDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setConfirmDialogOpen(false);
  };

  return (
    <>
      <Button
        color="error"
        variant="outlined"
        size="small"
        startIcon={<FaTrash />}
        onClick={handleDeleteClick}
      >
        Delete
      </Button>
      <Dialog
        open={confirmDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="confirm-delete-dialog"
      >
        <DialogTitle id="confirm-delete-dialog">Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            disabled={isLoading}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButtonWithConfirmation;
