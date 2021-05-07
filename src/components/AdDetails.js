import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarTop from './NavbarTop'
import {useData} from '../contexts/FirebaseDataContext'

const AdDetails = () => {
    const {id} = useParams()
    const {allAds} = useData()
     
    return (
        <div>
            <NavbarTop/>
            {allAds.map(ad=>{
                if(ad.adName === id) {
                    return(
                        <div key={ad.adName}style={{marginTop:'5rem'}}>
                            <h3>{ad.adName}</h3>
                            <h4>{ad.category}</h4>
                            <img src={ad.imgURL} style={{width:'18rem'}} alt={`Image of ${ad.adName}`}/>
                            <p>{ad.description}</p>
                            <p>Price: {ad.price}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default AdDetails
