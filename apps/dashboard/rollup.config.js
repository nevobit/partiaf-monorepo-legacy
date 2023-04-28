export default {
 output: {
   chunkFileNames: "[name]-[hash].js",
   manualChunks(id) {
     if (id.includes("node_modules")) {
       return "vendor";
     }
   },
   chunkSizeWarningLimit: 1000000000
 }
};