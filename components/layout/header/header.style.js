import styled from '@emotion/styled';

const HeaderStyle = styled.div(() => ({
   '& #dropdownWrapper': {
      position: 'relative',

      '&:hover #dropdownBox': {
         opacity: 1,
         visibility: 'visible',
         transform: 'translateY(10px)',
      },

      '&:hover #dropdownArrow': {
         transform: 'rotate(180deg)',
      },
   },

   '& #dropdownBox': {
      position: 'absolute',
      start: 0,
      top: '14px',
      overflow: 'hidden',
      transition: 'all 0.3s',
      opacity: 0,
      visibility: 'hidden',
      boxShadow: '0px 4px 20px 0px #A2A2A226',
   },
}));

export default HeaderStyle;
