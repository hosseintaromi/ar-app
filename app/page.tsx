"use client"
import Id from '@/components/id/page';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Home() {
  const data = [
    , {
      placement: 'wall',
      file: '001 - stand divari ikea meshki.glb',
    }
    , {
      placement: 'wall',
      file: '002 - stand divari ikea meshki.glb',
    }
    , {
      placement: 'wall',
      file: '003 - stand divari ikea meshki.glb',
    }
    , {
      placement: 'wall',
      file: '004 - stand divari ikea meshki.glb',
    }
    , {
      placement: 'wall',
      file: '021 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '022 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '023 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '024 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '025 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '026 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '027 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '028 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '029 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '030 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '031 - stand divari ikea talaei.glb',
    }
    , {
      placement: 'wall',
      file: '041 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '042 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '043 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '044 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '045 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '046 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '047 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '048 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '049 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '050 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '051 - stand divari ikea estil.glb',
    }
    , {
      placement: 'wall',
      file: '061 - stand divari jadid meshki.glb',
    }
    , {
      placement: 'wall',
      file: '062 - stand divari jadid meshki.glb',
    }
    , {
      placement: 'wall',
      file: '071 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '072 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '073 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '074 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '075 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '076 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '077 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '078 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '079 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '080 - stand divari jadid meshki goldan sabz.glb',
    }
    , {
      placement: 'wall',
      file: '091 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '092 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '093 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '094 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '095 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '096 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '097 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '098 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '099 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '100 - stand divari jadid meshki goldan sefid.glb',
    }
    , {
      placement: 'wall',
      file: '111 - abchekan tasho choobi.glb',
    }
    , {
      placement: 'wall',
      file: '112 - abchekan tasho sini meshki.glb',
    }
    , {
      placement: 'wall',
      file: '121 - ja ghashoghi meshki.glb',
    }
    , {
      placement: 'wall',
      file: '131 - abchekan 120cm meshki.glb',
    }
    , {
      placement: 'wall',
      file: '132 - abchekan 120cm sefid.glb',
    }
    , {
      placement: 'wall',
      file: '141 - abchekan ikea sefid.glb',
    }
    , {
      placement: 'wall',
      file: '142 - abchekan ikea meshki.glb',
    }
    , {
      placement: 'wall',
      file: '151 - abchekan do tabaghe modern.glb',
    }
  ]
  const [val, setValue] = useState({
    placement: 'floor',
    file: '151 - abchekan do tabaghe modern.glb',
  })
  return (
    <>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"></Script>
      <Id data={val} />
      <div
        style={{
          display: "flex", gap: '10px', flexWrap: "wrap", margin: '10px'
        }}>
        {
          data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '20px',
                borderRadius: '10px',
                margin: '10px',
                width: '400px'
              }}
              onClick={() => setValue(item)}
            ><div

              style={{
                backgroundColor: 'wihte'
              }} >
                {index + 1} - {item?.file}
              </div>
            </div>

          ))
        }
      </div>
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