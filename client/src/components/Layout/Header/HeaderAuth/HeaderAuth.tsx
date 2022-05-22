import { FC } from 'react';
import { Input, Popover, Avatar } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

import { PopupText } from './PopupText';
import { PopupContent } from './PopupContent';
import { AddTodoModal } from '../../../AddTodoModal/AddTodoModal';

import styles from './HeaderAuth.module.css';

interface IProps {
	onToggleCollapsed: () => void;
	collapsed: boolean;
}

export const HeaderAuth: FC<IProps> = ({ collapsed, onToggleCollapsed }) => {
	return (
		<div className={styles['header-auth']}>
			<div className={styles['menu-icon']}>
				{!collapsed ? (
					<MenuFoldOutlined onClick={onToggleCollapsed} />
				) : (
					<MenuUnfoldOutlined onClick={onToggleCollapsed} />
				)}
				<div className={styles.searchbox}>
					<Input
						placeholder="Search"
						prefix={<SearchOutlined />}
						bordered={false}
					/>
				</div>
			</div>
			<div className={styles['header-auth-right']}>
				<AddTodoModal />
				<Popover
					placement="bottomLeft"
					title={<PopupText />}
					content={<PopupContent />}
				>
					<Avatar className={styles['header-icon']} icon={<UserOutlined />} />
				</Popover>
			</div>
		</div>
	);
};
