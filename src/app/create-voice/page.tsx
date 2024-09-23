"use client";
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function CreateVoice() {
	return (
	<Box
		sx={{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center', // 中央揃え
		justifyContent: 'center', // 中央揃え
		height: '82vh',
		padding: '2rem'
		}}
	>
		<Typography 
		variant="h4" 
		component="h1" 
		gutterBottom // 下にマージンを追加
		sx={{ 
			fontWeight: 'bold', 
			textAlign: 'center', // 中央揃え
			bgcolor: '#EEEEEE', // タイトル背景色
			padding: '1rem 2rem', 
			borderRadius: '8px' ,
			width: '65%'
		}}
		>
		{/* タイトル */}
		音声生成
		</Typography>

		<Box
		sx={{
			bgcolor: '#EEEEEE', // アップロードエリア背景色
			padding: '4rem 2rem', 
			borderRadius: '8px',
			marginTop: '1rem', // タイトルとの間隔
			textAlign: 'center', // 中身を中央揃え
			width:'65%'
		}}
		>
		{/* 音声アップロードフォーム */}
		<input 
			accept="audio/*" // 音声ファイルのみ受け入れる
			type="file" 
			id="upload-audio" 
			style={{ display: 'none' }} // input要素を非表示
		/>
		<label htmlFor="upload-audio"> {/* 非表示のinput要素をクリックするためのラベル */}
			<Button variant="contained" component="span">
			音声ファイルをアップロード
			</Button>
		</label>
		</Box>
	</Box>
	);
}
