import {persistentMap} from '@nanostores/persistent';
import {atom} from 'nanostores';

export type SettingsValue = {
  sidebar: 'show' | 'hide',
  theme: 'dark' | 'light' | 'auto'
}


const setting = persistentMap<SettingsValue>('settings', {
  sidebar: 'show',
  theme: 'auto',
});

setting.listen((value, changedKey) => {
  isDarkMode.set(value.theme === 'dark');
});

export const isDarkMode = atom(setting.get().theme == 'dark');

export function setDarkMode(isEnabled: boolean) {
  setting.setKey('theme', isEnabled ? 'dark' : 'auto');
}