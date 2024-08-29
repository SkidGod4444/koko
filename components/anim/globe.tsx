import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [215 / 255, 255 / 255, 0 / 255], // #D7FF00
      glowColor: [1, 1, 1],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [18.5204, 73.8567], size: 0.1 }, // PUNE
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [28.7041, 77.1025], size: 0.01 }, // DELHI
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [20.2376, -84.27], size: 0.1 }, // ODISHA
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
