
import { useEffect } from 'react'
import { useDemographicsStore } from './useDemographicsStore'

export const useInitializeDemographicsData = () => {
  const setData = useDemographicsStore((state) => state.setData);

  useEffect(() => {
    const storedResponse = localStorage.getItem("storedScanResults");
    if(storedResponse) {
      try {
        const parsedStoredResponse = JSON.parse(storedResponse);
        setData(parsedStoredResponse.data);
      } catch (error) {
        console.error("Failed to parse stored data from localStorage", error);
      }
    }
  },[setData])
  
}
