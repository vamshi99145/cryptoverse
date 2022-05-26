import React from 'react';
// eslint-disable-next-line
import millify from 'millify';
// eslint-disable-next-line
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
// eslint-disable-next-line
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';
// eslint-disable-next-line
const { Text } = Typography;
// eslint-disable-next-line
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  // eslint-disable-next-line
  const exchangesList = data?.data?.exchanges;
 // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {/* {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))} */}
      </Row>
    </>
  );
};

export default Exchanges;
