import path from 'path';
import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      //Tratando nomes de arquvos com espaços e caracteres especiais
      const fileName = `${Date.now()}-${file.originalname}`.normalize("NFD").replace(/[\u0300-\u036f\s]/g, '');

      return callback(null, fileName);
    }
  }),
};
