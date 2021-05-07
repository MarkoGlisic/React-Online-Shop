import {useParams} from 'react-router-dom';
import NavbarTop from './NavbarTop';

const SelectedCategory = () => {
    const {id} = useParams()
    
    return (
        <div>
            <NavbarTop/>
            <h1 style={{marginTop:'5rem'}}>{id}</h1>
        </div>
    )
}

export default SelectedCategory
