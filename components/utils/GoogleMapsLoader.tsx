"use client";

import { useEffect, useState } from "react";

// This component loads the Google Maps JavaScript API script when mounted.
interface GoogleMapsLoaderProps {
  onLoad?: () => void;
}

const GoogleMapsLoader = ({ onLoad }: GoogleMapsLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // It checks if the script is already loaded to avoid loading it multiple times.
    if (window.google && window.google.maps) {
      setLoaded(true);
      onLoad?.();
      return;
    }

    const scriptId = "google-maps-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setLoaded(true);
      onLoad?.();
    };
    document.body.appendChild(script);
  }, [onLoad]);
  // The component returns null as it doesn't render anything in the UI.
  return null;
};

export default GoogleMapsLoader;





