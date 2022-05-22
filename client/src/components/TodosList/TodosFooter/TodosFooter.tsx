import { FC, useState } from 'react';
import { Button, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { AddTodoForm } from '../../AddTodoForm/AddTodoForm';

export const TodosFooter: FC = () => {
	const [showAddForm, setShowAddForm] = useState(false);

	return (
		<Row>
			{!showAddForm && (
				<Button
					type="text"
					icon={<PlusOutlined style={{ color: '#db4c3f' }} />}
					onClick={() => setShowAddForm(true)}
				>
					Add Todo
				</Button>
			)}
			{showAddForm && <AddTodoForm />}
		</Row>
	);
};
