### Firstly, We need to get prepared for the environment that we will work on

## 1 --> Download node.js latest version and then install it
https://nodejs.org/en/download

## 2 --> Choose your work space by writing that command in the terminal of any directory you want
npm init

### Notation ----->  If that command doesn't work and shows this message
## "File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system"

## You can excute the following steps
# 1 --> Run powershell as an administerator 
# 2 --> Write that command 
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
###


## 3 --> Fill your package fields up which will be called "package.json"

## 4 --> Install jest testing framework by that command as it's not required for the project, but it's only for devoloping "dev"
npm i jest --save-dev

## 5 --> For a better practice you can go to our .json package and change the "test" script to that one so the project will be auto-saved
"jest --watchAll"

## 6 --> You will need to install the following extinsions

# 1 --> Live Server
# 2 --> Jest
# 3 --> Jest Runner
# 4 --> Jest Snippets


### Secondly, You can pull my project and work on