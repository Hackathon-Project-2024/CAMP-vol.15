"use client"; 

import React, { useState } from 'react';
import { 
	AppBar,
	Toolbar,
	Typography,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // メニューアイコン
import CloseIcon from '@mui/icons-material/Close'; // 閉じるアイコン
import Link from 'next/link';

export default function Header() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<Box>
			{/* AppBar */}
			<AppBar 
				position="fixed" 
				sx={{ 
					bgcolor: 'black', 
					zIndex: (theme) => theme.zIndex.drawer + 1 
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
					<Typography 
						variant="h6" 
						sx={{ 
							margin: 0,
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontWeight: 700,
							fontSize: '20px',
							lineHeight: 1.5,
							letterSpacing: '0.00938em',
							color: 'white' 
						}}
					>
						<p>Steller</p>
					</Typography>
				</Toolbar>
			</AppBar>

			{/* Drawer */}
			<Box sx={{ margin: '70px 0 0 0' }}>
				<Drawer 
					anchor="left" 
					open={isDrawerOpen} 
					onClose={toggleDrawer} 
					sx={{zIndex: (theme) => theme.zIndex.appBar - 1,}} 
				>
					<List sx={{ margin: '70px 0 0 0' }}>
						<ListItem onClick={toggleDrawer}>
							<Link href="/create-voice">
								<ListItemText primary="音声生成" />
							</Link>
						</ListItem>
						<ListItem onClick={toggleDrawer}>
							<Link href="/create-model">
								<ListItemText primary="モデル使用" />
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
