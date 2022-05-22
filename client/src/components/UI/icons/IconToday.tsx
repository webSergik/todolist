export const IconToday = () => {
	return (
		<span
			role="img"
			aria-label="field-time"
			className="anticon anticon-field-time ant-menu-item-icon"
			style={{ color: '#058527' }}
		>
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				transform="scale(2.2)"
				focusable="false"
				data-icon="user"
				fill="currentColor"
				aria-hidden="true"
			>
				<g fill="currentColor" fillRule="evenodd">
					<path
						fillRule="nonzero"
						d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
						opacity=".1"
					></path>
					<path
						fillRule="nonzero"
						d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
					></path>
					<text
						fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
						fontSize="9"
						transform="translate(4 2)"
						fontWeight="500"
					>
						<tspan x="8" y="15" textAnchor="middle">
							10
						</tspan>
					</text>
				</g>
			</svg>
		</span>
	);
};
