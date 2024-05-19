"use client"
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></Script>
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="/hadi7.glb"
        ar
        environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
        poster="shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        ar-placement="wall"
      ></model-viewer>

      {/* <model-viewer
        src="/Roza_GLB.glb"
        poster="https://panel.rassancompany.com/assets/AR/roza/poster.webp"
        alt="A 3D model of Rassan"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
*/}
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
