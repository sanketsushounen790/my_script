const EPub = require("epub2").EPub;

const fs = require('fs');

const book = "A Christmas Carol.epub"
const booksDirectoryName = "books"

EPub.createAsync(`./${booksDirectoryName}/${book}`)
	.then(function (epub)
	{
		console.log(epub.flow)
	})
	.catch(function (err)
	{
		console.log("ERROR\n-----");
		throw err;
	})
;