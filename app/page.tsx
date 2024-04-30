"use client"
import '@google/model-viewer';

export default function Home() {
  return (
    <>
      <model-viewer
        src="/Roza_GLB.glb"
        poster="https://panel.rassancompany.com/assets/AR/roza/poster.webp"
        alt="A 3D model of Rassan"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>

      <model-viewer
        src="/Astronaut.glb"
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
    </>
  );
}
