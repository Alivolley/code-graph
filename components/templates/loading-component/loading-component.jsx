import Image from 'next/image';

// MUI
import { LinearProgress } from '@mui/material';

// Assets
import logo from '@/assets/images/headerLogo.png';

function LoadingComponent() {
   return (
      <div className="rounded-10 bg-[#000000a2] p-5">
         <Image src={logo} alt="logo" />
         <div className="mt-1">
            <LinearProgress sx={{ height: '6px' }} />
         </div>
      </div>
   );
}

export default LoadingComponent;
