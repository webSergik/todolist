import { TodosList } from '../components/TodosList/TodosList';

export interface ITodos {
	_id: string;
	created_by_id: string;
	title: string;
	description: string;
	completed: boolean;
	expires_date: Date | null;
	tags: string[];
	priority: string;
}

const DUMMY_TODOS: ITodos[] = [
	{
		_id: '1',
		created_by_id: '11', // кто добавил
		title: 'title1',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. !!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic.',
		completed: false,
		expires_date: null, // Дата выполнения если без срока то null
		tags: [], // Тэги
		priority: 'hight', // Приоритет - высокий, низкий, нормальный по умолчанию, High, Medium, Low
	},
	{
		_id: '2',
		created_by_id: '11',
		title: 'title 2',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. !!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic.',
		completed: false,
		expires_date: null,
		tags: [],
		priority: 'low',
	},
	{
		_id: '3',
		created_by_id: '11',
		title: 'title 3',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic. !!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla quo culpa vitae laboriosam dolorum aliquid, sapiente perspiciatis ad soluta velit sunt minus. Fuga eum, magnam asperiores nisi voluptates hic.',
		completed: false,
		expires_date: null,
		tags: [],
		priority: 'medium',
	},
];

export const Today = () => {
	return (
		<>
			<TodosList todos={DUMMY_TODOS} />
		</>
	);
};
