
module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: [
      'src/features/step_definitions/**/*.ts',
      'hooks/**/*.ts'
    ],
    paths: [
      'src/features/**/*.feature'
    ],
    format: [
      'progress',
      'html:reports/cucumber-report.html'
    ],
    timeout: 60000
  }
};
