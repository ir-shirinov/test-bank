import { useState, useEffect } from "react";
import { Button, Form, InputNumber, Row, Col } from "antd";

import mockApi from "../../services/mockApi";
import Card from "../../components/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  const onFinish = ({ balance }) => {
    setCards(mockApi.getCards(balance));
  };

  useEffect(() => {
    setCards(mockApi.getCards());
  }, []);

  return (
    <div>
      <Form name="filter" onFinish={onFinish}>
        <Form.Item label="Баланс больше" name="balance">
          <InputNumber min={0} max={10000} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Найти
          </Button>
        </Form.Item>
      </Form>
      <Row gutter={16}>
        {cards.map((card) => (
          <Col span={6} key={card.cardID}>
            <Card data={card} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
