import { Stack, Box, Grid } from '@mui/material'

type ScoreKeeperLayoutProps = {
  PlayerOneCard: JSX.Element;
  PlayerTwoCard: JSX.Element;
  PlayerThreeCard: JSX.Element;
  PlayerFourCard: JSX.Element;
  TurnCard: JSX.Element;
  numberOfPlayers: number;
  isMobile: boolean;
}

export const ScoreKeeperLayout = ({ PlayerOneCard, PlayerTwoCard, PlayerThreeCard, PlayerFourCard, TurnCard, numberOfPlayers, isMobile }: ScoreKeeperLayoutProps) => (
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
      isMobile ? (
        <Grid container>
          <Grid item xs={6}>
            {PlayerOneCard}
          </Grid>
          <Grid item xs={6}>
            {PlayerTwoCard}
          </Grid>
          <Grid item xs={6}>
            {PlayerThreeCard}
          </Grid>
          <Grid item xs={6}>
            {PlayerFourCard}
          </Grid>
        </Grid>
      ) : (
        <Stack direction="row" sx={{ height: '90%' }}>
          {PlayerOneCard}
          {PlayerTwoCard}
          {PlayerThreeCard}
          {PlayerFourCard}
        </Stack>
      )
    )}
  </Box>
)
