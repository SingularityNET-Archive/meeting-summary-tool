// pages/doc-manager/index.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from '../../styles/templateEditor.module.css';

const TemplateEditor: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    
    console.log("Template Editor useEffect");
  }, []);

  return (
    <div className={styles.container}>
      <h1>Template Editor</h1>
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

export default TemplateEditor;