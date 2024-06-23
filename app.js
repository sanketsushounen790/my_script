const EPub = require("epub2").EPub;
const fs = require("fs");

const path = './bulk_indexes.json';

const book = "Carroll, Lewis - Complete Alice in Wonderland (Wonderland, 2010)"

EPub.createAsync(`./books/${book}.epub`)
  .then(function (epub) {

    console.log(epub.toc)

    epub.toc.map((item) => {
      console.log(item)
      
      // const index = { "index": { "_index": "books", "_id": item.id } }
      // const document = {
      //   id: item.id,
      //   chapter_title: item.title,
      //   creator: epub.metadata.creator,
      //   book_title: epub.metadata.title,
      //   date: epub.metadata.date,
      // }
      

      // if (fs.existsSync("bulk_indexes.json")) {
      //   fs.appendFileSync(path, JSON.stringify(index, null) + "\r\n")
      //   fs.appendFileSync(path, JSON.stringify(document, null) + "\r\n")
      // }
      // else {
      //   fs.writeFileSync(path, JSON.stringify(index, null) + "\r\n")
      //   fs.writeFileSync(path, JSON.stringify(document, null) + "\r\n")
      // }

    })



  })
  .catch(function (err) {
    console.log("ERROR\n-----");
    throw err;
  })

