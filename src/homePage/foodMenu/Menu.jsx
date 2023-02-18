import Slider from '../../slider/Slider';
import Meal from '../../asset/meal.png'
import './Menu.css'



const Menu = ({ meals }) => {

    return (
        <div className="menu">
            <div className="home__heading">
                <h3 className="home__header">Exploer Menu 🍗</h3>
            </div>
            <div className="home__slider">
                <Slider>
                    {meals.map(meal => (
                        <div className="menu__card" key={meal.id} >
                            <div className="menu__box">
                                <img src={Meal} alt="food" className="menu__photo" />
                            </div>
                            <div className="menu__heading">
                                <h3 className="menu__paragraph">
                                    {meal.Menu}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
            <svg className="svg">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.5 C0,0.224,0.219,0,0.489,0 H0.547 C0.797,0,1,0.207,1,0.462 V0.93 C1,0.969,0.969,1,0.932,1 H0.489 C0.219,1,0,0.776,0,0.5"></path>
                </clipPath>
            </svg>
        </div>

    );
}

export default Menu;