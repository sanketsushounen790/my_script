const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const booksDirectoryName = "books";
const booksDirectoryForRenamedBooks = "books_renamed";

fs.readdir(`./${booksDirectoryName}`, (err, files) => {
  if (err) throw err;

  //Duyệt qua từng cuốn sách
  files.map((book) => {
    const uniqueId = uuidv4();

    //Lưu lại original name và tên mới đã đổi tương ứng của sách
    fs.appendFileSync(
      "./logs/book_renamed_vn.txt",
      JSON.stringify(`${book} - ${uniqueId}.epub`, null) + "\r\n"
    );

    //Đổi tên sách
    fs.rename(
      `./${booksDirectoryName}/${book}`,
      `./${booksDirectoryForRenamedBooks}/${uniqueId}.epub`,
      //Bắt lỗi trong quá trình đổi tên sách
      (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`${book} - ${uniqueId}.epub`);
        }
      }
    );
  });
});
