const EPub = require("epub2").EPub;
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");

const jsonFileName = "book_metadata_bulk_indexes.json";
const booksDirectoryName = "books_renamed";

fs.readdir(`./${booksDirectoryName}`, (err, files) => {
  if (err) throw err;

  //Duyệt qua từng cuốn sách
  files.map((book) => {
    const uniqueId = uuidv4();

    EPub.createAsync(`./${booksDirectoryName}/${book}`)
      .then(function (epub) {
        //Phân tách ảnh bìa của từng cuốn sách
        epub.getImage(epub.metadata.cover, function (err, img, mimeType) {
          try {
            //Lưu ảnh bìa đã etract thành công vào folder images
            fs.writeFileSync(
              `./images/${book.split(".epub").join("")}.jpg`,
              img
            );
            //Bắt lỗi nếu sách không extract ảnh bìa được
          } catch (error) {
            if (error) {
              console.log(
                "--------------------------------------------------------------"
              );
              console.log(
                `ERROR: ${epub.metadata.title} - ${book} - Lỗi khi extract ảnh bìa của sách !\n`
              );

              fs.appendFileSync(
                "./logs/book_error.txt",
                JSON.stringify(
                  `${epub.metadata.title} - ${book} - Không extract được ảnh bìa !`,
                  null
                ) + "\r\n"
              );
            }
          }
        });

        //Tạo index và document theo format để Insert vào Elasticsearch Server
        const index = { index: { _index: "books", _id: uniqueId } };
        const document = {
          author: epub.metadata.creator,
          book_title: epub.metadata.title,
          date: epub.metadata.date,
          aws_s3_bucket_url: `https://bookrecognition.s3.ap-southeast-1.amazonaws.com/${book}`,
          cloudinary_cover_url: `https://res.cloudinary.com/yuhiahtcloud/image/upload/book_covers/${book
            .split(".epub")
            .join("")}.jpg`,
          language: "eng",
        };

        //Write và Save data đã extract vào file book_metadata_bulk_indexes.json
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

        //Lưu vào file logs những sách đã extract metadata thành công
        fs.appendFileSync(
          "./logs/book_done.txt",
          JSON.stringify(`${epub.metadata.title} - ${book}`, null) + "\r\n"
        );
        console.log(
          "--------------------------------------------------------------"
        );
        console.log(`${epub.metadata.title}: Done !`);
      })
      //Bắt lỗi nếu sách không đọc được
      .catch(function (err) {
        console.log(
          "--------------------------------------------------------------"
        );
        console.log("ERROR when reading epub file - Lỗi không đọc được sách\n");
        fs.appendFileSync(
          "./logs/book_cannot_read.txt",
          JSON.stringify(`${book}`, null) + "\r\n"
        );
        throw err;
      });
  });
});
