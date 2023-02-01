const {exec} = require("child_process");

exec("touch index.txt", (err, stdout, stderr) => {
    if(err) return console.log("err: ", err.message);
    if(stderr) return console.log("stderr: ", stderr);
    console.log("stdout: ", stdout);
});