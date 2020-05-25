---
date: "2019-12-20"
title: "A Designer’s Guide to the Terminal"
description: "You can learn how to use the terminal in a fairly short amount of time. You don’t need a C.S. degree. You don’t need to know how to hack any mainframes."
image: "https://react.design/social/terminal.png"
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
    background: rgba(0, 0, 0, 0.80) linear-gradient(0deg, black, transparent);
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

# A Designer’s Guide to the Terminal
You can learn how to use the terminal in a fairly short amount of time. You don't need a C.S. degree. You don't need to know how to hack any mainframes.

With the terminal, you can open, move, rename, copy and delete files. Same with directories (folders). The terminal is the Finder app on steroids. File management is just the start. The terminal is the interface for a slew of power tools.

You can install and run programs.  
You can version files.  
You can read documentation offline.  
You can write scripts to automate tasks.  
You can edit programs.  
You can configure hidden OS settings.  
You can tunnel into servers.  
You can take full advantage of open source resources.  

If you're using React, you can quickly spin up applications and install design systems.
If you're using git you can contribute to the execution of your design work.  

The terminal is a powerful tool.  
It's a powerful tool for designers.  
It's a powerful tool for anyone.

## Make it look nice
<div class="img-lg">
  <img src="./assets/terminal/colors.png" />
</div>

