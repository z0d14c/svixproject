import { useState, useEffect, useContext } from "react";
import { AppPortal } from "svix-react";
import { Container, Box } from "@mui/material";
import { EventTypeOut } from "svix/dist/openapi";

import { useAppPortalUrl } from "../utils/hooks";
import EventManagerHeader from "./EventManagerHeader";
import { AppContext } from "../utils/context";
import EventTypeForm from "./EventTypeForm";
import EventTypeList from "./EventTypeList";
import EditEventTypeDialog from "./EditEventTypeDialog";
import { SVIX_APP_PORTAL_URL } from "../utils/constants";
import EventTypeKeyWarning from "./EventTypeKeyWarning";

function EventTypeManager() {
  const [eventTypes, setEventTypes] = useState<EventTypeOut[]>([]);
  const [open, setOpen] = useState(false);
  const [eventTypeInput, setEventTypeInput] = useState<string>("");
  const [eventTypeDescription, setEventTypeDescription] = useState<string>("");
  const [eventTypeFF, setEventTypeFF] = useState<string>("");
  // TODO: add wizard to handle creating schema

  const [eventTypeSchema, setEventTypeSchema] = useState<string>("");

  /* edit state */
  const [editEventTypeInput, setEditEventTypeInput] = useState<string>("");
  const [editEventTypeDescription, setEditEventTypeDescription] =
    useState<string>("");
  const [editEventTypeSchema, setEditEventTypeSchema] = useState<string>("");
  const [editEventTypeFF, setEditEventTypeFF] = useState<string>("");

  // get svix app portal and svix client from context
  const { appPortalUrl } = useAppPortalUrl(SVIX_APP_PORTAL_URL);
  const { svix } = useContext(AppContext);

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const fetchEventTypes = async () => {
    try {
      const response = await svix.eventType.list();

      setEventTypes(response.data);
    } catch (err) {
      console.error("Error fetching event types:", err);
    }
  };

  const createEventType = async () => {
    try {
      await svix.eventType.create({
        name: eventTypeInput,
        description: eventTypeDescription,
        schemas:
          eventTypeSchema.length > 0 ? JSON.parse(eventTypeSchema) : undefined,
        featureFlag: eventTypeFF ? eventTypeFF : undefined,
      });

      fetchEventTypes();
      setEventTypeInput("");
      setEventTypeDescription("");
      setEventTypeSchema("");
      setEventTypeFF("");
    } catch (err) {
      console.error("Error creating event type:", err);
    }
  };

  const updateEventType = async () => {
    try {
      await svix.eventType.update(editEventTypeInput, {
        description: editEventTypeDescription,
        featureFlag: editEventTypeFF ? editEventTypeFF : undefined,
        schemas:
          editEventTypeSchema.length > 0
            ? JSON.parse(editEventTypeSchema)
            : undefined,
      });

      fetchEventTypes();
      handleClose();
    } catch (err) {
      console.error("Error updating event type:", err);
    }
  };
  const deleteEventType = async (eventTypeId: string) => {
    try {
      await svix.eventType.delete(eventTypeId);

      fetchEventTypes();
    } catch (err) {
      console.error("Error deleting event type:", err);
    }
  };

  const handleOpen = (eventType: EventTypeOut) => {
    setEditEventTypeInput(eventType.name);
    setEditEventTypeDescription(eventType.description);
    setEditEventTypeSchema(
      eventType.schemas ? JSON.stringify(eventType.schemas) : ""
    );
    setEditEventTypeFF(eventType.featureFlag ?? "");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <EventTypeKeyWarning />
      <EventManagerHeader text={"Event Type Manager"} />
      <EventTypeForm
        eventTypeInput={eventTypeInput}
        eventTypeDescription={eventTypeDescription}
        eventTypeSchema={eventTypeSchema}
        eventTypeFeatureFlag={eventTypeFF}
        onEventTypeInputChange={(e) => setEventTypeInput(e.target.value)}
        onEventTypeDescriptionChange={(e) =>
          setEventTypeDescription(e.target.value)
        }
        onEventTypeSchemaChange={(e) => setEventTypeSchema(e.target.value)}
        onEventTypeFeatureFlagChange={(e) => setEventTypeFF(e.target.value)}
        onCreateEventType={createEventType}
      />
      <Box mt={4}>
        <EventTypeList
          eventTypes={eventTypes}
          handleEdit={handleOpen}
          handleDelete={deleteEventType}
        />
        <EditEventTypeDialog
          open={open}
          handleClose={handleClose}
          editEventTypeInput={editEventTypeInput}
          editEventTypeDescription={editEventTypeDescription}
          editEventTypeSchema={editEventTypeSchema}
          editEventTypeFeatureFlag={editEventTypeFF}
          setEditEventTypeDescription={setEditEventTypeDescription}
          setEditEventTypeSchema={setEditEventTypeSchema}
          setEditEventTypeFeatureFlag={setEditEventTypeFF}
          updateEventType={updateEventType}
        />
      </Box>
      <EventManagerHeader text={"App Portal"} />
      <AppPortal fullSize url={appPortalUrl} />
    </Container>
  );
}

export default EventTypeManager;
