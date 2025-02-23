// types/r3f.d.ts
import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Declare Canvas as intrinsic element
      Canvas: ThreeElements['Canvas'] & React.HTMLAttributes<HTMLCanvasElement>
      
      // Add other R3F components you're using
      mesh: ThreeElements['mesh']
      ambientLight: ThreeElements['ambientLight']
    }
  }
}
