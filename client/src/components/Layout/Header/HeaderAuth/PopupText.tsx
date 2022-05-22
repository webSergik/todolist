import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Space } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';

import { useAuth } from '../../../../context/auth-context';

import styles from './PopupText.module.css';

export const PopupText: FC = () => {
	const { user } = useAuth();

	return (
		<div className={styles['popup-text']}>
			<Space>
				<Avatar
					className={styles['popup-avatar']}
					size="large"
					icon={<UserOutlined />}
				/>
				<div className={styles['popup-user-info']}>
					<span>John Dow</span>
					<span>{user?.email}</span>
				</div>
			</Space>
			<Space className={styles['popup-settings']}>
				<SettingOutlined />
				<Link to="account">Settings</Link>
			</Space>
		</div>
	);
};
