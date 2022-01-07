module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2020
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': 'error', // 禁止在代码中使用 debugger
    quotes: ['error', 'single'], // 单引号
    semi: ['error', 'always'], // 代码需要以分号结尾

    '@typescript-eslint/no-explicit-any': ['off']
  }
};
