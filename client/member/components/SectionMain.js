import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import {Table,thead} from 'react-bootstrap';

const MemberList = ({list = []}) => (
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
                    <tr key = {'member_id' + item.id}>
                      <td>{item.id}</td>
                      <td>{item.nickname}</td>
                      <td><img style={{width:'100px'}} src={item.avatarUrl}/></td>
                    </tr>
                ))}
            </tbody>
          </Table>
    </section>
)

export default MemberList
