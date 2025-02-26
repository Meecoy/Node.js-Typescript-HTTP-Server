import http from "http";
import fs from "fs";
import url from "url";
const hostname = "127.0.0.1";
const port = 2115;
const pathToProducts = "src/products.json";
http
    .createServer((req, res) => {
    if (fs.existsSync(pathToProducts)) {
        const products = fs.readFileSync(pathToProducts, "utf-8");
        const parsedUrl = url.parse(req.url || "", true);
        // Get all products.
        if (parsedUrl.pathname == "/products" &&
            parsedUrl.query.id == undefined &&
            req.method === "GET") {
            res.setHeader("Content-Type", "application/json");
            res.end(products);
            //console.log("No id specified, all products displayed");
        }
        // Get specified product.
        else if (parsedUrl.pathname == "/products" &&
            parsedUrl.query.id != undefined &&
            req.method == "GET") {
            const productsArr = JSON.parse(products);
            const productId = parseInt(parsedUrl.query.id, 10);
            const product = productsArr.find((product) => product.id == productId);
            if (product) {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(product));
                //console.log(`${req.url} | Success`);
            }
            else {
                res.statusCode = 404;
                res.end(JSON.stringify({
                    message: "Can't find the requested object",
                }));
                //console.log(`${req.url} | Error`);
            }
        }
        // Post a new product.
        else if (parsedUrl.pathname == "/products" && req.method == "POST") {
            let product = "";
            req.on("data", (chunk) => {
                product = product + chunk;
                //console.log(`Received chunk: ${chunk}`);
            });
            req.on("end", () => {
                const productsArray = JSON.parse(products);
                const newProduct = JSON.parse(product);
                productsArray.push(newProduct);
                fs.writeFile(pathToProducts, JSON.stringify(productsArray), (err) => {
                    if (err) {
                        res.end(JSON.stringify({ message: "Error while adding new product." }));
                    }
                    else {
                        res.end(JSON.stringify({ message: "New product added to the JSON." }));
                    }
                });
            });
        }
        // Delete product.
        else if (parsedUrl.pathname == "/products" &&
            parsedUrl.query.id != undefined &&
            req.method == "DELETE") {
            const productsArr = JSON.parse(products);
            const productId = parseInt(parsedUrl.query.id, 10);
            const productIndex = productsArr.findIndex((product) => product.id == productId);
            productsArr.splice(productIndex, 1);
            fs.writeFile(pathToProducts, JSON.stringify(productsArr), (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ message: "Error while deleting the product." }));
                }
                else {
                    res.statusCode = 200;
                    res.end(JSON.stringify({
                        message: `Product with ID ${productId} deleted.`,
                    }));
                }
            });
        }
    }
    else {
        //console.log("JSON file not found.");
        res.end(JSON.stringify({
            message: "Your JSON file can't be found on the server.",
        }));
    }
})
    .listen(port, () => {
    console.log(`Server running live on http://${hostname}:${port}/`);
});
