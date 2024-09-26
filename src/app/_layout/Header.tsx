'use client';

import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // メニューアイコン
import CloseIcon from '@mui/icons-material/Close'; // 閉じるアイコン
import Link from 'next/link';
import Image from 'next/image';
import AudioModelList from './VoiceModelList';

export default function Header() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isModelListOpen, setIsModelListOpen] = useState(false); // モデル一覧の開閉管理

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const toggleModelList = () => {
		setIsModelListOpen(!isModelListOpen);
	};

	return (
		<Box>
			{/* AppBar */}
			<AppBar
				position="fixed"
				sx={{
					bgcolor: 'black',
					// opacity: 0.8,
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
			>
				<Toolbar>
					{/* ハンバーガーメニューボタン */}
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer}
						sx={{ fontSize: '3rem !important' }}
					>
						{/* 開閉状態に応じてアイコンを切り替え */}
						{isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
					</IconButton>

					<div
						style={{
							position: 'relative',
							width: '90px',
							height: '30px',
						}}
					>
						<Link href="/">
							<Image
								src="/title.png"
								alt="タイトル"
								fill
								sizes="(max-width: 80px)"
							/>
						</Link>
					</div>
				</Toolbar>
			</AppBar>

			{/* Drawer */}
			<Box sx={{ margin: '64px 0 0 0' }}>
				<Drawer
					anchor="left"
					open={isDrawerOpen}
					onClose={toggleDrawer}
					sx={{
						zIndex: (theme) => theme.zIndex.appBar - 1,
					}}
				>
					<List
						sx={{ 
							margin: '70px 0 0 0', 
							width: '400px',
							backgroundColor: "none",
						}}
					>
						<ListItem onClick={toggleDrawer}>
							<Link href="/create-voice">
								<ListItemText primary="音声モデル生成" />
							</Link>
						</ListItem>
						{/* 音声モデル一覧を開閉 */}
						<ListItem onClick={toggleModelList}>
							<ListItemText primary="音声モデル一覧" />
						</ListItem>
						{isModelListOpen && <AudioModelList />} {/* 一覧の表示 */}
						<ListItem onClick={toggleDrawer}>
							<Link href="/create-model">
								<ListItemText primary="性格モデル使用" />
							</Link>
						</ListItem>
						<ListItem onClick={toggleDrawer}>
							<Link href="/use-ai">
								<ListItemText primary="AI使用" />
							</Link>
						</ListItem>
					</List>
				</Drawer>
			</Box>
		</Box>
	);
}
