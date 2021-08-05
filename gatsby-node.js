exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
                test: /leaflet/,
                use: loaders.null(),
            },
            {
              test: /react-leaflet/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }