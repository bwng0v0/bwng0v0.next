import Link from "next/link";
import "./globals.css";
import styles from './root.module.css';

export const metadata = {
  title: "bwng0v0",
  description: "Generated by bnwg0v0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav className={styles.nav}>
        <div className={styles.navleft}><Link href="/"><>bwng0v0</></Link></div>
        <div className={styles.navright}> <p>GitHub</p> </div>
        </nav>
        
        <div className={styles.box}>
        {children}
        </div>

        

        <footer className={styles.footer}>
        <div>ⓒ bwng0v0, All Rights Reserved.</div>
        </footer>
        </body>
    </html>
  );
}
