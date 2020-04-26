const path = require('path')
class FileController {
  show (req, res){
    const {file} = req.params

    const FilePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    )
    return res.sendFile(FilePath)
  }
}

module.exports = new FileController()
