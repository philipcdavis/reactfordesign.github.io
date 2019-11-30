---
path: "/terminal"
date: "2019-04-08"
---
<style>
  @keyframes TerminalBackground {
    0%{background-position:0% 100%}
    25%{background-position:0% 75%}
    50%{background-position:0% 50%}
    75%{background-position:0% 25%}
    100%{background-position:0% 0%}
  }

  @keyframes TerminalCursor {
      0% { color: #F04DFF; }
      25%  { color: #FF4D4D; }
      50% { color: #FFC54D; }
      75% { color: #6AED76; }
      100% { color: #0099FF; }
  }
</style>

<div style="
    position: relative;
    padding: 2px;
    background: linear-gradient(0deg,#F04DFF, #FF4D4D, #FFC54D, #6AED76, #0099FF);
    background-size: 300% 300%;
    width: 100px;
    margin: 100px auto 60px auto;
    animation: TerminalBackground 10s infinite alternate;
    border-radius: 12px;
  ">
    <div style="
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.3;
      background: linear-gradient(0deg,#F04DFF, #FF4D4D, #FFC54D, #6AED76, #0099FF);
      background-size: 300% 300%;
      width: 100px;
      animation: TerminalBackground 10s infinite alternate;
      border-radius: 12px;
      filter: blur(10px);
    ">

  </div>
  <div style="
    background-color: black;
    border-radius: 11px;
    height: 76px;
    opacity: 0.95;
    color: #FFB212;
    animation: TerminalCursor 10s infinite alternate;
    padding: 20px 15px;
    line-height: 0;
  ">
      >
  </div>
</div>

# A Guide to the Terminal
If you know how to use Finder on MacOS you mostly know how to use the Terminal.

The terminal allows you to view, move, rename, copy, delete and open files. It allows you to create, modify and move about directories. All basic functions that you get with finder.

You can do more than file management.  
You can install and run programs without using a browser.  
You can version files.  
You can read documentation.  
You can write scripts to automate your life.  
You can edit programs.  
You can configure hidden OS settings.  
You can tunnel into servers.  
You can leverage the work of millions of developers.  

If you're using React, you can spin up applications.  
You can install design systems.  
You can contribute to the execution of your design work.  

The terminal itself is a powerful tool.
It's a powerful tool for designers.
It's a powerful tool for anyone.

## Make it look nice
The Terminal can also be a bit daunting.
I recommend making it look nice first.
Download a nice theme [link].
Extract the zip file, and import it into your terminal.
1. Open Terminal
2. `CMD` + `,` to open up settings
3. Import the `.terminal` file and set it to default.
4. Restart the Terminal

I like using the SF Mono font in terminal, but there are a number good options:
1. Menlo (Pre-installed)
2. [Input](https://input.fontbureau.com/)
3. [Operator](https://www.typography.com/blog/introducing-operator)


## Basic Commands
The Terminal helps you move around and modify the file system.
Here are 7 commands that are important as you get started:

*I use the term directory a lot here. A directory is just a folder*

1. `ls` shows the files and folder of your current directory.

2. `cd` is how you move around.  
`cd ..` will take you to the parent directory.    
`cd Documents` will take you into the `Documents` directory. For this to work, you need to be currently in a location that contains a `Documents` directory.

3. `mv` moves files from one directory to another.  
`mv file.txt newLocation/file.txt` moves a file from your current directory to the `newLocation` directory.
`mv file.txt renamedFile.txt` will rename `file.txt` to `renamedFile.txt`.

4. `touch` creates an empty file.  
`touch hello.md` creates a file named `hello.md` in your current directory.

5. `mkdir` creates a directory.
`mkdir images` creates a directory named `images` in your current directory.

6. `rm` removes a file.
`rm -d` removes a directory.
`rm -rf node_modules` will recursively delete the folder and every file/directory inside of it. In general, most commands you run in your terminal are harmless. This one isn't. Please be careful, you could end up deleting much more than you want.

7. `open` will open a file in the using the default program for that filetype.
`open index.html` will launch your default browser with the html page in the location bar.
`open README.md` will open up your default markdown editor.

## Locations
If you're on a Mac some locations have a shorthand.

`/` is shorthand for your root directory  
`~` is shorthand for your user directory  
`.` is shorthand for your current directory  

I use [bashmarks](https://github.com/huyng/bashmarks) to save and jump to commonly used directories.

Typing long location names gets old. In addition to shorthand, you can autocomplete locations using the tab button.


## Making Custom Shorthands
Parameters for terminal commands are often passed after a `-` dash. `ls -alhG` shows you all files (including dot files) in an easier to scan format, with file size and colorized folders. It's an awesome way to view your current directory but it's a pain to remember. If you create a `.bash_profile` in your user directory you can write aliases for commonly used commands.

`alias ls="ls -alhG"`

After writing that line in your .bash_profile, save the file and run `source ~/.bash_profile` to refresh

## sudo release-the-kraken.exe
In additional to basic shell commands there are a number of powerful tools that allow you do more in your terminal. I've listed a few below. Each takes time to learn. Each has something valuable to offer. If you're looking to pick up a skill, here are some options.

`git` for versioning all the things
`npm` for installing and versioning node_modules
`atom` or `code` for opening and preloading your editor.
`homebrew` can be used for installing programs and applications.
`ssh` can be used to tunnel into servers.
`vim` for editing files in the terminal.

Go forth and h4ck.
