"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  const data = [
    '001 - stand divari ikea meshki.glb',
    '002 - stand divari ikea meshki.glb',
    '003 - stand divari ikea meshki.glb',
    '004 - stand divari ikea meshki.glb',
    '021 - stand divari ikea talaei.glb',
    '022 - stand divari ikea talaei.glb',
    '023 - stand divari ikea talaei.glb',
    '024 - stand divari ikea talaei.glb',
    '025 - stand divari ikea talaei.glb',
    '026 - stand divari ikea talaei.glb',
    '027 - stand divari ikea talaei.glb',
    '028 - stand divari ikea talaei.glb',
    '029 - stand divari ikea talaei.glb',
    '030 - stand divari ikea talaei.glb',
    '031 - stand divari ikea talaei.glb',
    '041 - stand divari ikea estil.glb',
    '042 - stand divari ikea estil.glb',
    '043 - stand divari ikea estil.glb',
    '044 - stand divari ikea estil.glb',
    '045 - stand divari ikea estil.glb',
    '046 - stand divari ikea estil.glb',
    '047 - stand divari ikea estil.glb',
    '048 - stand divari ikea estil.glb',
    '049 - stand divari ikea estil.glb',
    '050 - stand divari ikea estil.glb',
    '051 - stand divari ikea estil.glb',
    '061 - stand divari jadid meshki.glb',
    '062 - stand divari jadid meshki.glb',
    '071 - stand divari jadid meshki goldan sabz.glb',
    '072 - stand divari jadid meshki goldan sabz.glb',
    '073 - stand divari jadid meshki goldan sabz.glb',
    '074 - stand divari jadid meshki goldan sabz.glb',
    '075 - stand divari jadid meshki goldan sabz.glb',
    '076 - stand divari jadid meshki goldan sabz.glb',
    '077 - stand divari jadid meshki goldan sabz.glb',
    '078 - stand divari jadid meshki goldan sabz.glb',
    '079 - stand divari jadid meshki goldan sabz.glb',
    '080 - stand divari jadid meshki goldan sabz.glb',
    '091 - stand divari jadid meshki goldan sefid.glb',
    '092 - stand divari jadid meshki goldan sefid.glb',
    '093 - stand divari jadid meshki goldan sefid.glb',
    '094 - stand divari jadid meshki goldan sefid.glb',
    '095 - stand divari jadid meshki goldan sefid.glb',
    '096 - stand divari jadid meshki goldan sefid.glb',
    '097 - stand divari jadid meshki goldan sefid.glb',
    '098 - stand divari jadid meshki goldan sefid.glb',
    '099 - stand divari jadid meshki goldan sefid.glb',
    '100 - stand divari jadid meshki goldan sefid.glb',
    '111 - abchekan tasho choobi.glb',
    '112 - abchekan tasho sini meshki.glb',
    '121 - ja ghashoghi meshki.glb',
    '131 - abchekan 120cm meshki.glb',
    '132 - abchekan 120cm sefid.glb',
    '141 - abchekan ikea sefid.glb',
    '142 - abchekan ikea meshki.glb',
    '151 - abchekan do tabaghe modern.glb',
  ]
  const searchParams = useSearchParams()
  const file = searchParams.get('file')
  useEffect(() => {

    const modelViewerParameters = document.querySelector(`model-viewer#sphere`);
    modelViewerParameters.addEventListener("load", (ev) => {
      const model = modelViewerParameters.model.materials
      for (let i = 0; i < model.length; i++) {
        if (model[i].name.includes("steel_goldan")) {
          model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([1.8, 1.8, 1.8]);
        }
        if (model[i].name.includes("steel_gholab")) {
          model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([1.8, 1.8, 1.8]);
        }
        if (model[i].name.includes("steel_loole")) {
          model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([1.8, 1.8, 1.8]);
        }
        if (model[i].name.includes("talaei_loole")) {
          console.log('object');
          model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([1, 0.6, 0.1]);
        }
        if (model[i].name.includes("talaei_gholab")) {
          model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([1, 0.6, 0.1]);
        }
        if (model[i].name.includes("talaei_goldan")) {
          model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([1, 0.6, 0.1]);
        }
        if (model[i].name.includes("bast_meshki_DAS_NAZAN")) {
          // model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          // model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([0, 0, 0]);
        }
        if (model[i].name.includes("Color_F06")) {
          // model[i]?.pbrMetallicRoughness?.setMetallicFactor(0.5);
          // model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.7);
          // model[i]?.pbrMetallicRoughness.setBaseColorFactor([0.137, 0.2, 0.134]);
          model[i]?.pbrMetallicRoughness?.setMetallicFactor(0.8);
          model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.5);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([0.33, 0.44, 0.33]);
        }
        if (model[i].name.includes("sini_kaf_sabad_DAS_NAZAN")) {
          // model[i]?.pbrMetallicRoughness?.setMetallicFactor(1);
          // model[i]?.pbrMetallicRoughness?.setRoughnessFactor(0.2);
          model[i]?.pbrMetallicRoughness.setBaseColorFactor([0, 0, 0]);
        }
      }

    });

  }, [])

  return (
    <>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"></Script>
      {
        data.map((item, index) => (
          <>
            <p><Link href={`id?file=${item}`}>
              {item}
            </Link></p>

          </>
        ))
      }
      {/* <model-viewer
        // skybox-height="1000m"
        id={'sphere'}
        src={`./glb/${file}`}
        ar
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        ar-placement="wall"
      /> */}

    </>
  );
}