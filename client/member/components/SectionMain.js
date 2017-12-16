import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import {Table,thead} from 'react-bootstrap';

const MemberList = ({list}) => (
    <section className={styles.sectionMain}>
        <Table responsive>
            <thead>
                <tr>
                   <th>#</th>
                   <th>会员</th>
                   <th>头像</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><img style={{width:'100px'}} src={item.headimgurl}/></td>
                    </tr>
                ))}
            </tbody>
          </Table>
    </section>
)

export default MemberList
