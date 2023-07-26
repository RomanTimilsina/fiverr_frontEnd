import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to='/gigs?cat=design'>
    <div className='catCard'>
      <div className="container">
      <img src={item.img} alt="" />
      <div className="text">
      <div className="title">{item.title}</div>
      <div className="desc">{item.desc}</div>
      </div>
      </div>
    </div>
    </Link>
  )
}

export default CatCard
