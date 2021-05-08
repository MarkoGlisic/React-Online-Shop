import {useParams} from 'react-router-dom';
import BreadcrumbComponent from './BreadcrumbComponent';
import NavbarTop from './NavbarTop';

const SelectedCategory = () => {
    const {id} = useParams()
    
    return (
        <div>
            <NavbarTop/>
            <BreadcrumbComponent path={'Category'} id={id}/>
            <h1 style={{marginTop:'5rem'}}>{id}</h1>
        </div>
    )
}

export default SelectedCategory
