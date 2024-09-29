// src/components/TextToSpeech.tsx
'use client';

import { Box, Typography } from '@mui/material';

interface TextToSpeechProps {
	voiceId: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ voiceId }) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			padding={2}
			bgcolor="#f5f5f5"
			borderRadius="8px"
		>
			<Typography variant="h6">
				音声モデルの生成が完了しました: {voiceId}
			</Typography>
		</Box>
	);
};

export default TextToSpeech;
