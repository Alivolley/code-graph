import styled from '@emotion/styled';
import valueBackGround from '@/assets/images/valueBackground.png';

const ValueDescriptionStyle = styled.div(() => ({
   backgroundImage: `url(${valueBackGround?.src})`,
   backgroundPosition: 'top center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
}));

export default ValueDescriptionStyle;
