import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <h1>Web Technologies I</h1>
      <p>Welcome 👋</p>

      <div className={styles.card}>
        <p>
          <strong>Name:</strong> Fayaz Hussain
        </p>
        <p>
          <strong>Section:</strong> BSCS-8 taking classes with BSCS-6 section A 
        </p>
        <p>
          <strong>Project:</strong> not yet decided 
        </p>
      </div>
    </div>
  );
}
