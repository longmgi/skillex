module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      mobile:'375px',
      tablet:'768px',
      desktop:'1335px'
    },
    colors:
    {
      primary:'#97c680',
      secondary:'#feba88',
      neutrals:'#1e1e2f',
      background:'#faf7f5'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
			addComponents({
			'.container': {
				maxWidth: '100%',
				'@screen tablet': {
				maxWidth: '750px',
				},
        '@screen desktop': {
          maxWidth: '1280px',
        },
			}
			})
		}
  ],
}
