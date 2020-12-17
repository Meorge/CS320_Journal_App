# Setting up Journaler
The Journaler software uses the Meteor framework. As a result, there is some extra setup that needs to be done in order to get the software up and running.

## Linux and macOS
In the Terminal, run the following command:
```
curl https://install.meteor.com/ | sh
```
Navigate the Terminal to the project's root directory, and run the command
```
meteor npm install
```
Once this is complete, start Journaler by running the command
```
meteor
```

These should be all of the steps necessary to get Journaler up and running. If you follow these instructions and the program is still not running, please contact one of the team members and we can help you get it set up:
- Malcolm Anderson (malcolm.i.anderson@wsu.edu)
- Antonio Maniscalco (antonio.maniscalco@wsu.edu)
- Chase Jamieson (chase.jamieson@wsu.edu)


## Windows
In Windows PowerShell-administrative shell, run the following command:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
Wait a few Seconds for this to complete, if you don't see any errors run the command:
```
choco install meteor
```
Once this is complete, meteor should be installed on your device. 
In the project's directory, start Journaler by running the command
```
meteor
```

## Developing with IntelliJ
IntelliJ can interface with Meteor:
- If running in the Intellij IDE, select `Edit Configurations`.<br/>
       ![image](https://user-images.githubusercontent.com/73863212/102423397-c7e56300-3fbd-11eb-904e-81d3b178506e.png)

- Select the `+` to add a new configuration.<br/>
        ![image](https://user-images.githubusercontent.com/73863212/102423528-198ded80-3fbe-11eb-91d6-0d5023314bbf.png)
- Select Meteor, name the configuration, and click `OK`.<br/>
        ![image](https://user-images.githubusercontent.com/73863212/102423543-1eeb3800-3fbe-11eb-978b-a3b720d071d9.png)
     
