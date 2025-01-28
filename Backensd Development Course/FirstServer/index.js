let http= require("http")
const { json } = require("stream/consumers")

let server = http.createServer((req,res)=>{

  //res.end("This is my first server")

    if(req.url=="/news"){
        let obj={
            status:1,
            data:[
              {
                newsTitle:"First news",
                newsData:"I am generate my first server",
               },
               {
                newsTitle:"2nd news",
                newsData:"I am generate my first server",
               }
            ],
        }
        res.end(json.stringify(obj))
    }
})



server.listen("5000")

