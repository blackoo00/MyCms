import React, {Component} from 'react'
import styles from '../sass/Header'
import imgAvatar from '../assets/avatar.png'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        const {account} = this.props;
        return (
            <header className={styles.header}>
                <div className={styles.left}>
                    <span className={styles.span}>后台管理</span>
                </div>
                <div className={styles.right}>
                    <span className={styles.description}>Hello, {account}！</span>
                    <img className={styles.img} src={imgAvatar}/>
                </div>
            </header>
        )
    }
}

export default Header
