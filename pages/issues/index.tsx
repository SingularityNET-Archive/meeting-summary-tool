// pages/doc-manager/index.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from '../../styles/issues.module.css';

const Issues: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    
    console.log("Issues useEffect");
  }, []);

  return (
    <div className={styles.container}>
      <h1>Issues</h1>
      {loading ? (
        <p>Loading documents...</p>
      ) : (
        <>
          <div className={styles.buttonGroup}>
            test
          </div>
        </>
      )}
    </div>
  );
};

export default Issues;