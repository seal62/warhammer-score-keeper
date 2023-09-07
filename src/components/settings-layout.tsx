import { Box, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { SettingsValues } from "../App";

const settingsContainerStyles: CSSProperties = {
  background: '#e8e8e8',
  margin: '25vh',
  padding: '2.5rem 2rem',
  borderRadius: '1rem',
}

type SettingsLayoutProps = {
  settings: SettingsValues;
  updateSetting(key: string, value: any): void;
}

export const SettingsLayout = ({ settings, updateSetting }: SettingsLayoutProps) => (
  <Box style={settingsContainerStyles}>
    <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>Settings</Typography>
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
