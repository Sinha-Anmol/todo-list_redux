pipeline {
    agent any

    tools {
        nodejs "NodeJS" 
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Sinha-Anmol/todo-list_redux.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
