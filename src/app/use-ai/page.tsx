// 'use client';
// import React, { useState } from 'react';
// import { SelectChangeEvent } from '@mui/material';
// import {
// 	Box,
// 	FormControl,
// 	InputLabel,
// 	Select,
// 	MenuItem,
// 	TextField,
// 	Button,
// } from '@mui/material';

// export default function UseAi() {
// 	const [voiceModel, setVoiceModel] = useState('');
// 	const [textModel, setTextModel] = useState('');

// 	const handleVoiceModelChange = (event: SelectChangeEvent<string>) => {
// 		setVoiceModel(event.target.value);
// 	};

// 	const handleTextModelChange = (event: SelectChangeEvent<string>) => {
// 		setTextModel(event.target.value);
// 	};

// 	return (
// 		<Box
// 			sx={{
// 				display: 'flex',
// 				flexDirection: 'column',
// 				height: '82vh',
// 				padding: '2rem',
// 				justifyContent: 'flex-end', // 下寄せ
// 				alignItems: 'center',
// 			}}
// 		>
// 			{/* モデル選択エリア */}
// 			<Box
// 				sx={{
// 					maxWidth: '1200px',
// 					width: '100%',
// 					display: 'flex',
// 					gap: '1rem', // 要素間の隙間
// 					marginBottom: '1rem', // チャット入力エリアとの間隔
// 				}}
// 			>
// 				{/* 音声モデル選択 */}
// 				<FormControl fullWidth>
// 					<InputLabel id="voice-model-label">音声モデル</InputLabel>
// 					<Select
// 						labelId="voice-model-label"
// 						id="voice-model"
// 						value={voiceModel}
// 						label="音声モデル"
// 						onChange={handleVoiceModelChange}
// 					>
// 						<MenuItem value="modelA">モデルA</MenuItem>
// 						<MenuItem value="modelB">モデルB</MenuItem>
// 						{/* 必要なだけモデルを追加 */}
// 					</Select>
// 				</FormControl>

// 				{/* テキストモデル選択 */}
// 				<FormControl fullWidth>
// 					<InputLabel id="text-model-label">テキストモデル</InputLabel>
// 					<Select
// 						labelId="text-model-label"
// 						id="text-model"
// 						value={textModel}
// 						label="テキストモデル"
// 						onChange={handleTextModelChange}
// 					>
// 						<MenuItem value="modelC">モデルC</MenuItem>
// 						<MenuItem value="modelD">モデルD</MenuItem>
// 						{/* 必要なだけモデルを追加 */}
// 					</Select>
// 				</FormControl>
// 			</Box>

// 			{/* チャット入力エリア */}
// 			<Box
// 				sx={{
// 					display: 'flex',
// 					gap: '1rem',
// 					maxWidth: '1200px',
// 					width: '100%',
// 				}}
// 			>
// 				<TextField fullWidth label="メッセージを入力" multiline rows={1} />
// 				<Button variant="contained">送信</Button>
// 			</Box>
// 		</Box>
// 	);
// }

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { SelectChangeEvent } from '@mui/material';
// import {
// 	Box,
// 	FormControl,
// 	InputLabel,
// 	Select,
// 	MenuItem,
// 	TextField,
// 	Button,
// } from '@mui/material';

// // AudioModelとTextModelの型
// interface AudioModel {
// 	id: string;
// 	name: string;
// }

// interface AssistantModel {
// 	id: string;
// 	name: string;
// }

// export default function UseAi() {
// 	const [voiceModel, setVoiceModel] = useState('');
// 	const [textModel, setTextModel] = useState('');
// 	const [audioModels, setAudioModels] = useState<AudioModel[]>([]);
// 	const [assistantModels, setAssistantModels] = useState<AssistantModel[]>([]);
// 	const [loadingAudio, setLoadingAudio] = useState(true);
// 	const [loadingText, setLoadingText] = useState(true);

// 	// 音声モデルのAPIからモデルリストを取得
// 	useEffect(() => {
// 		const fetchAudioModels = async () => {
// 			try {
// 				const response = await fetch('/api/get-audio-models');
// 				const data = await response.json();
// 				setAudioModels(data.models);
// 			} catch (error) {
// 				console.error('音声モデル一覧の取得に失敗しました:', error);
// 			} finally {
// 				setLoadingAudio(false);
// 			}
// 		};
// 		fetchAudioModels();
// 	}, []);

