import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BasicCard({text,chapter,chapterName}) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ color: 'red', mb: 1.5 }}><h2>{chapter}. {chapterName}</h2></Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          <h3>{text}</h3>
        </Typography> 
      </CardContent>  
    </Card>
  );
}
export default BasicCard;
