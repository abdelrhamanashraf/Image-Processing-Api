import supertest from 'supertest';
import app from '../index';
import path from 'path';
import fs from 'fs';
import imagetrans from '../routes/api/imageResize';

const request = supertest(app);

describe('image processing test', () => {
  const path = '/api/imageProcessing';
  it('To get response /', async (): Promise<void> => {
    const response: supertest.Response = await request.get(path);
    expect(response.status).toBe(200);
  });
  it('To get response /', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      `/api/imageProcessing?imagename=image1&width=123&hight=321`
    );
    expect(response.status).toBe(200);
  });
});
describe('image resizing test', () => {
  const fNcatcher = 'image2';
  const hightCatcher = '400';
  const widthCatcher = '600';
  const resizedImage = path.resolve(
    __dirname,
    `../../images/cache/${fNcatcher}_${hightCatcher}_${widthCatcher}.jpg`
  );

  it('resizes the image as you choose', async () => {
    await request.get(
      `/api/imageProcessing?imagename=${fNcatcher}&width=${widthCatcher}&hight=${hightCatcher}`
    );
    expect(fs.existsSync(resizedImage)).toBeTrue();
  });
});

describe('function test', () => {
  const fNcatcher = 'image2';
  const hightCatcher = 400;
  const widthCatcher = 600;
  const resizedImage = path.resolve(
    __dirname,
    `../../images/cache/${fNcatcher}_${hightCatcher}_${widthCatcher}.jpg`
  );
  it('the function resizes the image ', async () => {
    const myfun = await imagetrans(fNcatcher, hightCatcher, widthCatcher);
    expect(myfun).toBe(resizedImage);
  });
});
