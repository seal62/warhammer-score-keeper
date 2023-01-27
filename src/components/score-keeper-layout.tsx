import { Stack, Box } from '@mui/material'

type ScoreKeeperLayoutProps = {
  PlayerOneCard: JSX.Element;
  PlayerTwoCard: JSX.Element;
  TurnCard: JSX.Element;
}

export const ScoreKeeperLayout = ({ PlayerOneCard, PlayerTwoCard, TurnCard }: ScoreKeeperLayoutProps) => (
  <Box sx={{ height: '100vh' }}>
    <Stack sx={{ height: '10%', backgroundColor: '#212121' }}>
      {TurnCard}
    </Stack>
    <Stack direction="row" sx={{ height: '90%' }}>
      {PlayerOneCard}
      {PlayerTwoCard}
    </Stack>
  </Box>
)