// 	// アシスタントモデルのAPIからモデルリストを取得
// 	useEffect(() => {
// 		const fetchAssistantModels = async () => {
// 			try {
// 				const response = await fetch('/api/get-assistant-models');
// 				const data = await response.json();
// 				setAssistantModels(data.models);
// 			} catch (error) {
// 				console.error('アシスタントモデル一覧の取得に失敗しました:', error);
// 			} finally {
// 				setLoadingText(false);
// 			}
// 		};
// 		fetchAssistantModels();
// 	}, []);

// 	const handleVoiceModelChange = (event: SelectChangeEvent<string>) => {
// 		setVoiceModel(event.target.value);
// 	};

// 	const handleTextModelChange = (event: SelectChangeEvent<string>) => {
// 		setTextModel(event.target.value);
// 	};

// 	return (
// 		<Box
// 			sx={{
// 				display: 'flex',
// 				flexDirection: 'column',
// 				height: '82vh',
// 				padding: '2rem',
// 				justifyContent: 'flex-end', // 下寄せ
// 				alignItems: 'center',
// 			}}
// 		>
// 			{/* モデル選択エリア */}
// 			<Box
// 				sx={{
// 					maxWidth: '1200px',
// 					width: '100%',
// 					display: 'flex',
// 					gap: '1rem', // 要素間の隙間
// 					marginBottom: '1rem', // チャット入力エリアとの間隔
// 				}}
// 			>
// 				{/* 音声モデル選択 */}
// 				<FormControl fullWidth>
// 					<InputLabel id="voice-model-label">音声モデル</InputLabel>
// 					<Select
// 						labelId="voice-model-label"
// 						id="voice-model"
// 						value={voiceModel}
// 						label="音声モデル"
// 						onChange={handleVoiceModelChange}
// 					>
// 						{/* ローディング中 */}
// 						{loadingAudio ? (
// 							<MenuItem value="">
// 								読み込み中...
// 							</MenuItem>
// 						) : (
// 							audioModels.map((model) => (
// 								<MenuItem key={model.id} value={model.id}>
// 									{model.name}
// 								</MenuItem>
// 							))
// 						)}
// 					</Select>
// 				</FormControl>

// 				{/* テキストモデル選択 */}
// 				<FormControl fullWidth>
// 					<InputLabel id="text-model-label">テキストモデル</InputLabel>
// 					<Select
// 						labelId="text-model-label"
// 						id="text-model"
// 						value={textModel}
// 						label="テキストモデル"
// 						onChange={handleTextModelChange}
// 					>
// 						{/* ローディング中 */}
// 						{loadingText ? (
// 							<MenuItem value="">
// 								読み込み中...
// 							</MenuItem>
// 						) : (
// 							assistantModels.map((model) => (
// 								<MenuItem key={model.id} value={model.id}>
// 									{model.name}
// 								</MenuItem>
// 							))
// 						)}
// 					</Select>
// 				</FormControl>
// 			</Box>

// 			{/* チャット入力エリア */}
// 			<Box
// 				sx={{
// 					display: 'flex',
// 					gap: '1rem',
// 					maxWidth: '1200px',
// 					width: '100%',
// 				}}
// 			>
// 				<TextField fullWidth label="メッセージを入力" multiline rows={1} />
// 				<Button variant="contained">送信</Button>
// 			</Box>
// 		</Box>
// 	);
// }

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { SelectChangeEvent } from '@mui/material';
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
// } from '@mui/material';

// // AudioModel and AssistantModel types
// interface AudioModel {
//   id: string;
//   name: string;
// }

// interface AssistantModel {
//   id: string;
//   name: string;
// }

// export default function UseAi() {
//   const [voiceModel, setVoiceModel] = useState('');
//   const [textModel, setTextModel] = useState('');
//   const [audioModels, setAudioModels] = useState<AudioModel[]>([]);
//   const [assistantModels, setAssistantModels] = useState<AssistantModel[]>([]);
//   const [loadingAudio, setLoadingAudio] = useState(true);
//   const [loadingText, setLoadingText] = useState(true);

//   // Fetch audio models
//   useEffect(() => {
//     const fetchAudioModels = async () => {
//       try {
//         const response = await fetch('/api/get-audio-models');
//         const data = await response.json();

