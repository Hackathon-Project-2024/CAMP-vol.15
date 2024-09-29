// src/pages/ai-assistant.tsx
'use client';

import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Recorder from './_components/Recorder';
import TextToSpeech from './_components/TextToSpeech';
import CreateModel from './_components/CreateModel';
import ApiAi from './_components/ApiAi'; // 新規作成した ApiAi コンポーネントをインポート

const AiAssistantPage = () => {
	const [voiceId, setVoiceId] = useState<string>('');

	const handleVoiceIdReceived = (id: string) => {
		setVoiceId(id);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				padding: '2rem',
				height: '100vh',
				boxSizing: 'border-box',
			}}
		>
			<Grid container spacing={2} sx={{ height: '100%' }}>
				{/* 左側: 30% */}
				<Grid
					item
					xs={12}
					md={4}
					sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
				>
					{/* 上部: Recorder */}
					<Box sx={{ flex: '1 1 auto' }}>
						<Typography variant="h5" gutterBottom>
							音声録音
						</Typography>
						{!voiceId ? (
							<Recorder onVoiceIdReceived={handleVoiceIdReceived} />
						) : (
							<TextToSpeech voiceId={voiceId} />
						)}
					</Box>

					{/* 下部: CreateModel */}
					<Box sx={{ flex: '1 1 auto' }}>
						<Typography variant="h5" gutterBottom>
							モデル作成
						</Typography>
						<CreateModel />
					</Box>
				</Grid>

				{/* 右側: 70% */}
				<Grid
					item
					xs={12}
					md={8}
					sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
				>
					<Typography variant="h5" gutterBottom>
						AI インターフェース
					</Typography>
					<ApiAi />
				</Grid>
			</Grid>
		</Box>
	);
};

export default AiAssistantPage;
