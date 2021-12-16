import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@images/Logo.png";
import Container from "@components/Container";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Image
          src={Logo}
          width={200}
          height={60}
          alt="Order-Online-Logo"
          className={styles.mainLogo}
        />

        <div className={styles.iconLogo}>
          <BsCart4 />
          <p>$0.00</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