The Terminal can also be a bit daunting.
I recommend making it look nice first.
[Download](https://github.com/philipcdavis/laurelin) a nice theme.
Extract the zip file, and import it into your terminal.

Open Terminal.  
`CMD` + `,` to open up settings.  
Import the `.terminal` file and set it to default.  
Restart the Terminal.  

If you aren't happy with the default monospace font, there are plenty of good options to choose from:  

SF Mono (Pre-installed)  
[Input](https://input.fontbureau.com/)  
[Inconsolata](https://fonts.google.com/specimen/Inconsolata)  
[Space Mono](https://fonts.google.com/specimen/Space+Mono)  
[Office Code Pro](https://github.com/nathco/Office-Code-Pro)  
[PragmataPro (paid)](https://www.fsd.it/shop/fonts/pragmatapro/)  
[Operator (paid)](https://www.typography.com/blog/introducing-operator)  
[Cartograph (paid)](https://connary.com/cartograph.html)  

## Starter Commands
The Terminal helps you move around and modify the file system.
Here are 7 commands that are important as you get started:

### 1. List  — `ls`
`ls` shows the files and directories in your current directory.

### 2. Change Directory  — `cd`
`cd` is how you move around.  
`cd ..` will take you to the parent directory.  
`cd Documents` will take you into the `Documents` directory. For this to work, you need to be currently in a location that contains a `Documents` directory.

### 3. Move  — `mv`
`mv` is used to move files from one directory to another.  
`mv file.txt new/file.txt` moves a file from your current directory to the `new` directory.  
`mv file.txt new.txt` will rename `file.txt` to `new.txt`.

### 4. Create  — `touch`
`touch` is used to create files.  
`touch hello.md` creates a file named `hello.md` in your current directory.

### 5. Make Directory  — `mkdir`
`mkdir` creates a directory.  
`mkdir images` creates a directory named `images` in your current directory.

### 6. Remove  — `rm`
`rm` removes a file.  
`rm -d` removes a directory.  
`rm -rf node_modules` will recursively delete the `node_modules` directory and every file/directory inside of it. Most commands you run in your terminal are harmless. **Be careful with this command.** Deleted objects aren't stored in Trash, and there's no undo.

### 7. Open  — `open`
`open` will open a file in the using the default program for that file type.  
`open index.html` will launch your default browser with the html page in the location bar.  
`open README.md` will open up your default markdown editor.

## Important Locations
If you're on a Mac some locations have a shorthand.

`/` is shorthand for your root directory.  
`~` is shorthand for your user directory.  
`.` is shorthand for your current directory.  

You can change directory from any location into your user (`cd ~`) or root (`cd /`) directory by using these shorthand locations.
Additionally, `cd` without a provided location will move you into your user directory.

You can use a tool like [bashmarks](https://github.com/huyng/bashmarks) to save and visit commonly used directories.

Typing long location names gets old. In addition to shorthand, you can autocomplete locations using `tab`.

## Custom Prompts and Commands
By default your Terminal includes computer and user information in the prompt.

```
Philips-MacBook:Documents philipdavis$
```

It's common to remove this and replacing it with the current location followed by a `$` sign.

```
Documents $
```

To do this, we need to edit a `.bash_profile` file (`.zprofile` if you're running MacOS Catalina) which allows us to customize our terminal further.
The `.bash_profile` file is located in the home `~` directory. If you run ls and you don't see it, it's because it's a dot file.
Dot files are hidden by default, but we can see them if we add parameters to our `ls` command.

Parameters for terminal commands are often passed after a `-` dash. `ls -alhG` shows you all files (including dot files) in an easier to scan format, with file size and colorized folders.

This is what the normal `ls` looks like.
<div class="img-lg">
  <img src="./assets/terminal/list.png" />
</div>
And now with the additional parameters.
<div class="img-lg">
  <img src="./assets/terminal/list-formatted.png" />
</div>

If you don't see a `.bash_profile` in your home directory, you will need to create it.

```
touch .bash_profile
```

Once you have the file you can open it in a text editor.
```
atom .bash_profile
```

Once the file is opened, you can add the following string to replace the prompt cruft (computer name, location and user) with the location and a money `$` sign.

```
export PS1="\W \$ "
```

In addition, instead of remembering all the parameters for `ls -alhG` you can add an alias so that `ls` uses it by default.

```
alias ls="ls -alhG"
```

Save the `.bash_profile` file, run `source ~/.bash_profile` and then restart the terminal to start using the new settings.

You can create aliases for any commands that you commonly use.
I've created aliases for scaffolding react applications, and starting node applications. Here's what your `.bash_profile` might look like after you've added your own custom aliases.

```
export PS1="\W \$ "
alias ls="ls -alhG"
alias ns="npm start"
alias cra="create-react-app"
```

## The Power Tools
<div class="img-sm">
  <img src="./assets/terminal/logos.png" />
</div>
In additional to basic shell commands there are a number of powerful tools that allow you do more in your terminal. I've listed a few below. Each takes time to learn. Each has something valuable to offer.

**[git](https://git-scm.com/)** for versioning and collaboration.  
**[npm](https://www.npmjs.com/)** or **[yarn](https://yarnpkg.com/lang/en/)** for installing and versioning node modules.  
**[homebrew](https://brew.sh/)** for installing programs and applications.  
**ssh** for tunneling into servers.  
**[vim](https://www.vim.org/docs.php)** for editing files in the terminal.  
**[create-react-app](https://github.com/facebook/create-react-app)** for scaffolding react applications

## Piping and Chaining
By default, output from your terminal is displayed in your terminal. You can reroute the output of a command to another file or to your clipboard by using the pipe command `|`.


```
base64 file.jpg | pbcopy
```

Here we are running `base64` on an image which converts it to a [data URI](https://css-tricks.com/data-uris/). We are then copying the data URI to our clipboard. `pbcopy` and `pbpaste` are the commands to copy and paste in terminal.

You can use the `&&` operator to chain commands. This is useful when you need to wait for commands to execute. The `&&` operator acts as a queue. If the first command successfully executes the second will begin running.

```
npm install && atom . && npm start
```

Here, when `npm install` is finished, atom will open with the current directory loaded and then `npm start` will run.


## sudo GoForthAndH4ck.exe
The terminal is a powerful application but it doesn't need to feel intimidating.
If you have questions about using the terminal, or just want some guidance getting set up, please [reach out](https://twitter.com/philipcdavis) to me.
