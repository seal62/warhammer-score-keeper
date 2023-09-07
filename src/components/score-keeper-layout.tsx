import { Stack, Box } from '@mui/material'

type ScoreKeeperLayoutProps = {
  PlayerOneCard: JSX.Element;
  PlayerTwoCard: JSX.Element;
  PlayerThreeCard: JSX.Element;
  PlayerFourCard: JSX.Element;
  TurnCard: JSX.Element;
  numberOfPlayers: number;
}

export const ScoreKeeperLayout = ({ PlayerOneCard, PlayerTwoCard, PlayerThreeCard, PlayerFourCard, TurnCard, numberOfPlayers }: ScoreKeeperLayoutProps) => (
  <Box sx={{ height: '100vh' }}>
    <Stack sx={{ height: '10%', backgroundColor: '#212121', justifyContent: 'center' }}>
      {TurnCard}
    </Stack>
    {numberOfPlayers === 2 ? (
      <Stack direction="row" sx={{ height: '90%' }}>
        {PlayerOneCard}
        {PlayerTwoCard}
      </Stack>
    ) : (
      <Stack direction="row" sx={{ height: '90%' }}>
        {PlayerOneCard}
        {PlayerTwoCard}
        {PlayerThreeCard}
        {PlayerFourCard}
      </Stack>
    )}
  </Box>
)
