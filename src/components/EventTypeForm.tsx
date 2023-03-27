import { ChangeEvent, FormEvent } from "react";
import { Grid, TextField, Button, FormControl } from "@mui/material";

interface EventTypeFormProps {
  eventTypeInput: string;
  eventTypeDescription: string;
  eventTypeSchema: string;
  eventTypeFeatureFlag: string;
  onEventTypeInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEventTypeDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEventTypeSchemaChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEventTypeFeatureFlagChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCreateEventType: () => void;
}

function EventTypeForm(props: EventTypeFormProps) {
  const {
    eventTypeInput,
    eventTypeDescription,
    eventTypeSchema,
    eventTypeFeatureFlag,
    onEventTypeInputChange,
    onEventTypeDescriptionChange,
    onEventTypeSchemaChange,
    onEventTypeFeatureFlagChange,
    onCreateEventType,
  } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateEventType();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Event Type"
              value={eventTypeInput}
              onChange={onEventTypeInputChange}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Event Description"
              value={eventTypeDescription}
              onChange={onEventTypeDescriptionChange}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Schema"
              value={eventTypeSchema}
              onChange={onEventTypeSchemaChange}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Feature Flag"
              value={eventTypeFeatureFlag}
              onChange={onEventTypeFeatureFlagChange}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Event Type
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EventTypeForm;
