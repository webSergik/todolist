import React, { FC, useState } from 'react';
import { Button, Form, Popover, Radio, Space, RadioChangeEvent } from 'antd';
import { FlagOutlined } from '@ant-design/icons';

import styles from './PopoverPriority.module.css';

const priorityMapColor: any = {
	important: '#f50',
	normal: '#87d068',
	low: '',
};

export const PopoverPriority: FC = () => {
	const [visible, setVisible] = useState(false);
	const [priority, setPriority] = useState('normal');

	const changePriority = (e: RadioChangeEvent) => {
		setPriority(e.target.value);
		setVisible(false);
	};

	const popoverContent = (
		<Form.Item name="priority">
			<Radio.Group
				onChange={changePriority}
				className={styles['popover-content']}
			>
				<Space direction="vertical">
					<Radio.Button value="important">Important</Radio.Button>
					<Radio.Button value="normal">Normal</Radio.Button>
					<Radio.Button value="low">Low</Radio.Button>
				</Space>
			</Radio.Group>
		</Form.Item>
	);

	return (
		<Popover
			onVisibleChange={() => setVisible(true)}
			content={popoverContent}
			trigger="click"
			visible={visible}
			className={styles.popover}
		>
			<Button
				type="text"
				icon={<FlagOutlined />}
				style={{ color: `${priorityMapColor[priority]}` }}
			/>
		</Popover>
	);
};
