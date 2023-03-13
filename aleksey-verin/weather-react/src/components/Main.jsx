/* eslint-disable react/prop-types */
import React from 'react'
import Error from './Main/Error'
import Favorite from './Main/Favorite'
import Tabs from './Main/Tabs'

const Main = ({
  getFavoriteCities,

  handleError,

  // isLoaded,
  clearFavoriteCities,
  requestCity,
}) => {
  return (
    <div className='section-main'>
      <Tabs
        // weatherData={weatherData}
        // forecastData={forecastData}
        // currentCity={currentCity}
        getFavoriteCities={getFavoriteCities}
        // favoriteCities={favoriteCities}
        // isLoaded={isLoaded}
      />
      <Favorite
        // favoriteCities={favoriteCities}
        getFavoriteCities={getFavoriteCities}
        clearFavoriteCities={clearFavoriteCities}
        requestCity={requestCity}
        // currentCity={currentCity}
      />
      <Error
        handleError={handleError}
        // error={error}
      />
    </div>
  )
}

export default Main
