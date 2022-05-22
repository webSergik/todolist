import { useState, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Layout as AntLayout, Menu, Row } from 'antd';

import { items } from './menu-items';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { Logo } from '../Logo/Logo';
import { useAuth } from '../../context/auth-context';

const { Sider, Content } = AntLayout;

export const Layout: FC = () => {
	const { user } = useAuth();
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<AntLayout className={styles.layout}>
			{user && (
				<Sider trigger={null} collapsible collapsed={collapsed} width="25%">
					<Logo collapsed={collapsed} />
					<div className={styles.menu}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['today']}
							defaultOpenKeys={['today']}
							items={items}
						/>
					</div>
				</Sider>
			)}
			<AntLayout>
				<Header onToggleCollapsed={toggleCollapsed} collapsed={collapsed} />
				<Row className={styles['row-content']}>
					<Col flex="auto">
						<Content className={styles.content}>
							<Outlet />
						</Content>
					</Col>
				</Row>
			</AntLayout>
		</AntLayout>
	);
};
