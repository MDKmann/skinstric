import React, { useEffect, useState, useRef } from "react";

interface PlacesInputProps {
  setUserLocation: (location: string) => void;
  setCoordinates: (coordinates: { lat: number; lng: number }) => void;
  setHasSelectedPlace: (hasSelected: boolean) => void; 
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PlacesInput: React.FC<PlacesInputProps> = ({
  setUserLocation,
  setCoordinates,
  setHasSelectedPlace,
  onKeyDown,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!window.google || !window.google.maps) return;

    const autocomplete = new google.maps.places.Autocomplete(
      inputRef.current!,
      {
        types: ["geocode"], // Limits to addresses
        fields: ["formatted_address", "geometry"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.formatted_address) return;

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setInputValue(place.formatted_address);
      setUserLocation(place.formatted_address);
      setCoordinates({ lat, lng });
      setHasSelectedPlace(true); // Mark that user selected a valid place

      // Store location data in local storage
      localStorage.setItem("latitude", lat.toString());
      localStorage.setItem("longitude", lng.toString());
      localStorage.setItem("Location_Name", place.formatted_address);
    });

    return () => google.maps.event.clearInstanceListeners(autocomplete);
  }, [setUserLocation, setCoordinates, setHasSelectedPlace]);
  
  return (
    <input
      className="text-6xl tracking-tightest placeholder:text-eerie focus:placeholder:opacity-40 text-center underline-none decoration-none outline-none border-b border-b-2-eerie w-dotted 
      "
      placeholder="Where are you from?"
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={onKeyDown}
      required
    />
  );
};

export default PlacesInput;
