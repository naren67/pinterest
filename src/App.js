import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import unsplash from './url/unsplash'


function App() {

  const [pins, setPins] = useState([])

        const getImages = (term)=>{
           return unsplash.get('https://api.unsplash.com/search/photos',{
             params:{
               query:term
              }
           })
        }

        const onSearchHit = (term)=>{
          console.log('searched images',term)

          getImages(term).then((res)=>{
            const results = res.data.results

            let spread = [
              ...results,
              ...pins,
            ]

            // random
            spread.sort((a,b)=>{
              return 0.5 - Math.random()
            })

            setPins(spread)
          })
        }
         
        // onSearchHit('cars')

        
        //load pins once the page loads

        // const getNewpins = ()=>{
        //   let promises = []
        //   let pinData = []

        //   let defaultPinsDb = ['neymar', 'ronaldo', 'soccer', 'flower', 'garden','laptop', 'google', 'tesla', 'bugati']

        //   defaultPinsDb.forEach((pinCategory)=>{
        //     promises.push(
        //       getImages(pinCategory).then((res)=>{
        //         let results = res.data.results

        //         pinData = pinData.concat(results)
        //       })
        //     )
        //   })

        //   Promise.all(promises).then(()=>{
        //     setPins(pinData)
        //   })
        // }

        // useEffect(()=>{

        //   getNewpins()

        // },[])

  return (
    <div className="App">
          <Header
          onSearchHit = {onSearchHit}
          />
          <Mainboard
          pins={pins}
          />
    </div>
  );
}

export default App;
