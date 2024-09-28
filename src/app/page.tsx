// 'use client';
// import { Box } from '@mui/material';
// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// export default function Page() {
// 	const descriptionRef = useRef<HTMLDivElement>(null);
// 	const overlayRef = useRef<HTMLDivElement>(null);
// 	const [titleOpacity, setTitleOpacity] = useState(0);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			if (descriptionRef.current && overlayRef.current) {
// 				const descriptionTop =
// 					descriptionRef.current.getBoundingClientRect().top;
// 				const windowHeight = window.innerHeight;

// 				// スクロール位置が説明文に達したかどうかを判断
// 				if (descriptionTop < windowHeight) {
// 					// 説明文がビューポートに入ってきたら暗さを調整
// 					const opacity =
// 						Math.min(1, (windowHeight - descriptionTop) / 200) * 0.7;
// 					overlayRef.current.style.opacity = opacity.toString();
// 				} else {
// 					// 説明文がまだ表示されていない場合は透明
// 					overlayRef.current.style.opacity = '0';
// 				}
// 			}
// 		};

// 		window.addEventListener('scroll', handleScroll);
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, []);

// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			setTitleOpacity(1);
// 		}, 400); // 0.3秒後に不透明度を1にする

// 		return () => clearTimeout(timer);
// 	}, []);

// 	return (
// 		<main style={{ backgroundColor: 'black' }}>
// 			<Box
// 				sx={{
// 					backgroundImage: "url('/haikei2.png')",
// 					backgroundSize: 'auto 100%',
// 					backgroundAttachment: 'fixed',
// 					backgroundPosition: 'center',
// 					minHeight: '100vh',
// 					position: 'relative', // 擬似要素を配置するため
// 				}}
// 			>
// 				<div
// 					style={{
// 						width: '100%',
// 						height: '100%',
// 						backgroundColor: '#000',
// 						transition: 'opacity 0.3s ease',
// 						opacity: 0,
// 						overflow: 'hidden',
// 						position: 'absolute',
// 					}}
// 					ref={overlayRef}
// 				></div>
// 				<Box
// 					sx={{
// 						position: 'relative',
// 						minHeight: '100vh',
// 						display: 'flex',
// 						flexDirection: 'column',
// 						alignItems: 'center',
// 						justifyContent: 'center',
// 						padding: '20px',
// 						maxWidth: '1100px',
// 						margin: '0 auto',
// 					}}
// 				>
// 					<div
// 						style={{
// 							display: 'flex',
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 							minHeight: '82vh',
// 						}}
// 					>
// 						<div
// 							style={{
// 								position: 'relative',
// 								width: '600px',
// 								height: '200px',
// 								opacity: titleOpacity, // タイトルの不透明度を制御
// 								transition: 'opacity 1s ease', // 不透明度の変化にアニメーションを追加
// 							}}
// 						>
// 							<Image
// 								src="/title.png"
// 								alt="タイトル"
// 								fill
// 								sizes="(max-width: 600px)"
// 							/>
// 						</div>
// 					</div>
// 					<div
// 						ref={descriptionRef}
// 						style={{
// 							margin: '350px 0 300px 0',
// 							padding: '5px',
// 						}}
// 					>
// 						<p style={{ color: '#fff', padding: '5px' }}>
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 							このサイトの説明 このサイトの説明 このサイトの説明
// 						</p>
// 					</div>
// 				</Box>
// 			</Box>
// 		</main>
// 	);
// }

// src/app/page.tsx

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Script from 'next/script'; // Script コンポーネントをインポート

export default function Page() {
	const descriptionRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const [titleOpacity, setTitleOpacity] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (descriptionRef.current && overlayRef.current) {
				const descriptionTop =
					descriptionRef.current.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				if (descriptionTop < windowHeight) {
					const opacity =
						Math.min(1, (windowHeight - descriptionTop) / 200) * 0.7;
					overlayRef.current.style.opacity = opacity.toString();
				} else {
					overlayRef.current.style.opacity = '0';
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setTitleOpacity(1);
		}, 400);

		return () => clearTimeout(timer);
	}, []);

	return (
		<main>
			{/* chatbot.bundle.js を先に読み込む */}
			<Script src="/chatbot.bundle.js" strategy="beforeInteractive" />
			{/* initializeChatbot を呼び出すスクリプト */}
			<Script
				id="initialize-chatbot"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.addEventListener('load', function() {
              if (window.initializeChatbot) {
                initializeChatbot({
                  textModelId: 'your_text_model_id', // 実際のIDに置き換えてください
                  voiceModelId: 'your_voice_model_id', // 実際のIDに置き換えてください
                  apiUrl: '/api/chatbot' // APIのエンドポイントを指定
                });
              } else {
                console.error('initializeChatbot が未定義です。');
              }
            });
          `,
				}}
			/>

			<Box
				sx={{
					backgroundImage: "url('/haikei2.png')",
					backgroundSize: 'auto 100%',
					backgroundAttachment: 'fixed',
					backgroundPosition: 'center',
					minHeight: '100vh',
					position: 'relative',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: '#000',
						transition: 'opacity 0.3s ease',
						opacity: 0,
						overflow: 'hidden',
						position: 'absolute',
					}}
					ref={overlayRef}
				></div>
				<Box
					sx={{
						position: 'relative',
						minHeight: '100vh',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '20px',
						maxWidth: '1100px',
						margin: '0 auto',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							minHeight: '82vh',
						}}
					>
						<div
							style={{
								position: 'relative',
								width: '600px',
								height: '200px',
								opacity: titleOpacity,
								transition: 'opacity 1s ease',
							}}
						>
							<Image
								src="/title.png"
								alt="タイトル"
								fill
								sizes="(max-width: 600px)"
							/>
						</div>
					</div>
					<div
						ref={descriptionRef}
						style={{
							margin: '350px 0 300px 0',
							padding: '5px',
						}}
					>
						<p style={{ color: '#fff', padding: '5px' }}>
							{/* サイトの説明文 */}
							このサイトの説明 このサイトの説明 このサイトの説明
							{/* 必要に応じて内容を追加 */}
						</p>
					</div>
				</Box>
			</Box>
		</main>
	);
}
