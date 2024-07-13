'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'

const Id = ({ data }: {
    data: {
        placement: string;
        file: string;
    }
}) => {
    // const searchParams = useSearchParams()
    const [file, setFile] = useState('')
    // const data = searchParams.get('file')

    useEffect(() => {
        if (!data) return
        setFile(data.file)
        const modelViewerParameters = document.querySelector(`model-viewer#sphere`);
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
                src={`/glb/${data.file}`}
                ar
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
                ar-placement={data.placement}

            ></model-viewer>
        </>
    )
}

export default Id