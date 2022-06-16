import React from 'react'
import { FaStar,FaStarHalf } from "react-icons/fa";

const Rating = (props) => {
    const showstar = () => {
       if(props.value === 1){
           return(
               <>
                 <FaStar />
               </>
           )
       }
       if(props.value === 2){
        return(
            <>
              <FaStar /> <FaStar />
            </>
        )
    }
    if(props.value === 3){
        return(
            <>
              <FaStar /> <FaStar /> <FaStar />
            </>
        )
    }
    if(props.value === 3.5){
        return(
            <>
              <FaStar /> <FaStar /> <FaStar /><FaStarHalf/>
            </>
        )
    }
    if(props.value === 4){
        return(
            <>
              <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </>
        )
    }
    if(props.value === 4.5){
        return(
            <>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf/>
            </>
        )
    }
    if(props.value === 5){
        return(
            <>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </>
        )
    }
    }
    return (
        <>
            <div className="rating">
              <span>
                {showstar()}
              </span>
            </div>
        </>
    )
}

export default Rating
