"use client"
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  const data = [
    "031 - stand divari ikea talaei.glb",
    // "041 - stand divari ikea estil (3)",
    // "021 - stand divari ikea talaei (6).glb",
    // "041 - stand divari ikea estil (1).glb",
    // '001 - stand divari ikea meshki.glb',
    // '002 - stand divari ikea meshki.glb',
    // '003 - stand divari ikea meshki.glb',
    // '004 - stand divari ikea meshki.glb',
    // '021 - stand divari ikea talaei.glb',
    // '022 - stand divari ikea talaei.glb',
    // '023 - stand divari ikea talaei.glb',
    // '024 - stand divari ikea talaei.glb',
    // '025 - stand divari ikea talaei.glb',
    // '026 - stand divari ikea talaei.glb',
    // '027 - stand divari ikea talaei.glb',
    // '028 - stand divari ikea talaei.glb',
    // '029 - stand divari ikea talaei.glb',
    // '030 - stand divari ikea talaei.glb',
    // '031 - stand divari ikea talaei.glb',
    // '041 - stand divari ikea estil.glb',
    // '042 - stand divari ikea estil.glb',
    // '043 - stand divari ikea estil.glb',
    // '044 - stand divari ikea estil.glb',
    // '045 - stand divari ikea estil.glb',
    // '046 - stand divari ikea estil.glb',
    // '047 - stand divari ikea estil.glb',
    // '048 - stand divari ikea estil.glb',
    // '049 - stand divari ikea estil.glb',
    // '050 - stand divari ikea estil.glb',
    // '051 - stand divari ikea estil.glb',
    // '061 - stand divari jadid meshki.glb',
    // '062 - stand divari jadid meshki.glb',
    // '071 - stand divari jadid meshki goldan sabz.glb',
    // '072 - stand divari jadid meshki goldan sabz.glb',
    // '073 - stand divari jadid meshki goldan sabz.glb',
    // '074 - stand divari jadid meshki goldan sabz.glb',
    // '075 - stand divari jadid meshki goldan sabz.glb',
    // '076 - stand divari jadid meshki goldan sabz.glb',
    // '077 - stand divari jadid meshki goldan sabz.glb',
    // '078 - stand divari jadid meshki goldan sabz.glb',
    // '079 - stand divari jadid meshki goldan sabz.glb',
    // '080 - stand divari jadid meshki goldan sabz.glb',
    // '091 - stand divari jadid meshki goldan sefid.glb',
    // '092 - stand divari jadid meshki goldan sefid.glb',
    // '093 - stand divari jadid meshki goldan sefid.glb',
    // '094 - stand divari jadid meshki goldan sefid.glb',
    // '095 - stand divari jadid meshki goldan sefid.glb',
    // '096 - stand divari jadid meshki goldan sefid.glb',
    // '097 - stand divari jadid meshki goldan sefid.glb',
    // '098 - stand divari jadid meshki goldan sefid.glb',
    // '099 - stand divari jadid meshki goldan sefid.glb',
    // '100 - stand divari jadid meshki goldan sefid.glb',
    // '111 - abchekan tasho choobi.glb',
    // '112 - abchekan tasho sini meshki.glb',
    // '121 - ja ghashoghi meshki.glb',
    // '131 - abchekan 120cm meshki.glb',
    // '132 - abchekan 120cm sefid.glb',
    // '141 - abchekan ikea sefid.glb',
    // '142 - abchekan ikea meshki.glb',
    // '151 - abchekan do tabaghe modern.glb',
  ]
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {

      const modelViewerParameters = document.querySelector(`model-viewer#sphere${i}`);
      modelViewerParameters.addEventListener("load", (ev) => {

        for (let i = 0; i < modelViewerParameters.model.materials.length; i++) {
          const material = modelViewerParameters.model.materials[i];
          // material.pbrMetallicRoughness.setBaseColorFactor([0.17, 0.101, 0.147]);
          material.pbrMetallicRoughness.setMetallicFactor(1);
          material.pbrMetallicRoughness.setRoughnessFactor(0.2);
        }
        // const material = modelViewerParameters.model.materials[0];
        // material.pbrMetallicRoughness.setBaseColorFactor([0.17, 0.101, 0.147]);
        // material.pbrMetallicRoughness.setMetallicFactor(1);
        // material.pbrMetallicRoughness.setRoughnessFactor(0.2);

      });
    }

  }, [])

  return (
    <>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"></Script>
      {
        data.map((item, index) => (
          <model-viewer
            // skybox-height="1000m"
            id={'sphere' + index}
            src={`/glb/${item}`}
            ar
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            ar-placement="wall"

          ></model-viewer>
        ))
      }


    </>
  );
}
