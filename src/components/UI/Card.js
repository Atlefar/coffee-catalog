import classes from './Card.module.css';
import star from '../../images/star1.png';
import Button from './Button';

// Reusable Card component

const Card = (props) => {
    return (
        <div className={classes.card} id={props.id}>
                <img 
                    src={props.image} 
                    className={classes.image} 
                    alt="cup of coffee" 
                    />
                <div className={classes.rating}>
                    <img 
                        src={star} 
                        className={classes.star__icon} 
                        alt="star" 
                        />
                    <p>{props.rating}</p>
                </div>
                <h3>{props.name}</h3>
                <p>{props.temp}</p>
                <div className={classes.bottom__container}>
                    <h2><span className={classes.currency}>{props.currency} </span>{props.price}</h2>
                    <Button>+</Button>
                </div>
         </div>
    );
};

export default Card;