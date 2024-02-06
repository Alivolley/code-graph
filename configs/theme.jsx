const getDesignTokens = (mode, direction, language) => ({
   direction,

   typography: {
      fontFamily: 'almaraiRegular',
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
               fontFamily: 'almaraiRegular',
            },
         },
      },

      MuiDrawer: {
         styleOverrides: {
            root: {
               fontFamily: 'almaraiRegular',
            },
         },
      },
   },
});

export default getDesignTokens;
