const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'cypress/reports/cucumber-json/',
    reportPath: 'cypress/reports/',
    reportName:'BDD Atlas',
    metadata:{
        browser: {
            name: 'chrome',
            version: '93'
        },
        device: 'Local test machine',
        platform: {
            name: 'osx',
            version: 'Big Sur'
        }
    },
    displayDuration: true,
    openReportInBrowser: true,
    saveCollectedJSON: true
});