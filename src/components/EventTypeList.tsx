import { List, ListItem, ListItemText, Box, Button } from '@mui/material';
import { EventTypeOut } from 'svix';

interface EventTypeListProps {
  eventTypes: EventTypeOut[];
  handleEdit: (eventType: EventTypeOut) => void;
  handleDelete: (name: string) => void;
}

function EventTypeList(props: EventTypeListProps) {
  const { eventTypes, handleEdit, handleDelete } = props;

  return (
    <List>
      {eventTypes.map((eventType) => (
        <ListItem key={eventType.name}>
          <ListItemText primary={eventType.name} />
          <Box ml={2} display="inline">
            <Button
              onClick={() => handleEdit(eventType)}
              variant="contained"
            >
              Edit
            </Button>
          </Box>
          <Box ml={2} display="inline">
            <Button
              onClick={() => handleDelete(eventType.name)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default EventTypeList;
