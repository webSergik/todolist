import { FC } from 'react';
import { Spin } from 'antd';

import styles from './Spiner.module.css';

export const Spiner: FC = () => (
	<div className={styles.spiner}>
		<Spin size="large" />
	</div>
);
