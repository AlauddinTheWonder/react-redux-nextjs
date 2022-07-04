import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function FourOhFour() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <br />
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
