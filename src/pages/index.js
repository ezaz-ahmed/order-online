import Head from "next/head";
import styles from "@styles/Home.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Container from "@components/Container";

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
          <h1>Online Order</h1>
          <h2>Available Cards</h2>
          <ul>
            <li>
              <img src="" alt="" />
              <h3>Product Name</h3>
              <p>$99.99</p>
              <button>Add to Cart</button>
            </li>
          </ul>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
