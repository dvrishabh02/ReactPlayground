import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BasicCard({text,chapter,chapterName}) {
  return (
    <Card sx={{ minWidth: 1000,minHeight: 300, marginTop: 5 }}>
      <CardContent>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{chapter}  {chapterName}</Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default BasicCard;
