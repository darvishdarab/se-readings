---
id: ci
title: Continuous integration with Github Actions
sidebar_label: Continuous Integration with Github Actions
---

:::info Continuous Integration
Continuous Integration (CI) is a software development practice where developers _integrate_ code into a shared repository **frequently**, ideally several times a day! Among the benefits of this practice is that you can detect errors quickly and resolve them more easily. Watch [this](https://www.youtube.com/watch?v=1er2cjUq1UI) 6 mins video for an intro to CI.
:::

## Build Pipeline

:::tip
A build pipeline is a set of steps that move code from development to production. 
:::

In modern software development, the build pipeline is often automated. That means, for instance, when you commit and push your code into the repository, a cascade of actions will be triggered that include "compiling the code," "executing tests," etc., which eventually result in deploying (software) artifacts. Automated build pipelines are great for implementing **continuous integration** workflows for software. 

In this reading, we'll look at building a simple build pipeline using [Github Actions](https://docs.github.com/en/free-pro-team@latest/actions).


## Creating a Build Pipeline with Github Actions

In order to utilize Github Actions, you need to setup a `.yml` configuration file. Create a folder named `.github` in the root of your project. Then, create a subdirectory inside it named `workflows`. Inside `workflows` folder, create a file named `main.yml` and paste the following content in it:

```yml
# This workflow will build a Java project with Gradle and cache/restore any dependencies to improve the workflow execution time
# For more information see: https://help.github.com/actions/language-and-framework-guides/building-and-testing-java-with-gradle

name: Java CI with Gradle

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2.3.4
    - name: Set up JDK 8
      uses: actions/setup-java@v2.3.1
      with:
        java-version: '8'
        distribution: 'adopt'
        cache: gradle
    - name: Grant execute permission for gradlew
      run: chmod +x gradlew
    - name: Build with Gradle
      run: ./gradlew build jar
    - name: Deploy to Heroku
      uses: AkhileshNS/heroku-deploy@v3.12.12
      with:
        heroku_api_key: ${{secrets.HEROKU_API_KEY}}
        heroku_app_name: "jhu-heroku-demo" #Provide your unique app name here
        heroku_email: "abc@def.com" #Provide your Heroku email address here
```

In this file, we specify a set of events and triggers. In our case, we are inetersted in `push`es to as well as `pull requests` on the `master` branch. Upon either of these events, a set of `jobs` are triggered where each job in return is comprised of _actions_. These are listed under `steps`. We first checkout the content of the repo so that it is available to our workflow. Then, we set up a Java environment in the requested Github runner machine (i.e. ubuntu). Next, we make sure `gradlew` is executable by running `chmod +x gradlew` before using it to build a fresh fat-jar file out of our project. Once the jar file is produced, we deploy to Heroku from there using `AkhileshNS/heroku-deploy@v3.12.12`. 

In order to be able to deploy to Heroku from Github runner servers we need to authorize Github though so that it can deploy to our Heroku account on our behalf. This is best done by setting up a **Github secret**: First, go to your Heroku account and go to _Account Settings_. Scroll to the bottom until you see API Key. Copy this key and go to your project's repository on GitHub. In your repo, go to _Settings_ -> _Secrets_ and click on _New Secret_. Then enter `HEROKU_API_KEY` as the name and paste the copied API Key as the value. Also, make sure the heroku app name as well as your heroku email are set correctly in the `.yml` file.

### Procfile

Since we are not using Gradle-Heroku plugin to deploy the app, we must tell Heroku how to run our application after it is deployed by Github Actions. To this aim, you need to add a file named `Procfile` to the root of your application directory with the following content:

```plain
web: java -jar build/libs/heroku-demo-1.0-SNAPSHOT.jar
```

Now, try making a new push to your repo. If things are set up correctly and work as expected, upon the push, the Github Actions should execute all the steps and push a fresh build to Heroku. 

