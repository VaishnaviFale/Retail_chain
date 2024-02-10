pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'scp target/myapp.war user@remotehost:/path/to/deployment/directory'
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
