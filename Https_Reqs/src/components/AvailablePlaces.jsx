import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import fetchData from '../http.js';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [AvailablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState()
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)
      try {
        const places=await fetchData();
        navigator.geolocation.getCurrentPosition((position) => {

          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);

          setAvailablePlaces(sortedPlaces);
          setIsFetching(false)
        })
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data...Pls try again later' })
        setIsFetching(false)
      }

    }
    fetchPlaces();

    // fetch('http://localhost:3000/places').then((res) => {
    //   return res.json();

    // }).then((data) => {
    //   setAvailablePlaces(data.places);

    // })
  }, [])
  if (error) {
    return (
      <Error title="An error occured " message={error.message} />
    )
  }

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={isFetching}
      loadingText={"Fetching Places...."}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