//         if (data && data.models) {
//           setAudioModels(data.models);
//         } else {
//           console.error('Failed to load audio models: no data.');
//         }
//       } catch (error) {
//         console.error('Failed to load audio models:', error);
//       } finally {
//         setLoadingAudio(false);
//       }
//     };
//     fetchAudioModels();
//   }, []);

//   // Fetch assistant models
//   useEffect(() => {
// 	const fetchAssistantModels = async () => {
// 	  try {
// 		const response = await fetch('/api/get-assistant-models');
// 		const data = await response.json();

// 		// データをログに出力して構造を確認
// 		console.log('Assistant models:', data);

// 		if (data && data.models) {
// 		  setAssistantModels(data.models);
// 		} else {
// 		  console.error('Failed to load assistant models: no data.');
// 		}
// 	  } catch (error) {
// 		console.error('Failed to load assistant models:', error);
// 	  } finally {
// 		setLoadingText(false);
// 	  }
// 	};
// 	fetchAssistantModels();
//   }, []);

//   // Handle model selections
//   const handleVoiceModelChange = (event: SelectChangeEvent<string>) => {
//     setVoiceModel(event.target.value);
//   };

//   const handleTextModelChange = (event: SelectChangeEvent<string>) => {
//     setTextModel(event.target.value);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '82vh',
//         padding: '2rem',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//       }}
//     >
//       {/* Model selection area */}
//       <Box
//         sx={{
//           maxWidth: '1200px',
//           width: '100%',
//           display: 'flex',
//           gap: '1rem',
//           marginBottom: '1rem',
//         }}
//       >
//         {/* Voice Model Selection */}
//         <FormControl fullWidth>
//           <InputLabel id="voice-model-label">音声モデル</InputLabel>
//           <Select
//             labelId="voice-model-label"
//             id="voice-model"
//             value={voiceModel}
//             label="音声モデル"
//             onChange={handleVoiceModelChange}
//           >
//             {/* Loading state */}
//             {loadingAudio ? (
//               <MenuItem value="">読み込み中...</MenuItem>
//             ) : (
//               audioModels.length > 0 ? (
//                 audioModels.map((model) => (
//                   <MenuItem key={model.id} value={model.id}>
//                     {model.name}
//                   </MenuItem>
//                 ))
//               ) : (
//                 <MenuItem value="">音声モデルが見つかりません</MenuItem>
//               )
//             )}
//           </Select>
//         </FormControl>

//         {/* Text Model Selection */}
//         <FormControl fullWidth>
//           <InputLabel id="text-model-label">テキストモデル</InputLabel>
//           <Select
//             labelId="text-model-label"
//             id="text-model"
//             value={textModel}
//             label="テキストモデル"
//             onChange={handleTextModelChange}
//           >
//             {/* Loading state */}
//             {loadingText ? (
//               <MenuItem value="">読み込み中...</MenuItem>
//             ) : (
//               assistantModels.length > 0 ? (
//                 assistantModels.map((model) => (
//                   <MenuItem key={model.id} value={model.id}>
//                     {model.name}
//                   </MenuItem>
//                 ))
//               ) : (
//                 <MenuItem value="">テキストモデルが見つかりません</MenuItem>
//               )
//             )}
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Chat Input Area */}
//       <Box
//         sx={{
//           display: 'flex',
//           gap: '1rem',
//           maxWidth: '1200px',
//           width: '100%',
//         }}
//       >
//         <TextField fullWidth label="メッセージを入力" multiline rows={1} />
//         <Button variant="contained">送信</Button>
//       </Box>
//     </Box>
//   );
// }

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { SelectChangeEvent } from '@mui/material';
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
// } from '@mui/material';

// // AudioModel and AssistantModel types
// interface AudioModel {
//   id: string;
//   name: string;
// }

// interface AssistantModel {
//   id: string;
//   name: string;
// }

// export default function UseAi() {
//   const [voiceModel, setVoiceModel] = useState('');
//   const [textModel, setTextModel] = useState('');
//   const [audioModels, setAudioModels] = useState<AudioModel[]>([]);
//   const [assistantModels, setAssistantModels] = useState<AssistantModel[]>([]);
//   const [loadingAudio, setLoadingAudio] = useState(true);
//   const [loadingText, setLoadingText] = useState(true);

