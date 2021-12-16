import styles from "./Container.module.scss";

const Container = ({ children, className }) => {
  let containerClassname = styles.container;

  if (className) {
    containerClassname = `${containerClassname} ${className}`;
  }

  return <div className={containerClassname}>{children}</div>;
};

export default Container;
