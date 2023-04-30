import './style.css'
import './components.css'
import { raf } from "./lenis"

// Query Selection
const actualYearElement: HTMLElement | null = document.getElementById("actual-year")

//@ts-ignore
actualYearElement.innerText = String(new Date().getFullYear())

// Initializing Lenis
requestAnimationFrame(raf)