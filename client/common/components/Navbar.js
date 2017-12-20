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
                <IndexLink className={styles.link} activeClassName={styles.active} to="/">总览</IndexLink>
                <Link className={styles.link} activeClassName={styles.active} to="/member">会员</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/cats">产品分类</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/product/0">产品</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/orders">订单</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/about">about</Link>
            </nav>
        )
    }
}

export default Navbar
