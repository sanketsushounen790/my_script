// backend/index.js
const express = require("express");
const bodyParser = require("body-parser");
const elasticClient = require("./elastic-client");
require("express-async-errors");

const app = express();

const port = 8080

app.use(bodyParser.json());

// Express routes
app.get("/", (req, res) => {
    res.send("Hello World !")
});
app.post("/create-post", async (req, res) => {
    const result = await elasticClient.index({
        index: "posts",
        document: {
            title: "Sach 4",
            author: "Tac gia 4",
            content: "lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.lorem ipsumEx aliquip est eiusmod eiusmod excepteur labore. Aliquip adipisicing ullamco tempor eiusmod velit sit ea enim. Ea dolor proident nulla ex ad duis sunt labore ipsum minim labore. Minim consectetur laborum aliqua Lorem est tempor ad aliquip eiusmod consequat sunt elit. Dolor est commodo nulla cillum laboris non proident duis ex aliqua. Ut cillum cillum et qui est fugiat tempor. Et amet velit quis non ad deserunt et sint.",
        },
    });
    // const bulk = await elasticClient.bulk(

    // )

    res.send(result);
});

app.delete("/remove-post", async (req, res) => {
    const result = await elasticClient.delete({
        index: "posts",
        id: req.query.id,
    });

    res.json(result);
});
app.get("/search", async (req, res) => {
    const result = await elasticClient.search({
        index: "posts",
        query: { fuzzy: { title: req.query.query } },
    });

    res.json(result);
});
app.get("/posts", async (req, res) => {
    const result = await elasticClient.search({
        index: "posts",
        query: { match_all: {} },
    });

    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});