pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Deliver') { 
            steps {
                sh 'chmod +x ./jenkins/scripts/deliver.sh'
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh 'chmod +x ./jenkins/scripts/kill.sh'
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}