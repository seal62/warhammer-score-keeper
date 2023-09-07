import { Box, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { SettingsValues } from "../App";

const settingsContainerStyles = (isMobile: boolean): CSSProperties => ({
  background: '#e8e8e8',
  margin: isMobile ? '25vh 1rem' : '25vh',
  padding: isMobile ? '2rem 1rem' : '2.5rem 2rem',
  borderRadius: '1rem',
});

type SettingsLayoutProps = {
  settings: SettingsValues;
  updateSetting(key: string, value: any): void;
  isMobile: boolean;
};

export const SettingsLayout = ({ settings, updateSetting, isMobile }: SettingsLayoutProps) => (
  <Box style={settingsContainerStyles(isMobile)}>
    <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>Settings</Typography>
    <Box>
      <Typography style={{ fontWeight: 'bold' }}>Number of Players:</Typography>
      <Stack>
        <RadioGroup style={{ flexDirection: 'row' }} value={settings.players} onChange={(ev) => updateSetting('players', Number(ev.target.value))}>
          <FormControlLabel value={2} control={<Radio />} label="2" />
          <FormControlLabel value={4} control={<Radio />} label="4" />
        </RadioGroup>
      </Stack>
    </Box>
  </Box>
);
