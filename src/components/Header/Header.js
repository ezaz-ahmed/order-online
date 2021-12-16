import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@images/Logo.png";

const Header = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <Image src={Logo} width={200} height={60} alt="Order-Online-Logo" />
      </div>
      <p>$0.00</p>
    </header>
  );
};

export default Header;
