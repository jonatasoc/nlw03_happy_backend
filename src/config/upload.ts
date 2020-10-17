import path from 'path';
import multer from 'multer';

export default {
  directory: tempFolder,
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      return callback(null, fileName);
    }
  }),
};
