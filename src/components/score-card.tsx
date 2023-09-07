import { Stack, styled, Box, Button, Divider, Fab } from '@mui/material'
import { Players } from '../containers/score-keeper';
import RemoveIcon from '@mui/icons-material/Remove';

const WHITE = '#e9e9e9'

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: WHITE,
  fontSize: '1rem',
  fontWeight: 'bold',
}));

type CardState = { minusActive: boolean };
type ScoreCardProps = {
  id: Players;
  score: number;
  cp: number;
  updateScore(player: Players, score: number): void;
  updateCp(player: Players, cp: number): void;
  updateCardState(player: Players, newCardState: CardState): void;
  cardState: CardState;
}

const getPlayerColour = (id: Players) => {
  switch(id) {
    case Players.playerOne:
      return '#3bc4ea';
    case Players.playerTwo:
      return '#307812';
    case Players.playerThree:
      return '#ff9800';
    default:
      return '#673ab7';
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

const getMinusButtonStyle = (isActive: boolean): React.CSSProperties => ({
  position: 'absolute',
  opacity: isActive ? '100%' : '50%',
  margin: '1rem'
})

export const ScoreCard = ({ id, score, cp, updateScore, updateCp, cardState, updateCardState }: ScoreCardProps) => (
  <Box sx={{ width: '50%', backgroundColor: getPlayerColour(id) }}>
    <Stack sx={{ height: '100%' }} style={{ position: 'relative'}}>
      <Fab size='small' style={getMinusButtonStyle(cardState.minusActive)} onClick={() => updateCardState(id, { ...cardState, minusActive: !cardState.minusActive })}><RemoveIcon /></Fab>
      <Button sx={{ height: '70%' }} variant="text" onClick={() => updateScore(id, cardState.minusActive ? score - 1 : score + 1)}>
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