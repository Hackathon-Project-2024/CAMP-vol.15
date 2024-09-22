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
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function Header() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<Box>
			{/* AppBar */}
			<AppBar position="fixed" sx={{ bgcolor: 'black' }}>
				<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ fontSize: '3rem !important' }}>
					<MenuIcon />
				</IconButton>
					{/* とりあえずCSS直書き */}
					<Typography variant="h6" sx={{ margin: 0,fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',fontWeight: 700,fontSize: '20px',lineHeight: 1.5,letterSpacing: '0.00938em',color: 'white' }}>
						<p>Steller</p>
					</Typography>
				</Toolbar>
			</AppBar>

			{/* Drawer */}
			<Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
				<List>
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
	);
}



// ------------ 元のコード ----------------

// import { Box, Typography } from '@mui/material';
// import React from 'react';

// export const Header = () => {
// 	return (
// 		<Box height="60px" paddingLeft="20px" bgcolor="#111">
// 			<Typography color="white" fontSize="40px" fontWeight="bold">
// 				Stellar
// 			</Typography>
// 		</Box>
// 	);
// };
