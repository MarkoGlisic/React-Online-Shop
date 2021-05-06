import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarTop from './NavbarTop'
import {useData} from '../contexts/FirebaseDataContext'

const AdDetails = () => {
    let {id} = useParams()
    const {specificAd, getSpecificAdInformation} = useData()
    getSpecificAdInformation(id)
    {console.log(getSpecificAdInformation(id.toString()))}
    return (
        <div>
            <NavbarTop/>
            <h1 style={{marginTop:'5rem'}}>ID: {id}</h1>
        </div>
    )
}

export default AdDetails
