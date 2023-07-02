import { Fragment, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1Ijoic25vd3dpbnRlcjU2IiwiYSI6ImNsamJxcWg2OTAzMXkzY3Ftc3V4dHd4MmIifQ.DTfDiMI9b1RhrEQrold3-g';

function GetLocation() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.8025, 26.8206], // San Francisco
      zoom: 8
    });

    const marker = new mapboxgl.Marker({
      draggable: true
    }).setLngLat([30.8025, 26.8206]).addTo(map);

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false,
      placeholder: 'Enter a location'
    });

    map.addControl(geocoder);

    geocoder.on('result', function(result) {
      const lat = result.result.center[1];
      const lng = result.result.center[0];
      const newPosition = { lat: lat, lng: lng };
      marker.setLngLat(newPosition);
      map.flyTo({center: newPosition});

      console.log("Marker coordinates: " + newPosition.lat + ", " + newPosition.lng);
    });

    marker.on('dragend', function() {
      const newPosition = marker.getLngLat();
      map.flyTo({center: newPosition});
      console.log("Marker coordinates: " + newPosition.lat + ", " + newPosition.lng);
    });

    document.getElementById('search-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const location = marker.getLngLat();
      const latitude = location.lat;
      const longitude = location.lng;

      // Send latitude and longitude to the server using AJAX or a form submission
    });

    return () => map.remove();
  }, []);

  return (
    <Fragment>
      <div className='form-plan-button'> 

      <input type="text" id="search-box" name="location" placeholder="Enter a location" />
      <div id="map" className='location'></div>
      <button id="search-form"> submit</button>
      </div>
    </Fragment>
  );
}

export default GetLocation;