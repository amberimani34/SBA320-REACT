import { useState, useEffect } from 'react'

export default function WinePairings () {
    const [winePairings, setWinePairings] = useState({});
    // this is an object with a lot of keys to describe an individual pokemon
    const [winePairing, setWinePairing] = useState({});

    // const apiKey = f41fc9df027e4e078cee29c53f08f837
  
    let url = `https://api.spoonacular.com/food/wine/dishes?apiKey=f41fc9df027e4e078cee29c53f08f837&wine=malbec`;
  
    // step 1 - get the list of Pokemon from the api
    const getWinePairings = async (url) => {
      console.log(url);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setWinePairings(data);
      } catch (err) {
        console.error(err);
      }
    }

    useEffect(() => {getWinePairings(url)}, [])

    return (
        <>
        <div>Wine Pairings</div>
        </>
    )
}