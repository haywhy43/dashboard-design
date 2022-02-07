module.exports = {
  mode: 'jit',
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  theme: {
    colors: {
      primary: {
        50: '#F9F5FF',
        600: '#7F56D9',
        700: '#6941C6',
      },
      gray: {
        50: '#F9FAFB',
        100: '#F2F4F7',
        200: '#EAECF0',
        300: '#D0D5DD',
        500: '#101828',
        700: '#344054',
        900: '#101828,',
      },

      success: {
        50: '#ECFDF3',
        500: '#12B76A',
        700: '#027A48',
      },

      error: {
        500: '#F04438',
        700: '#B42318',
      },

      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
    },
  },
}
