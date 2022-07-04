import Link from 'next/link'
import { withRouter } from 'next/router'
import styles from '../styles/Home.module.css'

function NavList({ children, href, router }) {
    return (
        <li className={router.pathname === href ? styles.active : ''}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

export default withRouter(NavList)