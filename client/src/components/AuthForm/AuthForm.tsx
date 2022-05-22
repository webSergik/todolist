import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { useAuth } from '../../context/auth-context';

import styles from './AuthForm.module.css';

export const AuthForm: FC = () => {
	const location = useLocation();

	const { login, signUp, error, loading } = useAuth();
	const path = location.pathname.split('/').pop();
	const isLogin = path === 'login' ? true : false;

	useEffect(() => {
		if (error) {
			message.error(`Error: ${error}`);
		}
	}, [error]);

	const onFinish = (values: any) => {
		const { email, password } = values;

		if (isLogin) {
			login(email, password);
		} else {
			signUp(email, password);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					name="email"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input prefix={<MailOutlined />} type="email" placeholder="Email" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password
						prefix={<LockOutlined />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Button
						className={styles['button-submit']}
						type="primary"
						size="large"
						htmlType="submit"
						disabled={loading}
						loading={loading}
					>
						{isLogin ? 'Login' : 'Sign up with Email'}
					</Button>
					<div className={styles['form-footer']}>
						<span>
							{isLogin ? "Don't have an account?" : 'Already signed up?'}
						</span>
						<Link to={isLogin ? '/auth/signup' : '/auth/login'} replace={true}>
							{isLogin ? 'Sign Up' : 'Go to login'}
						</Link>
					</div>
				</Form.Item>
			</Form>
		</>
	);
};
