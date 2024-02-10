pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'building'
            }
        }
        stage('Test') {
            steps {
                echo 'testing'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
    post {
        success {
            slackSend channel: '#build-notifications',
                      color: 'good',
                      message: 'Build successful! :white_check_mark:'
        }
        failure {
            slackSend channel: '#build-notifications',
                      color: 'danger',
                      message: 'Build failed! :x:'
        }
    }
}
