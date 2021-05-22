import {useParams} from 'react-router-dom';
import BreadcrumbComponent from '../Header/BreadcrumbComponent';
import NavbarTop from '../Header/NavbarTop';
import {useData} from '../../contexts/FirebaseDataContext'
import AdCard from '../AdCard/AdCard'

const SelectedCategory = () => {
    const {id} = useParams();
    const {allAds} = useData();
    return (
        <div>
            <NavbarTop/>
            <BreadcrumbComponent path={'Category'} name={'Categories'} id={id}/>
            {allAds.map((ad) => {
                if(ad.category === id) {
                    return(<AdCard
                    category={ad.category}
                    price={ad.price}
                    imgURL={ad.imgURL}
                    title={ad.adName}
                    description={ad.description}
                    adOwner={ad.adOwner}
                    adViews={ad.views}
                    />)
                }
            })}
        </div>
    )
}

export default SelectedCategory
