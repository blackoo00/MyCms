import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '../sass/Navbar'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <nav className={styles.navbar}>
                <IndexLink className={styles.link} activeClassName={styles.active} to="/">home</IndexLink>
                <Link className={styles.link} activeClassName={styles.active} to="/member">member</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/cats">cats</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/product/0">product</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/orders">orders</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/explore">explore</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/about">about</Link>
            </nav>
        )
    }
}

export default Navbar
