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
                <th>所属分类</th>
                <th>价格</th>
                <th>LOGO</th>
                <th>销售数量</th>
                <th>库存</th>
                <th>是否上架</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            {list.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.cat.name}</td>
                    <td>{item.price}</td>
                    <td><img src={item.logo}/></td>
                    <td>{item.sales_count}</td>
                    <td>{item.number}</td>
                    <td>{item.is_on_sale == 1 ? '是' : '否'}</td>
                    <td><Link to={"/pdetail/"+item.id}><Button bsStyle="info">商品管理</Button></Link></td>
                </tr>
            ))}
        </tbody>
      </Table>
)

export default CssModules(Cats,styles)