//   // Fetch audio models
//   useEffect(() => {
//     const fetchAudioModels = async () => {
//       try {
//         const response = await fetch('/api/get-audio-models');
//         const data = await response.json();

//         if (data && data.models) {
//           setAudioModels(data.models);
//         } else {
//           console.error('Failed to load audio models: no data.');
//         }
//       } catch (error) {
//         console.error('Failed to load audio models:', error);
//       } finally {
//         setLoadingAudio(false);
//       }
//     };
//     fetchAudioModels();
//   }, []);

//   // Fetch assistant models
//   useEffect(() => {
//     const fetchAssistantModels = async () => {
//       try {
//         const response = await fetch('/api/get-assistant-models');
//         const data = await response.json();

//         if (data && data.models) {
//           setAssistantModels(data.models);
//         } else {
//           console.error('Failed to load assistant models: no data.');
//         }
//       } catch (error) {
//         console.error('Failed to load assistant models:', error);
//       } finally {
//         setLoadingText(false);
//       }
//     };
//     fetchAssistantModels();
//   }, []);

//   // Handle model selections
//   const handleVoiceModelChange = (event: SelectChangeEvent<string>) => {
//     setVoiceModel(event.target.value);
//   };

//   const handleTextModelChange = (event: SelectChangeEvent<string>) => {
//     setTextModel(event.target.value);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '82vh',
//         padding: '2rem',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//       }}
//     >
//       {/* Model selection area */}
//       <Box
//         sx={{
//           maxWidth: '1200px',
//           width: '100%',
//           display: 'flex',
//           gap: '1rem',
//           marginBottom: '1rem',
//         }}
//       >
//         {/* Voice Model Selection */}
//         <FormControl fullWidth>
//           <InputLabel id="voice-model-label">音声モデル</InputLabel>
//           <Select
//             labelId="voice-model-label"
//             id="voice-model"
//             value={voiceModel}
//             label="音声モデル"
//             onChange={handleVoiceModelChange}
//           >
//             {/* Loading state */}
//             {loadingAudio ? (
//               <MenuItem value="">読み込み中...</MenuItem>
//             ) : (
//               audioModels.length > 0 ? (
//                 audioModels.map((model) => (
//                   <MenuItem key={model.id} value={model.id}>
//                     {model.name}
//                   </MenuItem>
//                 ))
//               ) : (
//                 <MenuItem value="">音声モデルが見つかりません</MenuItem>
//               )
//             )}
//           </Select>
//         </FormControl>

//         {/* Text Model Selection */}
//         <FormControl fullWidth>
//           <InputLabel id="text-model-label">テキストモデル</InputLabel>
//           <Select
//             labelId="text-model-label"
//             id="text-model"
//             value={textModel}
//             label="テキストモデル"
//             onChange={handleTextModelChange}
//           >
//             {/* Loading state */}
//             {loadingText ? (
//               <MenuItem value="">読み込み中...</MenuItem>
//             ) : (
//               assistantModels.length > 0 ? (
//                 assistantModels.map((model) => (
//                   <MenuItem key={model.id} value={model.id}>
//                     {model.name}
//                   </MenuItem>
//                 ))
//               ) : (
//                 <MenuItem value="">テキストモデルが見つかりません</MenuItem>
//               )
//             )}
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Chat Input Area */}
//       <Box
//         sx={{
//           display: 'flex',
//           gap: '1rem',
//           maxWidth: '1200px',
//           width: '100%',
//         }}
//       >
//         <TextField fullWidth label="メッセージを入力" multiline rows={1} />
//         <Button variant="contained">送信</Button>
//       </Box>
//     </Box>
//   );
// }

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { SelectChangeEvent } from '@mui/material';
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
// } from '@mui/material';

// // AudioModel and AssistantModel types
// interface AudioModel {
//   id: string;
//   name: string;
// }

// interface AssistantModel {
//   id: string;
//   name: string;
// }

// export default function UseAi() {
//   const [voiceModel, setVoiceModel] = useState<string>(''); // 音声モデルの選択状態
//   const [textModel, setTextModel] = useState<string>(''); // テキストモデルの選択状態
//   const [audioModels, setAudioModels] = useState<AudioModel[]>([]); // 音声モデルのリスト
//   const [assistantModels, setAssistantModels] = useState<AssistantModel[]>([]); // テキストモデルのリスト
//   const [loadingAudio, setLoadingAudio] = useState<boolean>(true); // 音声モデル読み込み状態
//   const [loadingText, setLoadingText] = useState<boolean>(true); // テキストモデル読み込み状態

