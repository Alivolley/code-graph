import styled from '@emotion/styled';
import Link from 'next/link';

const ArticleCartStyle = styled(Link)(() => ({
   ':hover': {
      boxShadow: '0px 12px 22.7px 0px #AAB2BC26',

      '#text': {
         color: '#FD8266',
      },
      '#btn': {
         backgroundColor: '#FD8266',
      },
      '#icon': {
         color: '#FD8266',
      },
   },
}));

export default ArticleCartStyle;
