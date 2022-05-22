import { FC, useState } from 'react';
import {
	Button,
	Col,
	DatePicker,
	Form,
	Input,
	Row,
	Select,
	Space,
	Tag,
} from 'antd';
import moment from 'moment';

import { PopoverPriority } from './PopoverPriority/PopoverPriority';

import styles from './AddTodoForm.module.css';

export const AddTodoForm: FC = (props) => {
	const [form] = Form.useForm();
	const [tags, setTags] = useState([]);

	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onReset = () => {
		form.resetFields();
	};

	const getTagsValue = () => {
		const tags = form.getFieldValue('tags');
		setTags(tags);
	};

	return (
		<Form
			form={form}
			name="add-todo"
			initialValues={{ expires_date: moment(), priority: 'normal', tags: tags }}
			onFinish={onFinish}
			// onFinishFailed={onFinishFailed}
			autoComplete="off"
			className={styles.form}
		>
			<div className={styles['form-wrapper']}>
				<Row justify="space-between">
					<Col span={14}>
						<Form.Item
							name="title"
							rules={[{ required: true, message: 'Please input title' }]}
							className={styles.title}
						>
							<Input bordered={false} placeholder="Title" />
						</Form.Item>
					</Col>
					<Col span={10} className={styles.tag}>
						{tags.map((tag) => (
							<Tag key={tag}>{`#${tag}`}</Tag>
						))}
					</Col>
				</Row>

				<Form.Item
					name="description"
					rules={[{ required: true, message: 'Please input description' }]}
				>
					<Input.TextArea autoSize bordered={false} placeholder="description" />
				</Form.Item>
				<Row justify="space-between" className={styles['footer-wrapper']}>
					<Col span={14}>
						<Form.Item name="expires_date">
							<DatePicker />
						</Form.Item>
					</Col>
					<Col span={10}>
						<div className={styles['add-tag']}>
							<Form.Item name="tags">
								<Select
									className={styles['tag-select']}
									onChange={getTagsValue}
									mode="tags"
									placeholder="Input Tag name"
								/>
							</Form.Item>
							<PopoverPriority />
						</div>
					</Col>
				</Row>
			</div>
			<Form.Item className={styles['action-button']}>
				<Space>
					<Button type="primary" htmlType="submit">
						Add Todo
					</Button>
					<Button htmlType="button" onClick={onReset}>
						Reset
					</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};
