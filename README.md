# google-analytics-persister

Read data from Google Analytics and persist them in Time Series Database (InfluxDB).

## Setup and Run

It is required to have nodejs installed. Other dependecies can be installed by running `npm install`.  
Create `.env` file based on sample `.env.example` and fill information about host and name of the database you want to use.  
To start the task for collecting and persisting data run `npm start`.