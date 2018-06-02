A web application to navigate a mockup product page.


##### Build Tool
First, you need to download and install maven (version 3.2.3+).

Be sure to set up a M2_REPO environment variable.

##### Java
You'll need a Java JDK to build and run the project (version 1.8).

The files for the project are kept in a code repository,
available from here:

https://github.com/blakeah/mockup

##### Building
Install the necessary project dependencies:

    $ mvn install

To run the Application from the Command Line:

    $ mvn clean spring-boot:run
    
To run the Application from the Command Line without executing the tests:

    $ mvn clean spring-boot:run -Dmaven.test.skip=true

To build a deployable war file for local development, if preferred:

    $ mvn clean package

You should have a deployable war file in the target directory.
Deploy as usual in a servlet container, e.g. tomcat.

To access the page the default url is localhost808:/dev/