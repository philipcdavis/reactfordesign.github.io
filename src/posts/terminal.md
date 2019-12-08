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
    animation: TerminalBackground 7s infinite alternate;
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
      animation: TerminalBackground 7s infinite alternate;
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
    animation: TerminalCursor 7s infinite alternate;
    padding: 20px 15px;
    line-height: 0;
  ">
      >
  </div>
</div>

# A Designers Guide to the Terminal
You can learn how to use the terminal in a fairly short amount of time. You don't need a C.S. degree. You don't need to know how to hack any mainframes.

With the Terminal, you can open, move, rename, copy and delete files. Same with directories (folders). The terminal is the Finder application on steroids. File management is just the start. It's the entry point for a slew of power tools.

You can install and run programs without using a browser.  
You can version files.  
You can read offline documentation.  
You can write scripts to automate tasks.  
You can edit programs.  
You can configure hidden OS settings.  
You can tunnel into servers.  
You can take full advantage of open source resources.  

If you're using React, you can quickly spin up applications and install design systems.  
You can meaningfully contribute to the execution of your design work.  

The terminal is a powerful tool.  
It's a powerful tool for designers.  
It's a powerful tool for anyone.

## Make it look nice
<img src="./colors.png" />
The Terminal can also be a bit daunting.
I recommend making it look nice first.
Download a nice theme [link].
Extract the zip file, and import it into your terminal.
1. Open Terminal
2. `CMD` + `,` to open up settings
3. Import the `.terminal` file and set it to default.
4. Restart the Terminal

There are a number of good monospace font options as well:
1. SF Mono (Pre-installed)
2. [Input](https://input.fontbureau.com/)
3. [Inconsolata](https://fonts.google.com/specimen/Inconsolata)
4. [Space Mono](https://fonts.google.com/specimen/Space+Mono)
6. [Office Code Pro](https://github.com/nathco/Office-Code-Pro)
6. [PragmataPro (paid)](https://www.fsd.it/shop/fonts/pragmatapro/)
6. [Operator (paid)](https://www.typography.com/blog/introducing-operator)
6. [Cartograph (paid)](https://connary.com/cartograph.html)

## Starter Commands
The Terminal helps you move around and modify the file system.
Here are 7 commands that are important as you get started:

1. `ls` shows the files and directories in your current directory.

2. `cd` is how you move around.  
`cd ..` will take you to the parent directory.  
`cd Documents` will take you into the `Documents` directory. For this to work, you need to be currently in a location that contains a `Documents` directory.

3. `mv` is used to move files from one directory to another.  
`mv file.txt newLocation/file.txt` moves a file from your current directory to the `newLocation` directory.  
`mv file.txt renamedFile.txt` will rename `file.txt` to `renamedFile.txt`.  

4. `touch` is used to create files.  
`touch hello.md` creates a file named `hello.md` in your current directory.

5. `mkdir` creates a directory.  
`mkdir images` creates a directory named `images` in your current directory.

6. `rm` removes a file.  
`rm -d` removes a directory.  
`rm -rf node_modules` will recursively delete the `node_modules` directory and every file/directory inside of it. Most commands you run in your terminal are harmless. This one isn't. Please be careful, you could end up deleting much more than you want.

7. `open` will open a file in the using the default program for that filetype.  
`open index.html` will launch your default browser with the html page in the location bar.  
`open README.md` will open up your default markdown editor.

## Important Locations
If you're on a Mac some locations have a shorthand.

`/` is shorthand for your root directory.  
`~` is shorthand for your user directory.  
`.` is shorthand for your current directory.  

You can change directory from any location into your user or root directory by using these shorthands.
Additionally, `cd` without a provided location will move you into your user direction

You can use a tool like [bashmarks](https://github.com/huyng/bashmarks) to save and visit commonly used directories.

Typing long location names gets old. In addition to shorthand, you can autocomplete locations using the tab button.

## Custom Aliases
[IMG]
Parameters for terminal commands are often passed after a `-` dash. `ls -alhG` shows you all files (including dot files) in an easier to scan format, with file size and colorized folders.

This is what the normal `ls` looks like.
<img src="./ls.png" />
And now with the additional parameters.
<img src="./lsAlhg.png" />

It looks much better but it's a pain to remember. If you create a `.bash_profile` file in your user directory you can write aliases for commonly used commands.

`alias ls="ls -alhG"`

Save the `.bash_profile` file and run `source ~/.bash_profile` to refresh.

You can create aliases for any commands that you commonly use.
I've created aliases for scaffolding react applications, and starting node applications.


## The Power Tools
<img src="./logos.png" />
In additional to basic shell commands there are a number of powerful tools that allow you do more in your terminal. I've listed a few below. Each takes time to learn. Each has something valuable to offer. If you're looking to pick up a skill, here are some good options.

`git` for versioning and collaboration.  
`npm` for installing and versioning node_modules.  
`atom` or `code` for opening and preloading your editor.  
`homebrew` can be used for installing programs and applications.  
`ssh` can be used to tunnel into servers.  
`vim` for editing files in the terminal.  

Once you jump in, you'll never want to get out.
If you have questions about using the terminal, or just want some guidance getting set up, please reach out to me.

<hr />

[Share on Twitter]

[React for Designers]
