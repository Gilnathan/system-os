import Image from "next/image";
import styles from "./page.module.css";
import PageTutorial from "@/componnets/PageTutorial";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <PageTutorial />
      </main>
    </div>
  );
}
