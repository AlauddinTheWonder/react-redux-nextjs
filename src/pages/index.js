import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p><a href="https://nextjs.org/docs/getting-started" target="_blank" rel="noreferrer">Documentation</a></p>
    </div>
  )
}
