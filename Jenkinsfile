def job_test = "Integration test"
pipeline{
    //untuk define dimana mau dirun
    agent{
        node{
            label 'docker-chrome'
        }
    }

    //Build with Parameters
    parameters{
        choice(name:'RUN', choices: ['All','TAGS'], description:'Run Test by')
        string(name:'TAGS', defaultValue: '', description:'Tags to execute')
    }

    //kumpulan task yang akan kita assign di job tersebut
    //Task: run automation test
    //1. clone source code, masuk ke dalam project
    //2. install dependencies
    //3. run test => run all test
    //3. run by tag 
    //4. generate report 
    stages{
        stage('Install dependencies'){
            steps{
                //semua task operation bisa ditulis di sini
                sh "npm ci"
            }
        }

        stage('Run Test'){
            steps{
                script{
                    if(params.RUN=='All'){
                        sh "npm test"
                    }else{ //run by tag (liat di feature, ex: @BlueColour)
                        // jika run di terminal:npm run cypress-tags -- run -e TAGS='@BlueColour' 
                        sh "npm run cypress-tags -- run -e TAGS='${params.TAGS}'"
                    }
                }
                // sh "npm test"
            }
        }

        stage('Generate report'){
            steps{
                sh "npm run reporter"
                sh "ls cypress/reports"
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: true, 
                    keepAll: true, 
                    reportDir: 'cypress/reports/', 
                    reportFiles: 'index.html', 
                    reportName: 'BDD Atlas MultiCucumber Reporter', 
                    reportTitles: ''
                ])
            } 
        }
    }

    //yang aakn diexecute setelah semua stages
    //always =>
    //failed =>
    //success =>
    post{
        always{
            cucumber jsonReportDirectory: 'cypress/cucumber-json',

            // echo "Ini adalah post()"
        }
    }
}