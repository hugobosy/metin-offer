const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },
  react: { useSuspense: false },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./src/locales'),
};
