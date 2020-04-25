const fs = require('fs').promises;
const path = process.argv[2];

async function getFileContents(path, callback) {
  try {
    const fileStats = await fs.stat(path);
    console.log(fileStats);
    if (fileStats.size > 0) {
      const fileContent = await fs.readFile(path, 'utf8');
      return callback(null, fileContent);
    } else {
      return callback('File exists but there is no content');
    }
  }
  catch (err) {
    // fs.exists is deprecated now.
    if (err.code === 'ENOENT') {
      return callback('File does not exists');    
    }
    return callback(err);
  }
}

getFileContents(path, (err, contents) => {
  if (err) {
    console.error(`There was an error getting contents for ${path}`, err);
    return;
  }
  console.info('File was found and the contents were loaded');
});