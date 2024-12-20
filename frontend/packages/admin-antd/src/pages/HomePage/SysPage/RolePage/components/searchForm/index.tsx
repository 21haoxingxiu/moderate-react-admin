import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import { useState } from "react";

const AdvancedSearchForm = () => {
	const [expand, setExpand] = useState(false);
	const [form] = Form.useForm();

	const getField = () => {
		const count = expand ? 10 : 6;
		const children = [];
		for (let i = 0; i < count; i++) {
			children.push(
				<Col span={8} key={i}>
					<Form.Item
						name={`field-${i}`}
						label={`Field ${i}`}
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" />
					</Form.Item>
				</Col>,
			);
		}
		return children;
	};

	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};

	return (
		<Form form={form} onFinish={onFinish}>
			<Row gutter={24}>{getField()}</Row>
			<Row>
				<Col span={24} style={{ textAlign: "right" }}>
					<Button type="primary" htmlType="submit">
						Search
					</Button>
					<Button
						style={{ margin: "0 8px" }}
						onClick={() => {
							form.resetFields();
						}}
					>
						Clear
					</Button>
					<a
						style={{ fontSize: 12 }}
						onClick={() => {
							setExpand(!expand);
						}}
					>
						{expand ? <UpOutlined /> : <DownOutlined />} Collapse
					</a>
				</Col>
			</Row>
		</Form>
	);
};

const App = () => {
	return (
		<div style={{ marginBottom: "32px" }}>
			<AdvancedSearchForm />
		</div>
	);
};

export default App;
