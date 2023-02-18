import mianPhoto from '../asset/kfc_main.png'
import useFetch from '../MocApi/useFetch'
import Menu from './foodMenu/Menu'
import Deal from './foodMenu/Deal'
import BeastSeller from './foodMenu/BeastSeller'
import Ad from './ads/Ad'
import './Home.css'

const Home = () => {
    const { data, isPending, error } = useFetch()
    return (
        <div className="home">
            <div className="home__icon">
                <img src={mianPhoto} alt="main" className="home__photo" />
            </div>
            <div className="home__order">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}  
            {data && <Menu meals ={data} />}
            {data && <Deal deals ={data} />} 
            <BeastSeller />
            <Ad />
            </div>
        </div>
    );
}

export default Home;