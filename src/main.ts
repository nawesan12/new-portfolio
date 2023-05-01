import './css/main.css'
import './css/components.css'
import './css/animations.css'

import './css/home.css'
import './css/about.css'
import './css/projects.css'

import { lenis, raf } from "./lenis"

// Query Selection
const actualYearElement: HTMLElement | null = document.getElementById("actual-year")
const leftSlide: HTMLElement | null = document.querySelector(".left-slide") 
const rightSlide: HTMLElement | null = document.querySelector(".right-slide") 

const scrollUpButton: HTMLElement | null = document.getElementById("scroll-up")

const projectsFrame: HTMLIFrameElement | null = document.querySelector(".projects-frame")

const projectsList = [
  "https://turnos.gorositostudio.com", 
  "https://hifu.vercel.app", 
  "https://gorositostudio.com",
  "https://lambcode.tech",

]

let actualProject = 0

// Initializations
//@ts-ignore
projectsFrame.src = projectsList[actualProject]

//@ts-ignore
actualYearElement.innerText = String(new Date().getFullYear())

// Listeners 
leftSlide?.addEventListener("click", () => {
  if(actualProject === 0) {
    //@ts-ignore
    projectsFrame.src = projectsList[projectsList.length - 1]  
    actualProject = projectsList.length - 1
    return
  }
  //@ts-ignore
  projectsFrame.src = projectsList[actualProject - 1]  
  actualProject--
})

rightSlide?.addEventListener("click", () => {
  if(actualProject === projectsList.length - 1) {
    //@ts-ignore
    projectsFrame.src = projectsList[0]  
    actualProject = 0
    return
  }
  //@ts-ignore
  projectsFrame.src = projectsList[actualProject + 1]  
  actualProject++
})

scrollUpButton?.addEventListener("click", () => {
  lenis.scrollTo(0)
})



// Initializing Lenis
requestAnimationFrame(raf)