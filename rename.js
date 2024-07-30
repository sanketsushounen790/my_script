const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const booksDirectoryName = "books";
const booksDirectoryForRenamedBooks = "books_renamed";

fs.readdir(`./${booksDirectoryName}`, (err, files) => {
  if (err) throw err;

  files.map((book) => {
    console.log(book);
    const uniqueId = uuidv4();

    fs.rename(
      `./${booksDirectoryName}/${book}`,
      `./${booksDirectoryForRenamedBooks}/${uniqueId}.epub`,
      (error) => {
        if (error) {
          // Show the error
          console.log(error);
        } else {
          console.log(`${book} - ${uniqueId}.epub`);
        }
      }
    );
  });
});
