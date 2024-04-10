import styled from '@emotion/styled';
import Link from 'next/link';

const BlogCartStyle = styled(Link)(() => ({
   transition: 'all 0.2s',

   '*': {
      transition: 'all 0.2s',
   },

   ':hover': {
      boxShadow: '-2px 4px 23.4px 0px #98989826',
      img: {
         transform: 'scale(1.1)',
      },
      '#text1': {
         color: '#0058D0',
      },
      '#text2': {
         color: '#65A5FC',
      },
      '#text3': {
         color: '#65A5FC',
      },
      '#text4': {
         color: '#82B3F6',
      },
   },
}));

export default BlogCartStyle;
