import styles from "./page.module.css";
import { Toggle } from "./components/common";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center} style={{ flexDirection: "column" }}>
        <Toggle />
        <Toggle variant="red" />
      </div>
    </main>
  );
}
