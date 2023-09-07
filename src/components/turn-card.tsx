import { Button, Fab, Box } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

type TurnCardProps = {
  turn: number;
  updateTurn(): void;
  openSettings(): void;
}

export const TurnCard = ({ turn, updateTurn, openSettings }: TurnCardProps) => (
  <Box style={{ position: 'relative' }}>
    <Button sx={{ width: '100%', flexGrow: 1, color: '#e9e9e9', fontSize: '1.5rem', fontWeight: 'bold' }} variant="text" onClick={updateTurn}>
      Battle Round: {turn}
    </Button>
    <Fab
      size="small"
      style={{ position: 'absolute', right: '0', marginRight: '1rem', marginTop: '0.5rem' }}
      onClick={openSettings}
    ><SettingsIcon /></Fab>
  </Box>
);
