import React, {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import md5 from 'md5';

interface BackgroundLetterAvatarsProps {
  name: string;
  className?: string;
}

// function stringToColor(string: string): string {
//   return '#' + md5(string).slice(0, 6);
// }

function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
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
    useEffect(() => {
        console.log("In Avatar")
        console.log(name)
        console.log(className)
        console.log(stringAvatar(name))
      }, [name, className]);
    
    // return <div></div>
  return <Avatar {...stringAvatar('Divyansh Agarwal')}  />;
}

export default BackgroundLetterAvatars;
