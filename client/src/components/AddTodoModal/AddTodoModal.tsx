import { FC, useState } from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { AddTodoForm } from '../AddTodoForm/AddTodoForm';

import styles from './AddTodoModal.module.css';

export const AddTodoModal: FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<Button
				type="text"
				icon={<PlusOutlined className={styles['icon-add']} />}
				onClick={showModal}
				className={styles['button-add']}
			/>
			<Modal
				title="Add todo"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				width="60rem"
			>
				<AddTodoForm />
			</Modal>
		</>
	);
};
