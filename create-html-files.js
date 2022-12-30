const fs = require("fs");

const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];

  // EN: Loop through the numbers specified in the number array
  // TR: Number dizisinde belirtilen sayılar için döngü oluştur
for (const num of number) {
  // EN: Create the content for the HTML file
  // TR: HTML dosyası için içerik oluştur
  const html = `
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
  `;

  // EN: Create the file and write the content
  // TR: Dosyayı oluştur ve içeriği yaz
  fs.writeFileSync(`${num}.html`, html);
}