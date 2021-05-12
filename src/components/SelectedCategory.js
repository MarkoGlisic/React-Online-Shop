import {useParams} from 'react-router-dom';
import BreadcrumbComponent from './BreadcrumbComponent';
import NavbarTop from './NavbarTop';
import {useData} from '../contexts/FirebaseDataContext'
import AdCardList from './AdCardList'

const SelectedCategory = () => {
    const {id} = useParams();
    const {allAds} = useData();
    return (
        <div>
            <NavbarTop/>
            <BreadcrumbComponent path={'Category'} name={'Categories'} id={id}/>
            {allAds.map((ad) => {
                if(ad.category === id) {
                    return(<AdCardList
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
