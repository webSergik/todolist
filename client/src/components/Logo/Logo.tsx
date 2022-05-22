import { FC } from 'react';
import { DatabaseOutlined } from '@ant-design/icons';

import styles from './Logo.module.css';

interface IProps {
	collapsed?: boolean;
}

export const Logo: FC<IProps> = ({ collapsed }) => {
	return (
		<div
			className={styles.logo}
			style={collapsed ? { paddingLeft: 28 } : { paddingLeft: 19 }}
		>
			<DatabaseOutlined className={styles['logo-img']} />
			{!collapsed && <h1 className={styles['logo-text']}>TodoList</h1>}
		</div>
	);
};
