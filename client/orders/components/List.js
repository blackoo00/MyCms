import React from 'react'
import {Button, Table, thead} from 'react-bootstrap'
import styles from '../sass/style.scss';
import CssModules from 'react-css-modules';

const Cats = ({list}) => (
    <Table responsive styleName="cat-wrap">
        <thead>
            <tr>
                <th>#</th>
                <th>订单编号</th>
                <th>商品</th>
                <th>下单人</th>
                <th>收件人</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            {list.map(item => (
                <tr key={'order_'+item.id}>
                    <td>{item.id}</td>
                    <td>{item.order_no}</td>
                    <td>{item.snap_name}</td>
                    <td>{item.nickname}</td>
                    <td>{item.nickname}</td>
                    <td>{item.total_price}</td>
                    <td><Button bsStyle="info">详情</Button></td>
                </tr>
            ))}
        </tbody>
      </Table>
)

export default CssModules(Cats,styles)
