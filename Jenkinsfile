pipeline {
    agent {
        docker { image 'node:16.13.1-alphine' }
    }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
    post {
        always {
            echo "Finishing Deploy"
        }
        success {
            echo 'Success!'
        }
        failure {
            echo 'Failed!'
        }
    }
}