// pages/doc-manager/index.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from '../../styles/meetingSummaries.module.css';

const MeetingSummaries: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    
    console.log("MeetingSummaries useEffect");
  }, []);

  return (
    <div className={styles.container}>
      <h1>MeetingSummaries</h1>
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

export default MeetingSummaries;