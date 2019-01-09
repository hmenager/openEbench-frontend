pipeline {
    agent any
    
        stages {

            stage('Install modules') {
                steps {
                    // Install Modules
                    sh 'HOME=/home/jenkins npm install --no-save'
                }
            }

            stage('Build') {
                steps {
                    // Create dist folder
                    sh 'HOME=/home/jenkins PATH="${PWD}/node_modules/.bin:${PATH}" ng build --prod --base-href /html/'
                }
            }

            stage('Backup previous deployment') {
              
                steps{
                    script{ // Check if prod folder exits if exits make a copy ro prod_old else create a prod folder
                        if(env.BRANCH_NAME == 'development'){    
                            def folder = fileExists '/home/jenkins/prod'

                            if (folder) { 
                                sh 'rm -R /home/jenkins/prod_old/*'
                                sh 'cp -R /home/jenkins/prod /home/jenkins/prod_old' 
                            } else {
                                sh 'mkdir /home/jenkins/prod' 
                            }
                        }
                    }
                }
            }

            stage('Clean production files') {
                   
                steps {
                    script{
                        if(env.BRANCH_NAME == 'development'){ 
                            sh 'HOME=/home/jenkins rm -R /home/jenkins/prod/*'
                        }
                    }
                }
            }

            stage('Move Build to Production') {
                
                steps {
                    script{
                        if(env.BRANCH_NAME == 'development'){
                            sh 'HOME=/home/jenkins cp -R ./dist/* /home/jenkins/prod'
                        }
                    }
                }
            }
        }
    
}