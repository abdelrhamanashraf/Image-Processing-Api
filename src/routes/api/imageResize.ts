import sharp from 'sharp';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';

const imagetrans = async (
  fNcatcher: string,
  hightCatcher: number,
  widthCatcher: number
) => {
  const selectedImage = path.resolve(
    __dirname,
    '../../../images/full/' + fNcatcher + '.jpg'
  );
  const pathChecker = (cache: string): string => {
    const dirPath = `./images/${cache}/`;
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath);
      console.log(dirPath);
    }
    return dirPath;
  };

  const dirPath = pathChecker('cache');
  try {
    await sharp(selectedImage)
      .resize(hightCatcher, widthCatcher, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(dirPath + `${fNcatcher}_${hightCatcher}_${widthCatcher}.jpg`);
    const resizedImage = path.resolve(
      __dirname,
      `../../../images/cache/${fNcatcher}_${hightCatcher}_${widthCatcher}.jpg`
    );
    return resizedImage;
  } catch (err) {
    return err;
  }
};
export default imagetrans;
