import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Container from "@components/Container";
import Button from "@components/Button";
import Products from "@data/products.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Order Online | For A Better Economy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <main>
        <Container>
          <h2>Available Cards</h2>
          <ul className={styles.products}>
            {Products.map((product) => (
              <li key={product.title}>
                <Image
                  width="864"
                  height="1200"
                  src={product.image}
                  alt={`Card for ${product.title}`}
                />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>${product.price}</p>
                <Button>Add to Cart</Button>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