//   // 音声モデルを取得する関数
//   useEffect(() => {
//     const fetchAudioModels = async () => {
//       try {
//         const response = await fetch('/api/get-audio-models');
//         const data = await response.json();

//         if (data && data.models) {
//           setAudioModels(data.models);
//         } else {
//           console.error('Failed to load audio models: no data.');
//         }
//       } catch (error) {
//         console.error('Failed to load audio models:', error);
//       } finally {
//         setLoadingAudio(false);
//       }
//     };
//     fetchAudioModels();
//   }, []);

//   // テキストモデルを取得する関数
//   useEffect(() => {
//     const fetchAssistantModels = async () => {
//       try {
//         const response = await fetch('/api/get-assistant-models');
//         const data = await response.json();

//         if (data && data.models) {
//           setAssistantModels(data.models);
//         } else {
//           console.error('Failed to load assistant models: no data.');
//         }
//       } catch (error) {
//         console.error('Failed to load assistant models:', error);
//       } finally {
//         setLoadingText(false);
//       }
//     };
//     fetchAssistantModels();
//   }, []);

//   // 音声モデルが変更された際に呼ばれるハンドラー
//   const handleVoiceModelChange = (event: SelectChangeEvent<string>) => {
//     setVoiceModel(event.target.value);
//   };

//   // テキストモデルが変更された際に呼ばれるハンドラー
//   const handleTextModelChange = (event: SelectChangeEvent<string>) => {
//     setTextModel(event.target.value);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '82vh',
//         padding: '2rem',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//       }}
//     >
//       {/* モデル選択エリア */}
//       <Box
//         sx={{
//           maxWidth: '1200px',
//           width: '100%',
//           display: 'flex',
//           gap: '1rem',
//           marginBottom: '1rem',
//         }}
//       >
//         {/* 音声モデルの選択 */}
//         <FormControl fullWidth>
//           <InputLabel id="voice-model-label">音声モデル</InputLabel>
//           <Select
//             labelId="voice-model-label"
//             id="voice-model"
//             value={voiceModel} // 選択された音声モデル
//             label="音声モデル"
//             onChange={handleVoiceModelChange} // 音声モデルの変更を処理
//           >
//             {loadingAudio ? (
//               <MenuItem value="">読み込み中...</MenuItem>
//             ) : (
//               audioModels.length > 0 ? (
//                 audioModels.map((model) => (
//                   <MenuItem key={model.id} value={model.id}>
//                     {model.name}
//                   </MenuItem>
//                 ))
//               ) : (
//                 <MenuItem value="">音声モデルが見つかりません</MenuItem>
//               )
//             )}
//           </Select>
//         </FormControl>

//         {/* テキストモデルの選択 */}
//         <FormControl fullWidth>
//           <InputLabel id="text-model-label">テキストモデル</InputLabel>
//           <Select
//             labelId="text-model-label"
//             id="text-model"
//             value={textModel} // 選択されたテキストモデル
//             label="テキストモデル"
//             onChange={handleTextModelChange} // テキストモデルの変更を処理
//           >
//             {loadingText ? (
//               <MenuItem value="">読み込み中...</MenuItem>
//             ) : (
//               assistantModels.length > 0 ? (
//                 assistantModels.map((model) => (
//                   <MenuItem key={model.id} value={model.id}>
//                     {model.name}
//                   </MenuItem>
//                 ))
//               ) : (
//                 <MenuItem value="">テキストモデルが見つかりません</MenuItem>
//               )
//             )}
//           </Select>
//         </FormControl>
//       </Box>

//       {/* チャット入力エリア */}
//       <Box
//         sx={{
//           display: 'flex',
//           gap: '1rem',
//           maxWidth: '1200px',
//           width: '100%',
//         }}
//       >
//         <TextField fullWidth label="メッセージを入力" multiline rows={1} />
//         <Button variant="contained">送信</Button>
//       </Box>
//     </Box>
//   );
// }

