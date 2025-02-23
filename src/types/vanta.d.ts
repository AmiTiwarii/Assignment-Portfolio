declare module "vanta/dist/vanta.birds.min.js" {
  const BIRDS: (options: {
    el: HTMLElement
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
    color1?: number
    color2?: number
    colorMode?: string
    birdSize?: number
    wingSpan?: number
    separation?: number
    alignment?: number
    cohesion?: number
    quantity?: number
    backgroundAlpha?: number
    THREE: any
  }) => {
    destroy: () => void
  }
  export default BIRDS
} 