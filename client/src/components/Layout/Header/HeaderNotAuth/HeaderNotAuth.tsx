import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

import { Logo } from '../../../Logo/Logo';

import styles from './HeaderNotAuth.module.css';

export const HeaderNotAuth: FC = (props) => {
	return (
		<div className={styles.header}>
			<Logo />
			<Space className={styles['auth-button']}>
				<Button type="text" size="large">
					<Link to="auth/login">Login</Link>
				</Button>
				<Button type="text" size="large">
					<Link to="auth/signup">Sign Up</Link>
				</Button>
			</Space>
		</div>
	);
};
