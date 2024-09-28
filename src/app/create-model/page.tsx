// 'use client';
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Typography, Button, TextField } from '@mui/material';

// // Container コンポーネント
// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	height: 82vh;
// 	padding: 2rem;
// 	margin: 20px 0 0 0;
// `;

// // Title コンポーネント
// const Title = styled(Typography)`
// 	// Typography を styled-components で拡張
// 	&& {
// 		// Material UI のスタイルを上書きするために && を使用
// 		font-weight: bold;
// 		text-align: center;
// 		background-color: #eeeeee;
// 		padding: 1rem 2rem;
// 		border-radius: 8px;
// 		width: 65%;
// 	}
// `;

// // InputArea コンポーネント
// const InputArea = styled.div`
// 	background-color: #eeeeee;
// 	padding: 4rem 2rem;
// 	border-radius: 8px;
// 	margin-top: 1rem;
// 	text-align: center;
// 	width: 65%;
// `;

// export default function CreateModel() {
// 	const [inputText, setInputText] = useState('');

// 	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// 		setInputText(event.target.value);
// 	};

// 	return (
// 		<Container>
// 			<Title variant="h4" gutterBottom>
// 				AI使用
// 			</Title>

// 			<InputArea>
// 				<TextField
// 					fullWidth
// 					multiline
// 					rows={10}
// 					value={inputText}
// 					onChange={handleInputChange}
// 					placeholder="ここにテキストを入力してください"
// 				/>

// 				<Button variant="contained" sx={{ marginTop: '1rem' }}>
// 					送信
// 				</Button>
// 			</InputArea>
// 		</Container>
// 	);
// }

'use client';
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Typography } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 82vh;
	padding: 2rem;
	margin: 20px 0 0 0;
`;

const Title = styled(Typography)`
	&& {
		font-weight: bold;
		text-align: center;
		background-color: #eeeeee;
		padding: 1rem 2rem;
		border-radius: 8px;
		width: 65%;
	}
`;

export default function CreateModel() {
	const [inputText, setInputText] = useState('');
	const [name, setName] = useState('');
	const [model, setModel] = useState('gpt-3.5');

	const handleSubmit = async () => {
		try {
			const response = await fetch('/api/create-assistant', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, systemInstructions: inputText, model }),
			});
			const data = await response.json();
			if (response.ok) {
				console.log(`Assistant Created: ${data.assistantId}`);
			} else {
				console.error(`Error: ${data.message}`);
			}
		} catch (error) {
			console.error('Network or server error:', error);
		}
	};

	return (
		<Container>
			<Title variant="h4" gutterBottom>
				Create AI Assistant
			</Title>
			<TextField
				fullWidth
				label="Assistant Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				sx={{ marginBottom: '1rem' }}
			/>
			<TextField
				fullWidth
				select
				label="Model"
				value={model}
				onChange={(e) => setModel(e.target.value)}
				sx={{ marginBottom: '1rem' }}
			>
				<MenuItem value="gpt-4o">GPT-4o</MenuItem>
				<MenuItem value="gpt-4o-mini">GPT-4o-mini</MenuItem>
			</TextField>
			<TextField
				fullWidth
				multiline
				rows={10}
				label="System Instructions"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder="Enter system instructions here"
				sx={{ marginBottom: '1rem' }}
			/>
			<Button variant="contained" onClick={handleSubmit}>
				Create Assistant
			</Button>
		</Container>
	);
}
