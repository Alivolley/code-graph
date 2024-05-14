const getDesignTokens = (mode, direction, language) => ({
   direction,

   typography: {
      fontFamily: 'almaraiRegular400',
   },

   palette: {
      mode,

      primary: {
         main: '#65a5fc',
      },
      customPink: {
         main: '#FD8266',
      },
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: props => ({
               boxShadow: 'none',
               textTransform: 'none',
               padding: 0,
               minWidth: 0,
               borderRadius: 0,
               ...(props?.ownerState?.color === 'customPink' && {
                  color: '#fff',
               }),
               '&:hover': {
                  boxShadow: 'none',
               },
            }),
         },
      },

      MuiDialog: {
         styleOverrides: {
            root: {
               fontFamily: 'almaraiRegular400',
            },
         },
      },

      MuiDrawer: {
         styleOverrides: {
            root: {
               fontFamily: 'almaraiRegular400',
            },
         },
      },

      MuiTextField: {
         styleOverrides: {
            root: props => ({
               '& .MuiOutlinedInput-root': {
                  ...(props?.size === 'small' && {
                     height: '45px',
                     borderRadius: '47px',
                  }),
               },
            }),
         },
      },
   },
});

export default getDesignTokens;
