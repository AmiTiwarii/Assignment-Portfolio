// src/types/three-env.d.ts
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { Canvas } from '@react-three/stdlib';

// Ensure THREE.js objects are properly extended
extend({ Canvas, ...THREE } as any);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}
