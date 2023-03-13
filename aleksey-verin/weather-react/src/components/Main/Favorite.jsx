/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { CitiesContext } from '../../App'

const Favorite = ({
  // favoriteCities,
  getFavoriteCities,
  clearFavoriteCities,
  requestCity,
  // currentCity,
}) => {
  const { currentCity, favoriteCities } = useContext(CitiesContext)
  const showFromFavorite = (city) => {
    if (city !== currentCity) {
      requestCity(city)
    }
  }

  return (
    <div className='section-favorite'>
      <div className='favorite-title-block'>Избранные города:</div>
      <div className='favorite-list-block'>
        <div className='list-cities'>
          {favoriteCities.map((item) => {
            return (
              <div key={item} className='list-item'>
                <div onClick={() => showFromFavorite(item)} className='list-item_name'>
                  {item}
                </div>
                <div onClick={() => getFavoriteCities(item)} className='list-item_btn'>
                  <span>&#215;</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div onClick={clearFavoriteCities} className='button-clear'>
        Очистить всё
      </div>
    </div>
  )
}

export default Favorite
