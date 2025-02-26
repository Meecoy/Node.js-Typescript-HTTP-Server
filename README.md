
# Typescript HTTP server

A simple http server made with Node.js and Typescript, primarly using Node HTTP, node-fetch and Electron modules. It can be buggy, unreliable and unfortunately only supports JSON files, but it's beautiful in it's own way (also at least it works!).



## Supported Methods

 - GET
 - POST
 - DELETE


## Install and run server with GUI

To run this server on your machine first clone the directory from github.

```bash
  git clone https://github.com/Meecoy/Node.js-Typescript-HTTP-Server
  cd Node.js-Typescript-HTTP-Server
```

Make sure to have Node.js and npm installed, then run ```npm install ``` to install all required dependencies.

To run the server on your machine type in your terminal ```npm run start``` or ```npm run build```, after that a window with 3 http methods inputs should appear.

#### Note! Exit only by terminating the terminal process with Ctrl + C, NOT BY EXITING THE WINDOW. Because of Electron limitations, HTTP server is run as a child process and won't close succesfully if you only close the Electron window!

If you only want to run the server, without worrying about GUI or 3/4 of my whole time that I spend on this thing, you can just run ```node build/server.js```, but it would be nice if you actually used the GUI ❤️‍🩹❤️‍🩹❤️‍🩹 (even though it's a sore in the eyes).
## That's how it should look like

![App Screenshot](https://i.imgur.com/RyPwA1W.png)


# How it works

As stated above, the main or parent process is Electron's main.js located in build folder, that initializes the 800 x 600 window (I didn't change these values from the default ones becuase I use window manager anyway, it also shouldn't be problem for any person that doesn't use literal fridge as their mainframe) with a simple and quite barely presentable 3 HTML forms, each one sending an input with method titled above them.

After that a child-process is run initializing the server, if succesful it should print out `Server running live on http://127.0.0.1:2115/`. The default port is 2115, but it can be changed in `render.ts` and `server.ts` files, but you need to run `npm build` afterwards.

Node.js is made purely for java script, that's why typescript files have to be converted to the .js files in /build directory with either `npm run build` or using `tsc` in src.

Server itself can run on it's own without Electron, by just using `node build/server.js` or other modules like `nodemon`. To fetch requests from the server you can use `curl`, for example `curl -X GET "http://127.0.0.1:2115/products?id=1"`.

The whole "database" is stored in a `src/products.json` file (The server is mostly focused on adding and managing fictional products). Basic product json structure is:

```
{
    id: number,
    title: string,
    description: string,
    price: number,
};
```










## Features

- Graphical interface for inputing data
- Support for 3 HTTP requests
- Unpleasant to work with CSS


## To Do if I ever revive this project

- Better css and more input options

- There is a few unused tags I've forgotten to remove before commiting

- More than 3 supported HTTP methods

- Make it more stable and more natural to use for user

