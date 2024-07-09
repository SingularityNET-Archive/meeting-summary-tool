// pages/doc-manager/index.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from '../../styles/workgroup.module.css';

const WorkGroup: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    
    console.log("WorkGroup useEffect");
  }, []);

  return (
    <div className={styles.container}>
      <h1>Workgroups</h1>
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

export default WorkGroup;