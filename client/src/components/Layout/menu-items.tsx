import { Link } from 'react-router-dom';
import { MenuProps } from 'antd';

import { IconFilters, IconToday, IconUpcoming } from '../UI/icons';

export const items: MenuProps['items'] = [
	{
		label: <Link to="todos/today">Today</Link>,
		key: 'today',
		icon: <IconToday />,
	},
	{
		label: <Link to="/todos/upcoming">Upcoming</Link>,
		key: 'upcoming',
		icon: <IconUpcoming />,
	},
	{
		label: <Link to="/todos/filters">Filters and labels</Link>,
		key: 'filters@labels',
		icon: <IconFilters />,
	},
];
