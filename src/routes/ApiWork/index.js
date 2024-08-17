import React, { useState, useEffect } from "react";
import { Row, Col, Spin, Typography, Card } from "antd";
import Widget from "../../components/Widget"; // Adjust path as needed

const { Title, Paragraph } = Typography;

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    fetch("https://localhost:7201/api/Products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title level={1} className="mb-6 text-2xl font-bold">
        Data from API
      </Title>
      <Row gutter={16}>
        {data.map((item) => (
          <Col span={24} md={12} lg={8} key={item.id}>
            <Card
              title={item.name}
              extra={
                <span className="text-lg font-semibold">
                  {item.price.toFixed(2)} USD
                </span>
              }
              style={{
                marginBottom: 10,
              }}
            >
              <Paragraph className="mb-2">
                <strong className="font-medium">ID:</strong> {item.id}
              </Paragraph>
              <Paragraph className="mb-2">
                <strong className="font-medium">SKU:</strong> {item.sku}
              </Paragraph>
              <Paragraph className="mb-2">
                <strong className="font-medium">Description:</strong>{" "}
                {item.description || "No description available"}
              </Paragraph>
              <Paragraph className="mb-2">
                <strong className="font-medium">Available:</strong>{" "}
                {item.isAvailable ? "Yes" : "No"}
              </Paragraph>
              <Paragraph className="mb-2">
                <strong className="font-medium">Category ID:</strong>{" "}
                {item.categoryId}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DataFetcher;
