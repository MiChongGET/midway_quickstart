export = (appInfo: any) => {
  const config: any = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558794200686_9680';

  // add your config here
  config.middleware = [
  ];

  return config;
};
