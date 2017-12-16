import React from 'react';
import styles from '../sass/SectionMain'
import CSSModules from 'react-css-modules';

const App = ({title,value}) =>(
    <section styleName="section-item">
        <p styleName="section-item-title">{title}</p>
        <p styleName="section-item-value">{value}</p>
    </section>
)

export default CSSModules(App,styles)
