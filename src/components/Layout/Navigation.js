import classes from './Navigation.module.css';
import iconHome from '../../images/home.jpg';
import iconCart from '../../images/cart.jpg'
import iconHeart from '../../images/heart.jpg'
import iconBell from '../../images/bell.jpg';

// Navigation bar at the bottom of the app

const Navigation = () => {
    return (
        <div className={classes.container}>
            <img 
                src={iconHome} 
                className={classes.icons} 
                alt="home" 
                />
            <img 
                src={iconCart} 
                className={classes.icons} 
                alt="cart" 
                />
            <img 
                src={iconHeart} 
                className={classes.icons} 
                alt="favourites" 
                />
            <img 
                src={iconBell} 
                className={classes.icons} 
                alt="notifications" 
                />
        </div>
    );
};

export default Navigation;