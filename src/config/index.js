import production from './production';
import staging from './staging';

const configs = {
  production,
  staging,
};

export default {
  port: process.env.PORT,
  defaultLocale: 'en',
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Starter Boilerplate',
    titleTemplate: 'React Starter Boilerplate - %s',
    meta: [
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.',
      },
    ],
  },
  ...configs[process.env.APP_ENV],
};
