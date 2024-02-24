import React from 'react'
import  { useEffect, useState } from 'react';
function PvbyC() {
    const [topCountries, setTopCountries] = useState([]);

    useEffect(() => {
      
      const followersByCountryData = [
        { country: 'USA', followers: Math.floor(Math.random() * 10000000), totalFollowers: 10000000 },
        { country: 'India', followers: Math.floor(Math.random() * 10000000), totalFollowers: 10000000 },
        { country: 'Brazil', followers: Math.floor(Math.random() * 10000000), totalFollowers: 10000000 },
        { country: 'China', followers: Math.floor(Math.random() * 10000000), totalFollowers: 10000000 },
        { country: 'Russia', followers: Math.floor(Math.random() * 10000000), totalFollowers: 10000000 },
        { country: 'Japan', followers: Math.floor(Math.random() * 10000000), totalFollowers: 10000000 },
        { country: 'Germany', followers: Math.floor(Math.random() * 10000000), totalFollowers: 10000000 },
      ];
      const filteredCountries = followersByCountryData.filter(country => country.followers > 1000000);
      const shuffledCountries = filteredCountries.sort(() => Math.random() - 0.5);
      const topFiveCountries = shuffledCountries.slice(0, 5);
  
      setTopCountries(topFiveCountries);
    }, []);
  
    return (
      <div className='followers-by-country'>
        <div style={{fontSize:"18px"}}>Post views by country</div>
        <div className='follower-progress-bars'>
          {topCountries.map((countryData, index) => (
            <div key={index} className='follower-progress'>
              <div className='country'>{countryData.country}</div>
              <div className='progress-bar'>
                <div className='progress' style={{ width: `${(countryData.followers / 10000000) * 100}%`,backgroundColor:"#c938ac" }}>
                {countryData.followers}M
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default PvbyC