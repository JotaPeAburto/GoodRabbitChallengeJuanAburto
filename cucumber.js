module.exports = {
  default: {
    paths: ['goodrabbit/features/**/*.feature'],
    require: ['goodrabbit/steps/**/*.js'],
    format: ['progress-bar', 'html:cucumber-report.html']
  }
};