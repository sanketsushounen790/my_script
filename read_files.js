const EPub = require("epub2").EPub;
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');

const path = './bulk_indexes.json';

fs.readdir('./books', (err, files) => {
    if (err) throw err;

    files.map((book) => {
        //console.log(book)

        EPub.createAsync(`./books/${book}`)
            .then(function (epub) {
                //console.log(epub.metadata)
                if (epub.toc.length === 0) {
                    fs.appendFileSync("./book_error.txt", JSON.stringify(`${book}`, null) + "\r\n")
                    console.log("--------------------------------------------------------------")
                    console.log(`${epub.metadata.title}: Cannot extract Chapter data !`)
                }
                else {
                    epub.toc.map((item) => {
                        const index = { "index": { "_index": "books", "_id": uuidv4() } }
                        const document = {
                            chapter_original_id: item.id,
                            chapter_title: item.title,
                            author: epub.metadata.creator,
                            book_title: epub.metadata.title,
                            date: epub.metadata.date,
                        }

                        if (fs.existsSync("bulk_indexes.json")) {
                            fs.appendFileSync(path, JSON.stringify(index, null) + "\r\n")
                            fs.appendFileSync(path, JSON.stringify(document, null) + "\r\n")
                        }
                        else {
                            fs.writeFileSync(path, JSON.stringify(index, null) + "\r\n")
                            fs.writeFileSync(path, JSON.stringify(document, null) + "\r\n")
                        }

                    })

                    fs.appendFileSync("./book_done.txt", JSON.stringify(`${book}`, null) + "\r\n")
                    console.log("--------------------------------------------------------------")
                    console.log(`${epub.metadata.title}: Done !`)
                }

            })
            .catch(function (err) {
                console.log("ERROR when reading epub file\n-----");
                fs.appendFileSync("./book_cannot_read.txt", JSON.stringify(`${book}`, null) + "\r\n")
                throw err;
            })
    })
});
