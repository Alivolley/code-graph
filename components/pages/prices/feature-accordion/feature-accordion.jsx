import { useState } from 'react';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@mui/material';

// Icons
import { ArrowDown2 } from 'iconsax-react';
import { FaCheck } from 'react-icons/fa6';
import { IoCloseCircle } from 'react-icons/io5';

function FeatureAccordion() {
   const [isExpanded, setIsExpanded] = useState(false);
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   return (
      <div className="border-b border-solid border-[#E4EAF0]">
         <Accordion sx={{ boxShadow: 'none' }} expanded={isExpanded}>
            <AccordionSummary
               expandIcon={<ArrowDown2 size={isDesktop ? '24' : '18px'} />}
               sx={{
                  backgroundColor: isExpanded ? '#E6F0FF' : '#F7F9FC',
                  padding: isDesktop ? '19px 41px' : '12px 10px',
                  boxShadow: isExpanded ? '0px 3px 8px 0px #00000040 inset' : '',
               }}
               onClick={() => setIsExpanded(prev => !prev)}
            >
               <p className="font-almaraiBold text-xs text-[#626E94] customMd:text-xl">Lorem ipsum dolor sit abet</p>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
               <div>
                  <div className="flex flex-col border-x border-solid border-[#e4eaf0] customMd:flex-row">
                     <div
                        className="flex items-center justify-center py-[30px] font-almaraiBold text-[#7E8AAB] customMd:w-[250px]
                   customMd:justify-start customMd:ps-[41px] customMd:text-xl customLg:w-[520px]"
                     >
                        has this feature or not
                     </div>

                     <div className="grid grow grid-cols-2 customMd:flex">
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#FC742B] bg-[#FC742B1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#050F2C] bg-[#050F2C1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#06986E] bg-[#06986E1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#E71D36] bg-[#E71D361A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <IoCloseCircle color="#EF6D33" fontSize="20px" />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col border-x border-solid border-[#e4eaf0] customMd:flex-row">
                     <div
                        className="flex items-center justify-center py-[30px] font-almaraiBold text-[#7E8AAB] customMd:w-[250px]
                   customMd:justify-start customMd:ps-[41px] customMd:text-xl customLg:w-[520px]"
                     >
                        has this feature or not
                     </div>

                     <div className="grid grow grid-cols-2 customMd:flex">
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#FC742B] bg-[#FC742B1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#050F2C] bg-[#050F2C1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#06986E] bg-[#06986E1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#E71D36] bg-[#E71D361A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <IoCloseCircle color="#EF6D33" fontSize="20px" />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col border-x border-solid border-[#e4eaf0] customMd:flex-row">
                     <div
                        className="flex items-center justify-center py-[30px] font-almaraiBold text-[#7E8AAB] customMd:w-[250px]
                   customMd:justify-start customMd:ps-[41px] customMd:text-xl customLg:w-[520px]"
                     >
                        has this feature or not
                     </div>

                     <div className="grid grow grid-cols-2 customMd:flex">
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#FC742B] bg-[#FC742B1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#050F2C] bg-[#050F2C1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#06986E] bg-[#06986E1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#E71D36] bg-[#E71D361A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <IoCloseCircle color="#EF6D33" fontSize="20px" />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col border-x border-solid border-[#e4eaf0] customMd:flex-row">
                     <div
                        className="flex items-center justify-center py-[30px] font-almaraiBold text-[#7E8AAB] customMd:w-[250px]
                   customMd:justify-start customMd:ps-[41px] customMd:text-xl customLg:w-[520px]"
                     >
                        has this feature or not
                     </div>

                     <div className="grid grow grid-cols-2 customMd:flex">
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#FC742B] bg-[#FC742B1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#050F2C] bg-[#050F2C1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#06986E] bg-[#06986E1A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <FaCheck color="#44BF34" fontSize="20px" />
                        </div>
                        <div
                           className="flex items-center justify-center border-2 border-solid border-[#E71D36] bg-[#E71D361A] py-[30px]
                         text-center customMd:flex-1 customMd:border-y-0 customMd:border-e-0 customMd:border-s customMd:border-[#E4EAF0] customMd:bg-transparent"
                        >
                           <IoCloseCircle color="#EF6D33" fontSize="20px" />
                        </div>
                     </div>
                  </div>
               </div>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

export default FeatureAccordion;
