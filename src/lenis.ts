//@ts-ignore
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

lenis.on('scroll', (e: any) => {
  console.log(e)
})

export function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
