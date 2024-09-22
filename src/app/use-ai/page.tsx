"use client";
import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { 
  Box, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  TextField,
  Button
} from '@mui/material';

export default function UseAi() {
  const [voiceModel, setVoiceModel] = useState('');
  const [textModel, setTextModel] = useState('');

  const handleVoiceModelChange = (event: SelectChangeEvent<string>) => {
    setVoiceModel(event.target.value);
  };

  const handleTextModelChange = (event: SelectChangeEvent<string>) => {
    setTextModel(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        padding: '2rem',
        justifyContent: 'flex-end', // 下寄せ
      }}
    >
      {/* モデル選択エリア */}
      <Box 
        sx={{ 
          display: 'flex', 
          gap: '1rem', // 要素間の隙間
          marginBottom: '2rem' // チャット入力エリアとの間隔
        }}
      >
        {/* 音声モデル選択 */}
        <FormControl fullWidth>
          <InputLabel id="voice-model-label">音声モデル</InputLabel>
          <Select
            labelId="voice-model-label"
            id="voice-model"
            value={voiceModel}
            label="音声モデル"
            onChange={handleVoiceModelChange} 
          >
            <MenuItem value="modelA">モデルA</MenuItem>
            <MenuItem value="modelB">モデルB</MenuItem>
            {/* 必要なだけモデルを追加 */}
          </Select>
        </FormControl>

        {/* テキストモデル選択 */}
        <FormControl fullWidth>
          <InputLabel id="text-model-label">テキストモデル</InputLabel>
          <Select
            labelId="text-model-label"
            id="text-model"
            value={textModel}
            label="テキストモデル"
            onChange={handleTextModelChange}  
          >
            <MenuItem value="modelC">モデルC</MenuItem>
            <MenuItem value="modelD">モデルD</MenuItem>
            {/* 必要なだけモデルを追加 */}
          </Select>
        </FormControl>
      </Box>

      {/* チャット入力エリア */}
      <Box 
        sx={{
          display: 'flex', 
          gap: '1rem',
        }}
      >
        <TextField 
          fullWidth 
          label="メッセージを入力" 
          multiline 
          rows={2} 
        />
        <Button variant="contained">送信</Button>
      </Box>
    </Box>
  );
}