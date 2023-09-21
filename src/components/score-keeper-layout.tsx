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
  <Box sx={{ display: 'grid', gridTemplateRows: '1fr 8fr', width: '100%' }}>
    <Stack sx={{ backgroundColor: '#212121', justifyContent: 'center' }}>
      {TurnCard}
    </Stack>
    {numberOfPlayers === 2 ? (
      <Stack direction="row" sx={{  }}>
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
        <Stack direction="row" sx={{  }}>
          {PlayerOneCard}
          {PlayerTwoCard}
          {PlayerThreeCard}
          {PlayerFourCard}
        </Stack>
      )
    )}
  </Box>
)
