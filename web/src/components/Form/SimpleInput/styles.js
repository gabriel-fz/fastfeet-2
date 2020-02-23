import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const UnInput = styled.input`
	padding: 12px 15px;

	font-size: 16px;
	color: #444;
	border-radius: 4px;

	&::placeholder {
		color: #999;
	}

	height: 45px;
	border: 1px solid #ddd;
`;

export const Error = styled.span`
	color: ${colors.danger};
	margin-top: 8px;
`;

export const Label = styled.label`
	color: #444;
	font-weight: bold;

	text-align: left;
	margin-bottom: 9px;
`;