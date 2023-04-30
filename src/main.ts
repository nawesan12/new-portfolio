import './css/main.css'
import './css/components.css'
import './css/animations.css'

import './css/home.css'
import './css/about.css'

import { raf } from "./lenis"

// Query Selection
const actualYearElement: HTMLElement | null = document.getElementById("actual-year")

//@ts-ignore
actualYearElement.innerText = String(new Date().getFullYear())

// Initializing Lenis
requestAnimationFrame(raf)