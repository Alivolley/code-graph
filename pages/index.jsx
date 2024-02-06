import toast from 'react-hot-toast';

const showNotif = () => {
   toast.success('لورم ایپسوم یک متن ساختگی با محتوا');
};

export default function Home() {
   return (
      <div>
         <p>خانه</p>
         <button type="button" onClick={showNotif}>
            کلیک
         </button>
      </div>
   );
}
