import { Alert } from '@mui/material';
import { SVIX_ACCESS_KEY } from '../utils/constants';

function EventTypeKeyWarning() {
  const svixAccessKey = SVIX_ACCESS_KEY;
  
  if (!svixAccessKey || typeof svixAccessKey !== 'string' || (svixAccessKey as string)?.length === 0) {
    return <Alert severity="warning">SVIX_ACCESS_KEY is not present</Alert>;
  }

  return null;
}

export default EventTypeKeyWarning;
