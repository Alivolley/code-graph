import styled from '@emotion/styled';
import footerBackGround from '@/assets/images/footerBackGround.png';

const FooterStyle = styled.footer(() => ({
   '#back': {
      backgroundImage: `url(${footerBackGround?.src})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   },
}));

export default FooterStyle;
