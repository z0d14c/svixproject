import { ChangeEvent } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, TextField, Button } from '@mui/material';

interface EditEventTypeDialogProps {
  open: boolean;
  handleClose: () => void;
  editEventTypeInput: string;
  editEventTypeDescription: string;
  editEventTypeSchema: string;
  editEventTypeFeatureFlag: string;
  setEditEventTypeDescription: (value: string) => void;
  setEditEventTypeSchema: (value: string) => void;
  setEditEventTypeFeatureFlag: (value: string) => void;
  updateEventType: () => void;
}

function EditEventTypeDialog(props: EditEventTypeDialogProps) {
  const { open, handleClose, editEventTypeInput, editEventTypeDescription, editEventTypeSchema, editEventTypeFeatureFlag, setEditEventTypeDescription, setEditEventTypeSchema, setEditEventTypeFeatureFlag, updateEventType } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Event Type</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              label="Event Type"
              value={editEventTypeInput}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Event Description"
              value={editEventTypeDescription}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEventTypeDescription(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Schema"
              value={editEventTypeSchema}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEventTypeSchema(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Feature Flag"
              value={editEventTypeFeatureFlag}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEventTypeFeatureFlag(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={updateEventType} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditEventTypeDialog;
