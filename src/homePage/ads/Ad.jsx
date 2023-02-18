import './Ad.css'
import I1 from '../../asset/I1.png'
import I2 from '../../asset/I2.png'
import I3 from '../../asset/I3.png'
import I4 from '../../asset/I4.png'
const Ad = () => {
    return (
        <div className="ad__box">
            <div className="ad__row">
                <div className="ad-1">
                <img src={I1} alt="AD" className='ad__img' />
                </div>
                <div className="ad-2">
                <img src={I2} alt="AD" className='ad__img' />
                </div>
            </div>
            <div className="ad__row">
                <div className="ad-3">
                <img src={I3} alt="AD" className='ad__img' />
                </div>
                <div className="ad-4">
                <img src={I4} alt="AD" className='ad__img' />
                </div>
            </div>
        </div>
    );
}

export default Ad;