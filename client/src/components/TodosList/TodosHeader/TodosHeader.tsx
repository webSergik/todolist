import { FC } from 'react';
import { Button, Col, Row } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { getFormatedDate } from '../../../utils/getFormatedDate';

export const TodosHeader: FC = () => {
	return (
		<Row justify="space-between">
			<Col>
				<h3 style={{ display: 'inline-flex', marginRight: 8 }}>Today</h3>
				{getFormatedDate}
			</Col>
			<Col>
				<Button type="text" icon={<MoreOutlined />}>
					Sort By
				</Button>
			</Col>
		</Row>
	);
};
