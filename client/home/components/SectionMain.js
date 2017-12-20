import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import Item from './item';
import {Panel,Grid,Row,Col} from 'react-bootstrap';

const SectionMain = ({data}) => (
    <section className={styles.sectionMain}>
        <Grid>
            <Row className="show-grid">
              <Col lg={2}>
                <Panel header="会员信息" bsStyle="info">
                    <Item title={'已关注'} value={data.user_count}/>
                </Panel>
              </Col>
              <Col lg={3}>
                <Panel header="商品信息" bsStyle="info">
                    <Item title={'上传商品'} value={data.total_count}/>
                    <Item title={'上架商品'} value={data.on_sale}/>
                </Panel>
              </Col>
              <Col lg={7}>
                <Panel header="订单信息" bsStyle="info">
                    <Item title={'未付款'} value={data.order_status1}/>
                    <Item title={'已付款'} value={data.order_status2}/>
                    <Item title={'已发货'} value={data.order_status3}/>
                    <Item title={'库存不足'} value={data.order_status4}/>
                </Panel>
              </Col>
            </Row>
          </Grid>
    </section>
)

export default SectionMain
