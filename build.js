const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'public', 'index.html');

ejs.renderFile(templatePath, { /* your data here */ }, {}, function(err, str) {
    if (err) {
        console.error(err);
    } else {
        fs.writeFileSync(outputPath, str);
    }
});
