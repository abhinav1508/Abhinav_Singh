const { readdirSync, statSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

function walk(dir) {
    let results = [];
    const list = readdirSync(dir);
    list.forEach(function(file) {
        file = join(dir, file);
        const stat = statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if(file.endsWith('.tsx')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
let count = 0;
files.forEach(file => {
    let content = readFileSync(file, 'utf8');
    let replaced = content.replace(/\bp-12\b/g, 'p-6 md:p-12');
    if (content !== replaced) {
        writeFileSync(file, replaced);
        console.log(`Updated ${file}`);
        count++;
    }
});
console.log(`Total files updated: ${count}`);
