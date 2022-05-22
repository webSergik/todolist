import { FC } from 'react';
import { Checkbox, List, Typography } from 'antd';

import { ITodos } from '../../pages/Today';
import { TodosHeader } from './TodosHeader/TodosHeader';
import { TodosFooter } from './TodosFooter/TodosFooter';

const { Paragraph } = Typography;

interface IProps {
	todos: ITodos[];
}

export const TodosList: FC<IProps> = ({ todos }) => {
	return (
		<List
			header={<TodosHeader />}
			footer={<TodosFooter />}
			dataSource={todos}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Checkbox />}
						title={item.title}
						style={{ overflow: 'hidden' }}
						description={
							<Paragraph
								ellipsis={{
									rows: 3,
									expandable: true,
									symbol: 'more',
									onExpand: (event) => console.log(event),
								}}
							>
								{item.description}
							</Paragraph>
						}
					/>
				</List.Item>
			)}
		/>
		// <div>
		// 	{todos.map((todo) => (
		// 		<div key={todo._id}>{todo.title}</div>
		// 	))}
		// </div>
	);
};
