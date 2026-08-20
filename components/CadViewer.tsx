"use client";

import { useEffect, useRef, useState } from "react";

type CadViewerProps = {
  src: string;
  alt: string;
  posterSrc?: string;
  // Fixes CAD exports that come in on the wrong axis (e.g. Z-up from Onshape
  // vs. the Y-up convention model-viewer/glTF expects). Format: "Xdeg Ydeg Zdeg".
  // Common fix for a model lying on its side: "90deg 0deg 0deg".
  orientation?: string;
};

// Loads the <model-viewer> custom element script only once, the first time
// a viewer actually needs to render.
let modelViewerScriptPromise: Promise<void> | null = null;
function loadModelViewerScript(): Promise<void> {
  if (modelViewerScriptPromise) return modelViewerScriptPromise;
  modelViewerScriptPromise = new Promise((resolve, reject) => {
    if (customElements.get("model-viewer")) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load model-viewer"));
    document.head.appendChild(script);
  });
  return modelViewerScriptPromise;
}

export default function CadViewer({ src, alt, posterSrc, orientation = "0deg 0deg 0deg" }: CadViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  // Only start loading once the viewer scrolls near the viewport.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    let cancelled = false;
    loadModelViewerScript().then(() => {
      if (!cancelled) setScriptReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-video bg-[#0a0a0a] border border-white/10 overflow-hidden relative"
    >
      {!shouldLoad || !scriptReady ? (
        <div className="w-full h-full flex items-center justify-center">
          {posterSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={posterSrc}
              alt={alt}
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <span className="text-gray-500 text-sm">Loading 3D model…</span>
          )}
        </div>
      ) : (
        // @ts-expect-error -- model-viewer is a custom element with no bundled types
        <model-viewer
          src={src}
          alt={alt}
          camera-controls
          auto-rotate
          orientation={orientation}
          shadow-intensity="1"
          exposure="1"
          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        />
      )}
    </div>
  );
}