import { useState } from "react";
import type { NextPage } from "next";
import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      Ola
    </div>
  );
};

export default Home;