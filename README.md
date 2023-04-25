# Getting Started with Create React App
Architecture Diagram / Solution write up : 
	

  <!-- +----------+         	+--------------+         		+---------+
  |          |  HTTP  	|             |       WebSocket	|           |
  |  Client  +<--------+   	Server    |  +<----------+  |  Logs     |
  |          |          |             |			        |   File    |
  +----------+          +--------------+           		+-----------+
        |                                              			^
        | HTTP GET /                                   		    |
        |                                              			|
        v                                              			|
  +------------+                                		+--------------+
  |             |                                		|              |
  |   React     |                                    	|   Node.js    |
  |   Client    |                               	    |   Server     |
  |             |                                	    |              |
  +-------------+                                	    +--------------+ -->

<!-- Used Technology: NodeJs, ReactJS, WebSocket. -->

In this diagram, the client sends an HTTP GET request to the server, which response with the logs file's initial contents. The client then connects to the server through WebSocket to get real-time updates to the logs file.

The server hosts a Node.js application that handles HTTP requests for the logs file and manages WebSocket connections. The server loads the logs file into memory and uses fs. watch the file to monitor changes to the file. When the file changes, the server distributes the updated logs to all WebSocket clients who are connected.


Overall, this architecture provides a scalable and efficient method of displaying real-time logs to a large number of clients.


<!-- Setup steps/script - -->
	# Here are the steps you can follow to set up the environment to run the OnlineLogsReader application on a Windows environment:
                Install Node.js and NPM
                Create a new react app for the project (npx create-react-app myapp)
                Then create a new component (logcomponent .js) and copy the code for the logcomponent.js implementation of the OnlineLogsReader application.
                Create a new directory for the server-side
                <!-- npm init -y -->
                <!-- npm install --save express ws -->
                Create a new file called server.js and copy the code for the server-side implementation of the OnlineLogsReader application.
                Create a new file called logs.txt in the server directory of the project and add some log data for testing purposes.
                Open a Command Prompt window/terminal and navigate to the root directory of the project. Then, run the following command: node server.js
                Open a new Command Prompt window and run the client: npm start
                Open your web browser and navigate to http://localhost:3001 to view the OnlineLogsReader application

<!-- OnlineLogsReader application on a Linux/Mac environment: -->
	
Install Node.js and NPM
mkdir online-logs-reader
cd online-logs-reader
Create a new react app for the project (npx create-react-app myapp)
Then create a new component (logcomponent .js) and copy the code for the logcomponent.js implementation of the OnlineLogsReader application.
Create a new directory for the server-side
npm init -y
npm install --save express ws
Create a new file called server.js and copy the code for the server-side implementation of the OnlineLogsReader application.
Create a new file called logs.txt in the server directory of the project and add some log data for testing purposes.
Open a Command Prompt window/terminal and navigate to the root directory of the project. Then, run the following command: node server.js
Open a new Command Prompt window and run the client: npm start
Open your web browser and navigate to http://localhost:3001 to view the OnlineLogsReader application





	


