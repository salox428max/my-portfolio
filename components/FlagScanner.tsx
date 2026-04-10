"use client"
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import { useEffect, useRef, useState } from 'react';

export default function FlagScanner() {
    const [result, setResult] = useState("Loading...");
    const webcamContainerRef = useRef<HTMLDivElement>(null);
    let model: any, webcam: any;

    const URL = "/model/"; 

    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        model = await tmImage.load(modelURL, metadataURL);
        
        webcam = new tmImage.Webcam(300, 300, true); 
        await webcam.setup(); 
        await webcam.play();
        
        if (webcamContainerRef.current) {
            webcamContainerRef.current.innerHTML = "";
            webcamContainerRef.current.appendChild(webcam.canvas);
        }
        window.requestAnimationFrame(loop);
    }

    async function loop() {
        webcam.update(); 
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        const prediction = await model.predict(webcam.canvas);
        let highest = { className: "", probability: 0 };
        
        prediction.forEach((p: any) => {
            if (p.probability > highest.probability) {
                highest = p;
            }
        });

        setResult(`${highest.className}: ${(highest.probability * 100).toFixed(0)}%`);
    }

    return (
        <div className="flex flex-col items-center p-6 bg-slate-900 rounded-2xl shadow-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Bayroq Ai</h2>
            <button 
                onClick={init}
                className="mb-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            >
                Kamerani Ishga Tushirish
            </button>
            <div ref={webcamContainerRef} className="overflow-hidden rounded-lg border-2 border-cyan-500 mb-4 bg-black w-[300px] h-[300px] flex items-center justify-center">
                <span className="text-slate-500">Kamera shu yerda chiqadi</span>
            </div>
            <div className="text-xl font-mono text-cyan-400 bg-slate-800 px-4 py-2 rounded-md">
                {result}
            </div>
        </div>
    );
}