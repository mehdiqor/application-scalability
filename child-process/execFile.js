const {execFile, exec} = require("child_process");

exec("chmod +x index.py", (err, stdout, stderr) => {
    if(err) return console.log("err: ", err.message);
    if(stderr) return console.log("stderr: ", stderr);
    console.log("stdout: ", stdout);
});

execFile("./index.py", (err, stdout, stderr) => {
    if(err) return console.log("err: ", err.message);
    if(stderr) return console.log("stderr: ", stderr);
    console.log("stdout: ", stdout);
});