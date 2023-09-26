import React from 'react'
import GeoApiCall from '../utils/GetLocationAPI'
import listData from '../utils/listData'
import placeData from '../utils/placeData.json'

function Home() {
  // GeoApiCall.getlocation('austin')
  async function getCities(city) {
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`;
      const response = await fetch(url);
      const data = await response.json();
      const selectedCity = data.results[0]
      const { latitude, longitude } = selectedCity
      console.log(`${latitude}, and ${longitude}`)

    } catch (error) {
      console.log(error)
    }

    return
  }
  console.log(listData.features)
  return (
    <>
      <main className="CenterArea">

        <h1 className='MainTitle'> Trip Buddy</h1>
        <h1 className='MainTitle'> Search a Location</h1>
        <div id="searchbarContainer">
          <input type="search" name="citySearch" id="citySearch" placeholder="Search for City"></input>
          <div id="autosearch">
          </div>
        </div>

        <section className="resultContain">

          {listData.features.map((place, index) => {
            return (
              <div className="previewContain" key={place.properties.xid}>
                <div id="placeName"> {place.properties.name} </div>
                <div id="placeRating"> Rate: {place.properties.rate}</div>
                <div id="placeKind"> {place.properties.kinds} </div>
                
              </div>
            )
          })}


        </section>






      </main >
    </>
  )
}

export default Home