import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({});

    // transform the search results object into the 
    // {latitude: 52.516272, longitude: 13.377722} object 

    // here what we are doing is, that whenever map will get a result it will return 
    // an object which will have the latitude and longitude of the place
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // the latitude and longitude of the center of the location coordinates 
    const center= getCenter(coordinates);

    // this will point the map to the center of all the locations of hotels 
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10,
    });

    return (
        <ReactMapGL
        mapStyle="mapbox://styles/rohan-bhardwaj/ckshqcgps50wu18nvx6nbhqid"
        // this will go to the environment variables and access the mapbox_key
        mapboxApiAccessToken={process.env.mapbox_key} 
        {...viewport}
        // if we want the map to be responsive i.e. change location as user scrolls
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
        {searchResults.map((result) => (
            <div key={result.long}>
                <Marker longitude={result.long} latitude={result.lat}
                    offsetLeft={-20} offsetTop={-10}>
                    <p className="cursor-pointer text-xl animate-bounce"
                    aria-label="push-pin" role="img"
                    onClick={() => setSelectedLocation(result)}>📌</p>
                </Marker>

                {/* the popup what should show if we click on a marker */}
                {selectedLocation.long === result.long ? 
                    (<Popup onClose={() => setSelectedLocation({})}
                        closeOnClick={true} latitude={result.lat}
                        longitude={result.long}>
                        <div className="text-sm font-semibold h-4 px-1">
                            {result.title}
                        </div>
                    </Popup>)
                :(false)}
            </div>
        ))}
        </ReactMapGL>
    )
}

export default Map;
