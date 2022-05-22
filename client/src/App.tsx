import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Spiner } from './components/UI/Spiner/Spiner';
import { useAuth } from './context/auth-context';
import { Filters } from './pages/Filters';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Today } from './pages/Today';
import { Upcoming } from './pages/Upcoming';

function App() {
	const { loadingInitial, user } = useAuth();

	if (loadingInitial) return <Spiner />;

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{!user && <Route index element={<Home />} />}
				{user && <Route path="todos/today" element={<Today />} />}
				<Route path="todos/upcoming" element={<Upcoming />} />
				<Route path="todos/filters" element={<Filters />} />
			</Route>
			<Route path="auth/login" element={<Auth />} />
			<Route path="auth/signup" element={<Auth />} />
		</Routes>
	);
}

export default App;
