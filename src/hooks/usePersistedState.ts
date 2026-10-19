import {useCallback, useState} from 'react';

export interface Settings {
  music: boolean;
  sfx: boolean;
  haptics: boolean;
  hints: boolean;
}

export interface GardenState {
  stage: number;
  score: number;
  bestStreak: number;
  unlocked: number;
  settings: Settings;
}

export const DEFAULT_STATE: GardenState = {
  stage: 1,
  score: 0,
  bestStreak: 0,
  unlocked: 0,
  settings: {music: true, sfx: true, haptics: true, hints: true},
};

/**
 * Session store. The app is fully offline and adds no native storage module
 * (the allowed dependency set is linear-gradient / svg / lucide only), so the
 * garden lives in a module level record that survives screen switches for the
 * whole app session.
 */
let memory: GardenState = {...DEFAULT_STATE, settings: {...DEFAULT_STATE.settings}};

export function readGarden(): GardenState {
  return memory;
}

export function useGarden() {
  const [state, setState] = useState<GardenState>(memory);

  const update = useCallback((patch: Partial<GardenState>) => {
    memory = {...memory, ...patch};
    setState(memory);
  }, []);

  const setSettings = useCallback((patch: Partial<Settings>) => {
    memory = {...memory, settings: {...memory.settings, ...patch}};
    setState(memory);
  }, []);

  const resetAll = useCallback(() => {
    memory = {...DEFAULT_STATE, settings: {...DEFAULT_STATE.settings}};
    setState(memory);
  }, []);

  return {state, update, setSettings, resetAll};
}

export default useGarden;
