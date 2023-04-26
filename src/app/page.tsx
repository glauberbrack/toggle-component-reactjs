import styles from "./page.module.css";
import { Switch } from "./components/common";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Switch variant="blue" />
      </div>
    </main>
  );
}
