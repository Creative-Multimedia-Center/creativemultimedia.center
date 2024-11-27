import UnoCSS from 'unocss/vite'


export default {
  base: './',
  server: {
    port: 1337,
    strictPort: false,
  },
  preview: {
    host: "0.0.0.0",
    port: 31337
  },
  plugins: [
    UnoCSS(),
  ],
}
