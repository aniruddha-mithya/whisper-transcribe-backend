const formidable = require("formidable");
const path = require("path");
const fsExtra = require("fs-extra");
const { exec } = require("child_process");

const transcribe = {
  route: "/transcribe",
  method: "post",
  callbacks: [
    /**
     *
     * @param {ExpressReq} req
     * @param {ExpressRes} res
     * @param {NextFunction} next
     */
    (req, res, next) => {
      const form = new formidable.IncomingForm();
      const files = [];
      form.on("file", (fieldName, file) => {
        console.log("file received " + fieldName, file.filepath);
        files.push(file);
      });
      form.on("field", (name, value) => {
        console.log("field name value: ", { name, value });
      });
      form.parse(req, () => {
        files.forEach((file, index) => {
          const oldPath = file.filepath;
          const newFileName = Date.now() + "_" + file.originalFilename;
          const newPath = path.join(process.cwd(), "audio", newFileName);
          fsExtra.renameSync(oldPath, newPath);
          exec(
            `whisper ${newPath} --model base --language English`,
            (error, stdout, stderr) => {
              console.error(error);
              const srtFilePath = path.join(
                process.cwd(),
                newFileName + ".srt"
              );
              if (!error) {
                let srtData = fsExtra.readFileSync(srtFilePath).toString();
                res.send(srtData);
              } else throw error;
            }
          );
        });
        // res.send("done");
      });
    },
  ],
};

module.exports = {
  transcribe,
};
