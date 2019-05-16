// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/loginapp'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};


function calculate(workers) {
  let sal = [];
  for(i=0; i< workers.length; i++) {
     if(typeof workers[i] === 'string'){
      worker = workers[i].split(' ');
    if(worker[1] == "Contractor" ) {
        if(!isNaN(worker[3])){
          sal.push(worker[3] * worker[4] * 52)
        }
    } else {
      
        sal.push(parseInt(worker[3]))
      
    }
    }
  }
  return sal.sort((a, b) => (a < b ? -1 : 1))
}