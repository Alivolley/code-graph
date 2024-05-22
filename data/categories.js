// Assets
import uiuxBannerPic from '@/assets/images/uiuxPic.png';
import websiteBannerPic from '@/assets/images/websitePic.png';
import graphicBannerPic from '@/assets/images/graphicPic.png';
import uiuxIntroducePic from '@/assets/images/uiuxPic2.png';
import websiteIntroducePic from '@/assets/images/websitePic2.png';
import graphicIntroducePic from '@/assets/images/graphicPic2.png';
import uiuxIntroduce2Pic from '@/assets/images/uiuxPic3.png';
import websiteIntroduce2Pic from '@/assets/images/websitePic3.png';
import graphicIntroduce2Pic from '@/assets/images/graphicPic3.png';

const selectCategory = cat => {
   if (cat === 'UIUX design' || cat === 'طراحی UIUX') {
      return {
         bannerFirstLetter: 'User experience design',
         bannerSecondLetter: 'User interface design',
         bannerDescription: 'lorem',
         bannerPic: uiuxBannerPic,
         introduceFirstLetter: 'interface & experience',
         introduceSecondLetter: 'user interface',
         introduceDescription: 'lorem3',
         introducePic: uiuxIntroducePic,
         introduce2Pic: uiuxIntroduce2Pic,
      };
   }
   if (cat === 'Web development' || cat === 'طراحی و توسعه سایت') {
      return {
         bannerFirstLetter: 'Design website for',
         bannerSecondLetter: 'your brand',
         bannerDescription: 'lorem',
         bannerPic: websiteBannerPic,
         introduceFirstLetter: 'How a website',
         introduceSecondLetter: 'going to help you',
         introduceDescription: 'lorem3',
         introducePic: websiteIntroducePic,
         introduce2Pic: websiteIntroduce2Pic,
      };
   }
   if (cat === 'Design 2d & 3d' || cat === 'طراحی ۲بعدی و ۳ بعدی') {
      return {
         bannerFirstLetter: 'Design website for',
         bannerSecondLetter: 'your brand',
         bannerDescription: 'lorem',
         bannerPic: graphicBannerPic,
         introduceFirstLetter: 'How a website',
         introduceSecondLetter: 'going to help you',
         introduceDescription: 'lorem3',
         introducePic: graphicIntroducePic,
         introduce2Pic: graphicIntroduce2Pic,
      };
   }
   return null;
};

export default selectCategory;
