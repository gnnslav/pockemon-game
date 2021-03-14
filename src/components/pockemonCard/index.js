import { useState } from 'react';
import './style.css';
import cardBackImg from '../../assets/images/card-back-side.jpg';

const PockemonCard = ({item})=>{
    const {type, img, name, id, values} = item;
    const [isActive, setActive] = useState(false);
    
    const handleClick = ()=> setActive(isActive ? false : true);

    return(
        <div className="pockemon-root" onClick={handleClick}>
            <div className={`pokemonCard ${isActive ? ' active' : ''}`}>
                <div className="cardFront">
                    <div className="wrap front">
                        <div className={`pokemon ${type}`}>
                            <div className="values">
                                <div className="count top">{values.top}</div>
                                <div className="count right">{values.right}</div>
                                <div className="count bottom">{values.bottom}</div>
                                <div className="count left">{values.left}</div>
                            </div>
                            <div className="imgContainer">
                                <img src={img} alt={name} />
                            </div>
                            <div className="info">
                                <span className="number">#{id}</span>
                                <h3 className="name">{name}</h3>
                                <small className="type">Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cardBack">
                    <div className="wrap back">
                        <img src={cardBackImg} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PockemonCard;