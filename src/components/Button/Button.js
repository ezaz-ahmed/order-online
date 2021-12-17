import styles from "./Button.module.scss";

const Button = ({ children, className }) => {
  let buttonClassname = styles.button;

  if (className) {
    buttonClassname = `${buttonClassname} ${className}`;
  }

  return (
    <div className={buttonClassname}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
