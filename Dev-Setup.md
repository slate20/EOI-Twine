# Development Environment Setup Guide

Welcome to EOI! This guide will walk you through setting up your development environment to contribute to the project effectively. We use Visual Studio Code (VSCode) for our IDE and Tweego for compiling our Twine stories using the SugarCube format. Follow the steps below to get started.
<br><br>
## Step 1: Setting Up VSCode and GitHub Repository

1. **Create a Local Workspace:**
   Create a new folder on your computer where you'll store the project files.

2. **Clone the GitHub Repository:**
   Pull down the repository to the folder you created. You can use GitHub Desktop for this or use extensions within VSCode if you prefer that method.

3. **Install VSCode:**
   If you don't already have it installed, download and install Visual Studio Code from [the official website](https://code.visualstudio.com/).

4. **Open Workspace:**
   Open VSCode and use the `File > Open Folder` menu option to open the folder you created which should now contain the cloned repository.

5. **Install Twee 3 Language Tools Extension:**
   Go to the Extensions view (`Ctrl+Shift+X`) in VSCode, search for "Twee 3 Language Tools", and install it. This extension provides syntax highlighting and other helpful tools for working with Twee files.
<br><br>
## Step 2: Twine/Tweego Setup

1. **Download and Install Tweego:**
   - Go to [https://www.motoslave.net/tweego/](https://www.motoslave.net/tweego/) and download the latest version of Tweego.
   - Extract the downloaded ZIP file to a desired directory on your computer.
   - Add the full directory path of the extracted Tweego to your system's PATH environment variable to run Tweego from any command line.

2. **Download and Install SugarCube:**
   - Download the latest version of SugarCube from [https://www.motoslave.net/sugarcube/2/](https://www.motoslave.net/sugarcube/2/).
   - Extract the ZIP file and copy the `sugarcube-2` folder inside.
   - Navigate to your Tweego directory, find the `storyformats` folder, and replace the existing `sugarcube-2` folder with the one you've just copied.
<br><br>
## Step 3: Working with VSCode

- To start working on the project in VSCode, press `Ctrl+Shift+B` to run the built-in tweego task. This task watches for changes in your project files and automatically recompiles to `EOI-debug.html`.
<br><br>
## Finished!

You're now ready to contribute to our project! With your development environment set up, you can start editing, testing, and pushing your changes. <br>

___*Please be sure to start a new branch for your work.___ Once ready, the project team will review and handle merging into the parent branch.
If you have any questions or run into issues, don't hesitate to reach out to @slate20.
