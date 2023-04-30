//@ts-ignore
import Lenis from '@studio-freight/lenis'

export const lenis = new Lenis()

export function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
