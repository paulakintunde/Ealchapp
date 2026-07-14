module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // react-native-worklets/reanimated must be last
      'react-native-worklets/plugin',
    ],
  };
};
