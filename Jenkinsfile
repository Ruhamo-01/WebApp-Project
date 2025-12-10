pipeline {
    agent any
    stages {
HEAD
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
 (Add Jenkinsfile for Node.js CI)
            }
        }
        stage('Run Tests') {
            steps {

                bat 'npm test || echo "No tests defined"'
            }
        }
    }

                echo 'Running tests...'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Build and tests successful!'
        }
        failure {
            echo 'Build or tests failed!'
        }
    }
 3fc0601 (Add Jenkinsfile for Node.js CI)
}

