import React from 'react';
import Avatar from '@mui/material/Avatar';
import md5 from 'md5';

interface BackgroundLetterAvatarsProps {
  name: string;
  className?: string;
}

function stringToColor(string: string): string {
  return '#' + md5(string).slice(0, 6);
}



function stringAvatar(name: string) {

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const BackgroundLetterAvatars: React.FC<BackgroundLetterAvatarsProps> = ({ name, className }) => {
    
    
  return <Avatar {...stringAvatar(name)} className={className} />;
}

export default BackgroundLetterAvatars;
