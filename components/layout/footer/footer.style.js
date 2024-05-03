import styled from '@emotion/styled';
import footerBackGround from '@/assets/images/footerBackGround.png';
import footerBackGroundMobile from '@/assets/images/footerBackGroundMobile.png';

const FooterStyle = styled.footer(() => ({
   '#back': {
      '@media (max-width: 900px)': {
         backgroundImage: `url(${footerBackGroundMobile?.src})`,
      },

      backgroundImage: `url(${footerBackGround?.src})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   },
}));

export default FooterStyle;
