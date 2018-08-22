Useful Resources 

https://www.codejava.net/java-ee/servlet/webservlet-annotation-examples
https://javapapers.com/servlet/what-is-servlet-mapping/
http://www.in28minutes.com/first-java-web-application-with-jsp-and-servlets-in-25-steps

Configuration Parameter:

Step 1:
Tomcat user file config :
nano /opt/tomcat/conf/tomcat-users.xml

Add this line

<role rolename="manager-gui"/>
<role rolename="manager-script"/>
<user username="admin" password="password" roles="manager-gui, manager-script"/>

Step 2:
Maven configuration :
nano /usr/share/maven/conf/settings.xml

Add this below line

<servers>
      <server>
          <id>TomcatServer</id>
          <username>tomcat</username>
          <password>tomcat</username>
        </server>
  </servers>
  
Step 3:
pom.xml file configuration in eclipse web app

Condition 1 :
              If you want to run maven based web application in eclipse itself then follow this below plugin
<plugin>
					<groupId>org.apache.tomcat.maven</groupId>
					<artifactId>tomcat7-maven-plugin</artifactId>
					<version>2.2</version>
					<configuration>
						<path>/</path>
						<contextReloadable>true</contextReloadable>
					</configuration>
</plugin>
              
 Condition 2 :
              If you want to deploy and run maven based web application on dedicated remote Tomcat application sever.
              The follow this step...
              
<plugin>
					<groupId>org.apache.tomcat.maven</groupId>
					<artifactId>tomcat7-maven-plugin</artifactId>
					<version>2.2</version>
					<configuration>
						<url>http://localhost:8081/manager/text</url>
						<username>tomcat</username>
						<password>tomcat</password>
						<server>TomcatServer</server>
						<path>/gnrc-web-app</path>
						<contextReloadable>true</contextReloadable>
					</configuration>
</plugin>
  
  command :
        mvn tomcat7:deploy
        mvn tomcat7:redeploy
        mvn tomcat7:undeploy
        mvn tomcat7:run
        
        


