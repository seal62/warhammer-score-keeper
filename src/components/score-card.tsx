import { Stack, styled, Box, Button, Divider } from '@mui/material'
import { Players } from '../containers/score-keeper';

const WHITE = '#e9e9e9'

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: WHITE,
  fontSize: '1rem',
  fontWeight: 'bold',
}));

type ScoreCardProps = {
  id: Players;
  score: number;
  cp: number;
  updateScore(player: Players, score: number): void;
  updateCp(player: Players, cp: number): void;
}

const getPlayerColour = (id: Players) => {
  switch(id) {
    case Players.playerOne:
      return '#307812';
    default:
      return '#3bc4ea';
  }
}

const buttonStyle = {
  width: '50%',
  color: WHITE,
  borderColor: WHITE,
  backgroundColor: 'rgba(255,255,255,0.1)',
  fontSize: '2rem',
  fontWeight: 'bold',
}

export const ScoreCard = ({ id, score, cp, updateScore, updateCp }: ScoreCardProps) => (
  <Box sx={{ width: '50%', backgroundColor: getPlayerColour(id) }}>
    <Stack sx={{ height: '100%' }}>
      <Button sx={{ height: '70%' }} variant="text" onClick={() => updateScore(id, score + 1)}>
        <Stack sx={{ height: '100%' }}>
          <Item>Score:</Item>
          <Item sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8rem' }}>{score}</Item>
        </Stack>
      </Button>
      <Box sx={{ height: '30%', paddingBottom: '1px' }}>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)' }} />
        <Stack sx={{ height: '100%' }}>
          <Item sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Item sx={{ fontSize: '1.5rem' }}>CP:</Item>
            <Item sx={{ fontSize: '3rem' }}>{cp}</Item>
          </Item>
          <Stack sx={{ flexGrow: 1 }} direction="row">
            <Button sx={buttonStyle} variant="outlined" onClick={() => updateCp(id, cp - 1)}>-</Button>
            <Button sx={buttonStyle} variant="outlined" onClick={() => updateCp(id, cp + 1)}>+</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Box>
)