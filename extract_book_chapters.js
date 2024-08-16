const EPub = require("epub2").EPub;
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");

const jsonFileName = "book_chapters_bulk_indexes.json";
const booksDirectoryName = "books_renamed";

fs.readdir(`./${booksDirectoryName}`, (err, files) => {
  if (err) throw err;

  //Duyệt qua từng cuốn sách
  files.map((book) => {
    EPub.createAsync(`./${booksDirectoryName}/${book}`)
      .then(function (epub) {
        //Bắt lỗi nếu sách không thể extract data do thiết kế của file epub chính chủ bị lỗi cấu trúc chương
        if (epub.toc.length === 0) {
          console.log(
            "--------------------------------------------------------------"
          );
          console.log(
            `${epub.metadata.title}: Cannot extract Chapter data ! - Lỗi sách không thể extract data chapter được !`
          );
          //Lưu lại vào logs những sách ko thể truy cập để extract chapters data được
          fs.appendFileSync(
            "./logs/book_chapters_error.txt",
            JSON.stringify(`${epub.metadata.title} - ${book}`, null) + "\r\n"
          );
          console.log(
            "--------------------------------------------------------------"
          );
        } else {
          //Tiến hành extract chapters data của sách
          epub.toc.map((item) => {
            const index = { index: { _index: "chapters", _id: uuidv4() } };
            const document = {
              chapter_original_id: item.id,
              chapter_title: item.title,
              author: epub.metadata.creator,
              book_title: epub.metadata.title,
              date: epub.metadata.date,
              aws_s3_bucket_url: `https://bookrecognition.s3.ap-southeast-1.amazonaws.com/${book}`,
              cloudinary_cover_url: `https://res.cloudinary.com/yuhiahtcloud/image/upload/book_covers/${book
                .split(".epub")
                .join("")}.jpg`,
              language: "eng",
            };

            //Write and save chapters data đã extract được vào file book_chapters_bulk_indexes.json
            if (fs.existsSync(jsonFileName)) {
              fs.appendFileSync(
                `./${jsonFileName}`,
                JSON.stringify(index, null) + "\r\n"
              );
              fs.appendFileSync(
                `./${jsonFileName}`,
                JSON.stringify(document, null) + "\r\n"
              );
            } else {
              fs.writeFileSync(
                `./${jsonFileName}`,
                JSON.stringify(index, null) + "\r\n"
              );
              fs.writeFileSync(
                `./${jsonFileName}`,
                JSON.stringify(document, null) + "\r\n"
              );
            }
          });
          //Lưu vào file logs những sách đã extract chapters data thành công
          fs.appendFileSync(
            "./logs/book_chapters_done.txt",
            JSON.stringify(`${epub.metadata.title} - ${book}`, null) + "\r\n"
          );
          console.log(
            "--------------------------------------------------------------"
          );
          console.log(`${epub.metadata.title}: Done !`);
        }
      })
      //Bắt lỗi nếu sách không đọc được
      .catch(function (err) {
        console.log(
          "--------------------------------------------------------------"
        );
        console.log("ERROR when reading epub file - Lỗi không đọc được sách\n");
        fs.appendFileSync(
          "./logs/book_chapters_cannot_read.txt",
          JSON.stringify(`${book}`, null) + "\r\n"
        );
        throw err;
      });
  });
});
