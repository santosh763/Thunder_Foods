import React, { useEffect, useState } from 'react'

const Card = () => {

    const [resturantData,SetResturantData]=useState([])

    useEffect(()=>{
        const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.044514618534482&lng=77.61852643655808&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        const fetchData =async()=>{
            try{
                const data= await fetch(url)
                const json =await data.json();
                SetResturantData(json)
            }
            catch(error){
                console.log("Error",error);
            }
        }
        fetchData();
    },[])
  return (
    <div>{console.log(resturantData?.data)}</div>
  )
}

export default Card