// src/app/_component/TextToSpeech.tsx
'use client';

import { Box, Typography } from '@mui/material';

interface TextToSpeechProps {
	voiceId: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			padding={10}
		>
			<Typography variant="h6">音声モデルの生成が完了しました</Typography>
		</Box>
	);
};

export default TextToSpeech;

// app/_component/TextToSpeech.tsx
// "use client";

// import { useState } from 'react';

// interface TextToSpeechProps {
//   voiceId?: string;
// }

// function TextToSpeech({ voiceId }: TextToSpeechProps) {
//   const [text, setText] = useState('');
//   const [audioUrl, setAudioUrl] = useState('');

//   // デフォルトの voiceId を設定
//   const defaultVoiceId = '21m00Tcm4TlvDq8ikWAM'; // ElevenLabs のデフォルト音声ID
//   const usedVoiceId = voiceId || defaultVoiceId;

//   const synthesizeSpeech = async () => {
//     try {
//       const response = await fetch('/api/synthesize-speech', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text, voiceId: usedVoiceId }),
//       });

//       if (!response.ok) {
//         console.error('音声合成に失敗しました');
//         return;
//       }

//       const blob = await response.blob();
//       const url = URL.createObjectURL(blob);
//       setAudioUrl(url);
//     } catch (error) {
//       console.error('エラーが発生しました:', error);
//     }
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="テキストを入力してください"
//       />
//       <button onClick={synthesizeSpeech}>音声合成</button>
//       {audioUrl && <audio src={audioUrl} controls />}
//     </div>
//   );
// }

// export default TextToSpeech;
