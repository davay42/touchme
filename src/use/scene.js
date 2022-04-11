import { pitchColor, getCircleCoord, notes } from '~/use/chromatone'
import { useElementBounding, useStorage } from "@vueuse/core";
import SimplexNoise from 'simplex-noise';

const visual = ref()

export const activeScene = useStorage('active-scene', 'Rose')

export function useScene() {
  const { width, height } = useElementBounding(visual)
  return { visual, width, height, activeScene }
}
