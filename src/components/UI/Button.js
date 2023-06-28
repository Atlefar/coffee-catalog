import classes from './Button.module.css';

// Reusable button component

const Button = (props) => {
    return (
        <button className={classes.btn}>{props.children}</button>
    );
};

export default Button;