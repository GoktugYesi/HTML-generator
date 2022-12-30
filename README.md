# HTML-Generator
This code creates HTML files for the specified numbers. For each number, an HTML file is created and its content is modified as follows:

```HTML
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${num}</title>
</head>
<body>
  <h1>Hello World ${num}. page</h1>
</body>
</html>
```

The file name is matched with the generated number (e.g. "1.html", "2.html" or "3.html").

#Prerequisites

## Prerequisites

Herhangi bir ek bilgi buraya gelir

  Node.js
## Prerequisites

- [Node.js]((https://choosealicense.com/licenses/mit/))


## Usage

1. Open the code in a text editor (e.g. Notepad, Sublime Text or Atom) and save it. For example, you can save it as "create-html-files.js".
2. In the command prompt (Command Prompt or Terminal), go to the directory where the code is saved. For example:

```
cd C:\Users\Username\Documents\code
```
3. Run the following command to execute the code:
```
node create-html-files.js
```
This command will create the "1.html", "2.html" and "3.html" files and write their content. The files will be located in the directory where the code is saved.

## Customization
You can customize the code by changing the `number` array to specify the numbers you want to create the HTML files for. You can also modify the content of the HTML file by editing the template in the code.
