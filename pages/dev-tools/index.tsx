// pages/doc-manager/index.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from '../../styles/devTools.module.css';

const DevTools: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    
    console.log("DevTools useEffect");
  }, []);

  return (
    <div className={styles.container}>
      <h1>DevTools</h1>
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

export default DevTools;