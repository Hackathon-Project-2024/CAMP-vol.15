"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Button, TextField } from '@mui/material';

// Container コンポーネント
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 82vh;
	padding: 2rem;
	margin: 20px 0 0 0;
`;

	// Title コンポーネント
const Title = styled(Typography)` // Typography を styled-components で拡張
	&& { // Material UI のスタイルを上書きするために && を使用
	font-weight: bold;
	text-align: center;
	background-color: #EEEEEE;
	padding: 1rem 2rem;
	border-radius: 8px;
	width: 65%;
	}
`;

	// InputArea コンポーネント
const InputArea = styled.div`
	background-color: #EEEEEE;
	padding: 4rem 2rem;
	border-radius: 8px;
	margin-top: 1rem;
	text-align: center;
	width: 65%;
`;

export default function CreateModel() {
	const [inputText, setInputText] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
	setInputText(event.target.value);
};

return (
	<Container>
		<Title variant="h4" gutterBottom> 
		AI使用
		</Title>

		<InputArea>
		<TextField
			fullWidth
			multiline
			rows={10}
			value={inputText}
			onChange={handleInputChange}
			placeholder="ここにテキストを入力してください"
		/>

		<Button variant="contained" sx={{ marginTop: '1rem' }}>
			送信
		</Button>
		</InputArea>
	</Container>
	);
}