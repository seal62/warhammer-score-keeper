import { useEffect, useState, useCallback } from 'react';
import './App.css';

import { ScoreKeeper } from './containers/score-keeper';
import { Settings } from './containers/settings';

export type SettingsValues = { players: number };
const settingsInitialValues = {
  players: 2,
}

function App() {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [settings, setSettings] = useState(settingsInitialValues);

  const handleOpenSettings = useCallback((open: boolean) => setSettingsIsOpen(open), []);

  useEffect(() => {
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
      console.log(window.innerHeight)
    }
    setAppHeight();
    window.addEventListener('resize', setAppHeight);

    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  const handleUpdateSettings = useCallback((key: string, value: any) => {
    console.log(key, value)
    setSettings(state => ({ ...state, [key]: value }))
  }, []);

  return (
    <div className="App">
      <ScoreKeeper numberOfPlayers={settings.players} openSettings={() => handleOpenSettings(true)} />
      <Settings settings={settings} updateSetting={handleUpdateSettings} isOpen={settingsIsOpen} closeSettings={() => handleOpenSettings(false)}  />
    </div>
  );
}

export default App;
