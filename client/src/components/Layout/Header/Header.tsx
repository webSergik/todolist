import { FC } from 'react';
import { Layout as AntLayout, Row } from 'antd';

import { useAuth } from '../../../context/auth-context';
import { HeaderNotAuth } from './HeaderNotAuth/HeaderNotAuth';
import { HeaderAuth } from './HeaderAuth/HeaderAuth';

const { Header: AntHeader } = AntLayout;

interface IProps {
	onToggleCollapsed: () => void;
	collapsed: boolean;
}

export const Header: FC<IProps> = ({ collapsed, onToggleCollapsed }) => {
	const { user } = useAuth();

	return (
		<AntHeader>
			<Row>
				{user ? (
					<HeaderAuth
						collapsed={collapsed}
						onToggleCollapsed={onToggleCollapsed}
					/>
				) : (
					<HeaderNotAuth />
				)}
			</Row>
		</AntHeader>
	);
};
