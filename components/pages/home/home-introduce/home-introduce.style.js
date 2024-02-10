import styled from '@emotion/styled';
import introduceBackGround from '@/assets/images/introduceBackGround.png';

const HomeIntroduceStyle = styled.div(() => ({
   backgroundImage: `url(${introduceBackGround?.src})`,
   backgroundPosition: 'top center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
}));

export default HomeIntroduceStyle;
