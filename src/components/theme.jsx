export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // 👇 palette values for light mode
        
         
        }
      : {
          // 👇 palette values for dark mode
          
         
        }),
  },
});
