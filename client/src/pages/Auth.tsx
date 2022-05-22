import { Modal } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../components/AuthForm/AuthForm';

export const Auth: FC = () => {
	const navigate = useNavigate();
	const [isModalVisible, setIsModalVisible] = useState(true);

	const handleCancel = () => {
		setIsModalVisible(false);
		navigate('/');
	};

	return (
		<Modal footer={null} visible={isModalVisible} onCancel={handleCancel}>
			<AuthForm />
		</Modal>
	);
};
