import React from 'react'
import {Table,thead,Button} from 'react-bootstrap'
import styles from '../sass/style.scss';
import CssModules from 'react-css-modules';
import {Link} from 'react-router';

const Cats = ({list}) => (
    <Table responsive styleName="cat-wrap">
        <thead>
            <tr>
                <th>#</th>
                <th>名称</th>
                <th>图标</th>
                <th>排序值</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            {list.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><img src={item.icon}/></td>
                    <td>{item.sort}</td>
                    <td><Link to="/product"><Button bsStyle="info">商品管理</Button></Link></td>
                </tr>
            ))}
        </tbody>
      </Table>
)

export default CssModules(Cats,styles)
