import { Box, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
	return (
		<Box height="60px" paddingLeft="20px" bgcolor="#111">
			<Typography color="white" fontSize="40px" fontWeight="bold">
				Stellar
			</Typography>
		</Box>
	);
};
