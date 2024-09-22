"use client";
import React, { useRef } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

export default function CreateModel() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        padding: '2rem',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          bgcolor: '#EEEEEE',
          padding: '1rem 2rem',
          borderRadius: '8px',
		  width: '65%',
        }}
      >
        AI使用
      </Typography>

      <Box
        sx={{
          bgcolor: '#EEEEEE',
          padding: '4rem 2rem',
          borderRadius: '8px',
          marginTop: '1rem',
          textAlign: 'center',
		  width: '65%',
        }}
      >
        <input
          accept=".txt" // テキストファイルのみ受け入れる
          type="file"
          id="upload-text"
          style={{ display: 'none' }} // input要素を非表示
          ref={fileInputRef} 
        />
        <label htmlFor="upload-text"> 
          <Button variant="contained" component="span" onClick={handleUploadClick}>
            テキストファイルをアップロード
          </Button>
        </label>
      </Box>
    </Box>
  );
}