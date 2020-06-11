var fs = require('fs');
var csv = require('csv-parser');

var jsonObj  = [];
fs.createReadStream('customer-data.csv')
    .pipe(csv())
    .on('data', (row) =>{
        //console.log(row);
        var obj = row;
        jsonObj.push(obj);
    })
    .on('end',() => {
        console.log(jsonObj[0]);
        console.log('read success');
        var jsonContent = JSON.stringify(jsonObj);
        //console.log(jsonContent);
        fs.writeFile('customer-data.json', jsonContent,'utf8', (err) => {
            if(err)
                console.log(`Error occured while writing to file. Error is ${err}`);
            console.log('Write Success');
        });
    });