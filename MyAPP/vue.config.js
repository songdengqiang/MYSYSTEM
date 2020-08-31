module.exports = {
  devServer: {
    open: true,
    port: 8989
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  assetsDir: './'
}
