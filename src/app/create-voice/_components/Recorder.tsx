// // src/app/_component/Recorder.tsx
// "use client";

// import { useState, useRef } from 'react';

// interface RecorderProps {
//   onVoiceIdReceived: (voiceId: string) => void;
// }

// const Recorder: React.FC<RecorderProps> = ({ onVoiceIdReceived }) => {
//   const [recording, setRecording] = useState(false);
//   const mediaRecorder = useRef<MediaRecorder | null>(null);
//   const audioChunks = useRef<Blob[]>([]);

//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorder.current = new MediaRecorder(stream);
//     mediaRecorder.current.ondataavailable = (event) => {
//       audioChunks.current.push(event.data);
//     };
//     mediaRecorder.current.onstop = () => {
//       const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
//       uploadAudio(audioBlob);
//       audioChunks.current = [];
//     };
//     mediaRecorder.current.start();
//     setRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorder.current?.stop();
//     setRecording(false);
//   };

//   const uploadAudio = async (audioBlob: Blob) => {
//     const formData = new FormData();
//     formData.append('audio', audioBlob, 'audio.webm');

//     const response = await fetch('/api/upload-audio', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();
//     onVoiceIdReceived(data.voiceId);
//   };

//   return (
//     <div>
//       {recording ? (
//         <button onClick={stopRecording}>録音停止</button>
//       ) : (
//         <button onClick={startRecording}>録音開始</button>
//       )}
//     </div>
//   );
// };

// export default Recorder;

'use client';

import { useState } from 'react';

interface RecorderProps {
	onVoiceIdReceived: (voiceId: string) => void;
}

const Recorder: React.FC<RecorderProps> = ({ onVoiceIdReceived }) => {
	const [files, setFiles] = useState<FileList | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files;
		if (!selectedFiles) return;

		// ファイル数のチェック
		if (selectedFiles.length > 25) {
			setError('ファイルは最大25個までです。');
			return;
		}

		// 各ファイルのサイズと形式のチェック
		for (let i = 0; i < selectedFiles.length; i++) {
			const file = selectedFiles[i];

			if (file.size > 10 * 1024 * 1024) {
				setError('ファイルサイズは10MB以内である必要があります。');
				return;
			}

			const validFormats = ['audio/mpeg', 'audio/mp3', 'video/mp4'];
			if (!validFormats.includes(file.type)) {
				setError('対応ファイル形式はmp3およびmp4です。');
				return;
			}
		}

		// エラーがない場合、ファイルをセット
		setFiles(selectedFiles);
		setError(null);
	};

	const uploadFiles = async () => {
		if (!files) {
			setError('ファイルを選択してください。');
			return;
		}

		const formData = new FormData();
		Array.from(files).forEach((file) => {
			formData.append('files', file);
		});

		const response = await fetch('/api/upload-audio', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();
		onVoiceIdReceived(data.voiceId);
	};

	return (
		<div>
			<input
				type="file"
				multiple
				accept=".mp3,.mp4"
				onChange={handleFileChange}
			/>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<button onClick={uploadFiles} disabled={!files}>
				ファイルをアップロード
			</button>
		</div>
	);
};

export default Recorder;
