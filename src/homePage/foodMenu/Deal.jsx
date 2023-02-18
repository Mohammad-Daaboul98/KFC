import Slider from '../../slider/Slider';
import Meal from '../../asset/deal.png'
import './Deals.css'

const Deals = ({ deals }) => {
    return (
        <div className="deal">
            <div className="home__heading">
                <h3 className="home__header">TOP DEALS ✨</h3>
            </div>
            <div className="home__slider">
                <Slider>
                    {deals.map(deal => (
                        <div className="deal__card" key={deal.id} >
                            <div className="deal__box">
                                <img src={Meal} alt="food" className="deal__photo" />
                            </div>

                            <div className="deal__heading">
                                <span className='deal__like glyphicon glyphicon-heart-empty'></span>
                                <h3 className="deal__header">
                                    {deal.Deal_Meal}
                                </h3>
                                <p className="deal__paragraph">{deal.Deal_item}</p>
                                <button className="deal__price">{deal.Deal_price} QAR</button>
                            </div>

                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    );
}

export default Deals;