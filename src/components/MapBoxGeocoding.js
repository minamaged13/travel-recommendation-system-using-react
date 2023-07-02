import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const MapboxGeocoding = ({ accessToken }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [location, setLocation] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
  });
  const [searchBox, setSearchBox] = useState(null);

  const onMapLoad = (map) => {
    setMap(map);
    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([location.longitude, location.latitude])
      .addTo(map);
    setMarker(marker);
    map.on('move', () =>
      setLocation({
        latitude: map.getCenter().lat,
        longitude: map.getCenter().lng,
      })
    );
  };

  const onGeocoderLoad = (geocoder) => {
    setSearchBox(geocoder);
  };

  const [coordinates, setCoordinates] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
  });

  const onResult = (result) => {
    const lat = result.result.center[1];
    const lng = result.result.center[0];
    const newPosition = { latitude: lat, longitude: lng };
    if (marker) {
      marker.setLngLat([lng, lat]);
    }
    if (map) {
      map.flyTo({ center: [lng, lat] });
    }
    setLocation(newPosition);
    setCoordinates(newPosition); // update the coordinates state variable
  };

  const onMarkerDragEnd = () => {
    const newPosition = marker?.getLngLat(); // use optional chaining to avoid errors
    if (newPosition) {
      setLocation({ latitude: newPosition.lat, longitude: newPosition.lng });
      if (map) {
        // add a check here
        map.flyTo({ center: [newPosition.lng, newPosition.lat] });
      }
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    const location = marker.getLngLat();
    if (location) {
      const latitude = location.lat;
      const longitude = location.lng;
      console.log('Search location: ' + location);
      // Send latitude and longitude to the server using AJAX or a form submission
    }
  };

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic25vd3dpbnRlcjU2IiwiYSI6ImNsamJxcWg2OTAzMXkzY3Ftc3V4dHd4MmIifQ.DTfDiMI9b1RhrEQrold3-g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [location.longitude, location.latitude],
      zoom: 12,
    });
    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([location.longitude, location.latitude])
      .addTo(map);
    const geocoder = new MapboxGeocoder({
      accessToken:
        'pk.eyJ1Ijoic25vd3dpbnRlcjU2IiwiYSI6ImNsamJxcWg2OTAzMXkzY3Ftc3V4dHd4MmIifQ.DTfDiMI9b1RhrEQrold3-g',
      mapboxgl: mapboxgl,
      marker: false,

      placeholder: 'Enter a location',
    });
    map.addControl(geocoder);
    geocoder.on('result', onResult);
    marker.on('dragend', onMarkerDragEnd);
    map.on('load', () => {
      onMapLoad(map);
      onGeocoderLoad(geocoder);
    });
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
          type="text/css"
        />
      </Head>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      <div>Latitude: {coordinates.latitude}</div>
      <div>Longitude: {coordinates.longitude}</div>

      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      <script
        src={`https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js?access_token=${'pk.eyJ1Ijoic25vd3dpbnRlcjU2IiwiYSI6ImNsamJxcWg2OTAzMXkzY3Ftc3V4dHd4MmIifQ.DTfDiMI9b1RhrEQrold3-g'}`}
      ></script>
      <script
        src={`https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js?access_token='pk.eyJ1Ijoic25vd3dpbnRlcjU2IiwiYSI6ImNsamJxcWg2OTAzMXkzY3Ftc3V4dHd4MmIifQ.DTfDiMI9b1RhrEQrold3-g'`}
      ></script>
    </div>
  );
};

export default MapboxGeocoding;
