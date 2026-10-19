export interface Decoration {
  id: number;
  name: string;
  color: string;
  stage: number;
}

/** 12 garden lights, one unlocked per cleared stage. */
export const DECORATIONS: Decoration[] = [
  {id: 1, name: 'BERRY LAMP', color: '#D95D9F', stage: 1},
  {id: 2, name: 'MINT LANTERN', color: '#65C7B0', stage: 2},
  {id: 3, name: 'HONEY BELL', color: '#F6C85F', stage: 3},
  {id: 4, name: 'LILAC VINE', color: '#9B59B6', stage: 4},
  {id: 5, name: 'MOON DISC', color: '#FFE9B8', stage: 5},
  {id: 6, name: 'SUGAR ARCH', color: '#F7B8D8', stage: 6},
  {id: 7, name: 'DEW ORB', color: '#B6E8DC', stage: 7},
  {id: 8, name: 'PETAL PATH', color: '#F06BAE', stage: 8},
  {id: 9, name: 'CLOUD POUF', color: '#E6D9F2', stage: 9},
  {id: 10, name: 'STAR STRING', color: '#FCE4A8', stage: 10},
  {id: 11, name: 'JELLY POND', color: '#7FDCC4', stage: 11},
  {id: 12, name: 'MOON GATE', color: '#B8407F', stage: 12},
];

export function unlockedCount(stage: number): number {
  return Math.max(0, Math.min(DECORATIONS.length, stage - 1));
}

export function rewardFor(stage: number): Decoration {
  const idx = Math.min(DECORATIONS.length - 1, Math.max(0, stage - 1));
  return DECORATIONS[idx];
}
