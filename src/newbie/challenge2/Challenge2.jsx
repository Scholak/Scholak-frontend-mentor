import React, { useState } from 'react'
import Rating from './Rating'
import Submit from './Submit'


const Challenge2 = () => {
    const [submit, setSubmit] = useState(false)
    const [rating, setRating] = useState(0)

		const handleRating = number => setRating(number)

    const handleSubmit = () => {
      if(rating !== 0) {
        setSubmit(true)
      }
    }

  return <>{!submit ? <Rating rating={rating} handleRating={handleRating} handleSubmit={handleSubmit} /> : <Submit rating={rating} />}</>
}

export default Challenge2
