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

export default function Page() {
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
					<Typography variant="h6" sx={{ margin: 0,fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',fontWeight: 700,fontSize: '40px',lineHeight: 1.5,letterSpacing: '0.00938em',color: 'white' }}>
						Steller
					</Typography>
				</Toolbar>
			</AppBar>

			{/* Drawer */}
			<Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
				<List>
					<ListItem onClick={toggleDrawer}>
						<Link href="/create-voice" passHref legacyBehavior> 
						<ListItemText primary="音声生成" /> 
						</Link>
					</ListItem>
					<ListItem onClick={toggleDrawer}>
						<Link href="/use-voice" passHref legacyBehavior>
						<ListItemText primary="モデル使用" /> 
						</Link>
					</ListItem>
				</List>
			</Drawer>

			{/* メインコンテンツ */}
			<Box mt={8}> {/* AppBarの高さを考慮してマージン */}
				<Typography>1111</Typography> 
			</Box>
		</Box>
	);
}




// ------------ 元のコード ------------

// import { Box, Typography } from '@mui/material';
// import React from 'react';

// export default function Page() {
// 	return (
// 		<Box>
// 			<Typography>1111</Typography>
// 		</Box>
// 	);
// }
