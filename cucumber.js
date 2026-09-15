
module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: [
      'src/steps-definition/**/*.ts',
      'hooks/**/*.ts'
    ],
    paths: [
      'src/features/**/*.feature'
    ]
  }
};
