import classes from './Header.module.css';
import icon from '../../images/menu.png'
import avatar from '../../images/einstein.jpg';

// Header component

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container__buttons}>
                <div className={classes.menu__btn}>
                    <img 
                        className={classes.icon} 
                        src={icon} 
                        alt='icon'
                        />
                </div>
                    <div className={classes.profile__btn}>
                        <img 
                            className={classes.avatar}
                            src={avatar} 
                            alt="Albert Einstein" 
                            />
                    </div>
            </div>
            <h1 className={classes.heading}>Find the best <br /><span className={classes.heading__coffee}>Coffee</span> for you</h1>
        </div>
    );
};

export default Header;