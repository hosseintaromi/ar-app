'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'

const Id = () => {
    const searchParams = useSearchParams()
    const [file, setFile] = useState('')



    useEffect(() => {
        // setTimeout(() => {
        setFile(searchParams.get('file'))
        // }, 1000);
        const modelViewerParameters = document.querySelector(`model-viewer#sphere`);
        console.log(modelViewerParameters);
        modelViewerParameters.addEventListener("load", (ev) => {
            const model = modelViewerParameters?.model?.materials
            console.log(model);
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
            <model-viewer
                // skybox-height="1000m"
                id={'sphere'}
                src={`../glb/${file}`}
                ar
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
                ar-placement="wall"

            ></model-viewer>
        </>
    )
}

export default Id