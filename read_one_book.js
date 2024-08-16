const EPub = require("epub2").EPub;

const fs = require("fs");

const book = "03c08887-e2e4-4856-a939-065f01483600.epub";
const booksDirectoryName = "books_vn_renamed";

EPub.createAsync(`./${booksDirectoryName}/${book}`)
  .then(function (epub) {
    console.log(epub.metadata);
    epub.getImage(epub.metadata.cover, function (error, img, mimeType) {
      console.log(img);
      fs.writeFileSync(
        "./images_vn/03c08887-e2e4-4856-a939-065f01483600.jpg",
        img
      );
    });
  })
  .catch(function (err) {
    console.log("ERROR\n-----");
    throw err;
  });
