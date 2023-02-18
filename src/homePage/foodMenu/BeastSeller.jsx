import Slider from '../../slider/Slider';
// import Selar from '../../asset/Sealer.png'
import './BeastSeller.css'

const BeastSeller = () => {
    return (
        <div className="deal">
            <div className="home__heading">
                <h3 className="home__header">Bestsellers</h3>
            </div>
            <div className="home__slider">
                <Slider>
                    {[... Array(10)].map((i, index) => (
                        <div className="Seller__card" key={index}></div>
                    ))}
                </Slider>

            </div>
        </div>
    );
}

export default BeastSeller;