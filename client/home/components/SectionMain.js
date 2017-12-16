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
                    <Item title={'已关注'} value={data.prod_total_num}/>
                </Panel>
              </Col>
              <Col lg={3}>
                <Panel header="商品信息" bsStyle="info">
                    <Item title={'上传商品'} value={data.prod_total_num}/>
                    <Item title={'上架商品'} value={data.prod_on_sale}/>
                </Panel>
              </Col>
              <Col lg={7}>
                <Panel header="订单信息" bsStyle="info">
                    <Item title={'已生成'} value={data.prod_total_num}/>
                    <Item title={'进行中'} value={data.prod_on_sale}/>
                    <Item title={'已完成'} value={data.prod_on_sale}/>
                    <Item title={'申请退款'} value={data.prod_on_sale}/>
                    <Item title={'退款完成'} value={data.prod_on_sale}/>
                </Panel>
              </Col>
            </Row>
          </Grid>
    </section>
)

export default SectionMain
