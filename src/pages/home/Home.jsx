import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import {cards} from '../../data.js'
import CatCard from '../../components/catCard/CatCard'

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5} >
      {
          cards.map(card => (
            <div>
             <CatCard item={card} key={card.id} />
             </div>
        ))
      }
      </Slide>
    </div>
  )
}

export default Home
