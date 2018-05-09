pipeline {
  agent any

  parameters {
    string(name: 'AppName', defaultValue: 'components')

    // Parameters defined in Jenkins Job. Don't define this parameters here!
    // string(name: SKIP_TESTS)
    // string(name: SKIP_DEPLOY)
    // string(name: BUILD_VERSION)
    // string(name: ENV_QA)
    // string(name: ENV_PROD)

  }

  stages {
      stage('Setup') {
          steps {
              echo 'Installing NPM dependencies'
              sh 'yarn install'
          }
      }
      stage('Test') {
          when {
            expression { !params.SKIP_TESTS }
          }
          steps {
              sh "echo '${params.ENV_QA}' > .env"
              echo 'Running tests'
              sh 'yarn test'
          }
      }
      stage('Build') {
          steps {
              sh "echo '${params.ENV_QA}' > .env"
              sh 'NODE_ENV=production yarn build'
          }
      }

      stage('Deploy') {
          when {
            expression { !params.SKIP_DEPLOY }
          }
          steps {
            // TODO: move built package to S3 storage
            echo 'TODO deploy'
          }
      }
  }

  post {
    always {
      echo 'Cleaning workspace'
      cleanWs()
    }
  }
}
