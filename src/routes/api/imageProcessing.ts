import express from 'express';
import path from 'path';
import imagetrans from './imageResize';

const imageProcessing = express.Router();

imageProcessing.get(
  '/',
  async (req: express.Request, res: express.Response) => {
    const fNcatcher = req.query['imagename'] as unknown as string;
    const arr = ['image1', 'image2', 'image3'];
    const tutorialImage = path.resolve(
      __dirname,
      '../../../images/full/image4.jpg'
    );
    if (arr.includes(fNcatcher) === false) {
      res.sendFile(tutorialImage);
    } else {
      const widthCatcher = parseInt(req.query['width'] as unknown as string);
      const hightCatcher = parseInt(req.query['hight'] as unknown as string);

      console.log(fNcatcher, widthCatcher, hightCatcher);
      //
      //valaditing the entry
      if (hightCatcher < 1) {
        res.send(
          'wrong Entry make sure that you have entered a number higher than 1'
        );
      }
      if (isNaN(hightCatcher)) {
        res.send(
          'wrong Entry make sure that you have entered a number higher than 1'
        );
      }
      if (widthCatcher < 1) {
        res.send(
          'wrong Entry make sure that you have entered a number higher than 1'
        );
      }
      if (isNaN(widthCatcher)) {
        res.send(
          'wrong Entry make sure that you have entered a number higher than 1'
        );
      }
      //
      //resizing the selected image
      const sharping = await imagetrans(fNcatcher, hightCatcher, widthCatcher);

      const resizedImage = path.resolve(
        __dirname,
        `../../../images/cache/${fNcatcher}_${hightCatcher}_${widthCatcher}.jpg`
      );
      //sending the resized image
      //
      if (sharping) {
        res.sendFile(resizedImage);
        console.log(fNcatcher, widthCatcher, hightCatcher);
      }
      res.sendFile(resizedImage);
      console.log(fNcatcher, widthCatcher, hightCatcher);
    }
  }
);
//
export default imageProcessing;
