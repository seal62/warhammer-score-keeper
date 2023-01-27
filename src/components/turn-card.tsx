import { Button } from "@mui/material";

type TurnCardProps = {
  turn: number;
  updateTurn(): void;
}

export const TurnCard = ({ turn, updateTurn }: TurnCardProps) => (
  <Button sx={{ width: '100%', flexGrow: 1, color: '#e9e9e9', fontSize: '1.5rem', fontWeight: 'bold' }} variant="text" onClick={updateTurn}>
    Battle Round: {turn}
  </Button>
);
