import { Modal } from "@mui/material";
import { SettingsValues } from "../App";
import { SettingsLayout } from "../components/settings-layout";

type SettingsProps = {
  settings: SettingsValues
  isOpen: boolean;
  updateSetting(key: string, value: any): void;
  closeSettings(): void;
}

export const Settings = ({ settings, isOpen, updateSetting, closeSettings }: SettingsProps) => (
  <Modal open={isOpen} onClose={closeSettings} aria-labelledby="Settings">
    <SettingsLayout settings={settings} updateSetting={updateSetting}  />
  </Modal>
)