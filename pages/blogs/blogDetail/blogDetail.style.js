import styled from '@emotion/styled';

const BlogDetailStyle = styled.div(() => ({
   '#content': {
      '*': {
         all: 'revert',
      },
      img: {
         display: 'block',
         margin: '0 auto',
         borderRadius: '8px',
      },
   },
}));

export default BlogDetailStyle;
