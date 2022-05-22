import { FC } from 'react';
import { MenuProps, Menu } from 'antd';
import { LogoutOutlined, BgColorsOutlined } from '@ant-design/icons';

import { useAuth } from '../../../../context/auth-context';

import styles from './PopupContent.module.css';

export const PopupContent: FC = () => {
	const { logout } = useAuth();

	const items: MenuProps['items'] = [
		{
			label: (
				<div className={styles['menu-items']}>
					<BgColorsOutlined />
					<span>Theme</span>
				</div>
			),
			key: 'theme',
		},
		{
			label: (
				<div
					className={[
						styles['menu-items'],
						styles['menu-items__border-top'],
					].join(' ')}
				>
					<LogoutOutlined />
					<span onClick={logout}>Logout</span>
				</div>
			),
			key: 'logout',
		},
	];
	return (
		<div className={styles.popover}>
			<Menu items={items} />
		</div>
	);
};
