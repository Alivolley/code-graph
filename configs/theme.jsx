const getDesignTokens = (mode, direction, language) => ({
   direction,

   typography: {
      // fontFamily: language === 'en' ? 'poppins' : language === 'fa' ? 'dana' : 'rubik',
   },

   palette: {
      mode,

      // customPink: {
      //    main: '#FFA3A1',
      // },
   },

   components: {
      MuiDialog: {
         styleOverrides: {
            root: {
               // fontFamily: language === 'en' ? 'poppins' : language === 'fa' ? 'dana' : 'rubik',
            },
         },
      },

      MuiDrawer: {
         styleOverrides: {
            root: {
               // fontFamily: language === 'en' ? 'poppins' : language === 'fa' ? 'dana' : 'rubik',
            },
         },
      },
   },
});

export default getDesignTokens;
