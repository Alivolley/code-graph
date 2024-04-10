import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import testPic from '@/assets/images/userPic.jpg';
import BlogCartStyle from './blog-cart.style';

function BlogCart() {
   return (
      <BlogCartStyle href="/" className="block rounded-[20px] p-[15px]">
         <div className="relative aspect-[1.3/1] w-full overflow-hidden rounded-2xl">
            <Image src={testPic} alt="cover" fill className="rounded-2xl object-cover" />
         </div>

         <div className="mt-5 customMd:mt-10">
            <div className="flex items-center gap-4">
               <p className="font-almaraiExtraBold text-xs text-[#333333]" id="text1">
                  UiUx
               </p>
               <p className="text-xs text-[#999999]" id="text2">
                  10 March 2023
               </p>
            </div>
            <p
               className="my-[10px] font-almaraiExtraBold text-[18px] leading-7 text-[#333333] customMd:my-4 customMd:text-2xl"
               id="text3"
            >
               How to Be a Dancer in 2023 with proper skills?
            </p>
            <p className="mb-4 text-sm text-[#666666] customMd:text-base" id="text4">
               Organically grow the holistic world view of disruptive innovation via workplace diversity and
               empowerment. survival strategies to ensure proactive
            </p>

            <Button
               className="text-base customMd:text-[18px]"
               sx={{ color: '#FD8266', fontFamily: 'almaraiExtraBold', textDecoration: 'underline' }}
            >
               Read More...
            </Button>
         </div>
      </BlogCartStyle>
   );
}

export default BlogCart;
