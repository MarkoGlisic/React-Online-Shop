import React from 'react'
import BreadcrumbComponent from './BreadcrumbComponent'
import NavbarTop from './NavbarTop'

const MyAdsComponent = () => {
    return (
        <>
            <NavbarTop/>
            <BreadcrumbComponent path={'category'} name={"Categories"} id={'My Ads'}/>
            <h1 style={{marginTop:'5rem'}}>Test</h1>
        </>
    )
}

export default MyAdsComponent