'use client';
import React, { useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import {
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Button,
} from '@mui/material';

// AudioModel and AssistantModel types
interface AudioModel {
	id: string;
	name: string;
}

interface AssistantModel {
	id: string;
	name: string;
}

export default function UseAi() {
	const [voiceModel, setVoiceModel] = useState<string>(''); // 音声モデルの選択状態
	const [textModel, setTextModel] = useState<string>(''); // テキストモデルの選択状態
	const [audioModels, setAudioModels] = useState<AudioModel[]>([]); // 音声モデルのリスト
	const [assistantModels, setAssistantModels] = useState<AssistantModel[]>([]); // テキストモデルのリスト
	const [loadingAudio, setLoadingAudio] = useState<boolean>(true); // 音声モデル読み込み状態
	const [loadingText, setLoadingText] = useState<boolean>(true); // テキストモデル読み込み状態

	// 音声モデルを取得する関数
	useEffect(() => {
		const fetchAudioModels = async () => {
			try {
				const response = await fetch('/api/get-audio-models');
				const data = await response.json();

				if (data && data.models) {
					setAudioModels(data.models);
				} else {
					console.error('Failed to load audio models: no data.');
				}
			} catch (error) {
				console.error('Failed to load audio models:', error);
			} finally {
				setLoadingAudio(false);
			}
		};
		fetchAudioModels();
	}, []);

	// テキストモデルを取得する関数
	useEffect(() => {
		const fetchAssistantModels = async () => {
			try {
				const response = await fetch('/api/get-assistant-models');
				const data = await response.json();

				if (data && data.models) {
					setAssistantModels(data.models);
				} else {
					console.error('Failed to load assistant models: no data.');
				}
			} catch (error) {
				console.error('Failed to load assistant models:', error);
			} finally {
				setLoadingText(false);
			}
		};
		fetchAssistantModels();
	}, []);

	// 音声モデルが変更された際に呼ばれるハンドラー
	const handleVoiceModelChange = (event: SelectChangeEvent<string>) => {
		setVoiceModel(event.target.value); // 単一の文字列として選択された値を保存
	};

	// テキストモデルが変更された際に呼ばれるハンドラー
	const handleTextModelChange = (event: SelectChangeEvent<string>) => {
		setTextModel(event.target.value); // 単一の文字列として選択された値を保存
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '82vh',
				padding: '2rem',
				justifyContent: 'flex-end',
				alignItems: 'center',
			}}
		>
			{/* モデル選択エリア */}
			<Box
				sx={{
					maxWidth: '1200px',
					width: '100%',
					display: 'flex',
					gap: '1rem',
					marginBottom: '1rem',
				}}
			>
				{/* 音声モデルの選択 */}
				<FormControl fullWidth>
					<InputLabel id="voice-model-label">音声モデル</InputLabel>
					<Select
						labelId="voice-model-label"
						id="voice-model"
						value={voiceModel} // 選択された音声モデル
						label="音声モデル"
						onChange={handleVoiceModelChange} // 音声モデルの変更を処理
					>
						{loadingAudio ? (
							<MenuItem value="">読み込み中...</MenuItem>
						) : audioModels.length > 0 ? (
							audioModels.map((model) => (
								<MenuItem key={model.id} value={model.name}>
									{model.name}
								</MenuItem>
							))
						) : (
							<MenuItem value="">音声モデルが見つかりません</MenuItem>
						)}
					</Select>
				</FormControl>

				{/* テキストモデルの選択 */}
				<FormControl fullWidth>
					<InputLabel id="text-model-label">テキストモデル</InputLabel>
					<Select
						labelId="text-model-label"
						id="text-model"
						value={textModel} // 選択されたテキストモデル
						label="テキストモデル"
						onChange={handleTextModelChange} // テキストモデルの変更を処理
					>
						{loadingText ? (
							<MenuItem value="">読み込み中...</MenuItem>
						) : assistantModels.length > 0 ? (
							assistantModels.map((model) => (
								<MenuItem key={model.id} value={model.name}>
									{model.name}
								</MenuItem>
							))
						) : (
							<MenuItem value="">テキストモデルが見つかりません</MenuItem>
						)}
					</Select>
				</FormControl>
			</Box>

			{/* チャット入力エリア */}
			<Box
				sx={{
					display: 'flex',
					gap: '1rem',
					maxWidth: '1200px',
					width: '100%',
				}}
			>
				<TextField fullWidth label="メッセージを入力" multiline rows={1} />
				<Button variant="contained">送信</Button>
			</Box>
		</Box>
	);
}
