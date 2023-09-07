import { Modal } from "@mui/material";
import { SettingsValues } from "../App";
import { SettingsLayout } from "../components/settings-layout";

type SettingsProps = {
  settings: SettingsValues
  isOpen: boolean;
  updateSetting(key: string, value: any): void;
  closeSettings(): void;
  isMobile: boolean;
}

export const Settings = ({ settings, isOpen, updateSetting, closeSettings, isMobile }: SettingsProps) => (
  <Modal open={isOpen} onClose={closeSettings} aria-labelledby="Settings">
    <SettingsLayout settings={settings} updateSetting={updateSetting} isMobile={isMobile} />
  </Modal>
)