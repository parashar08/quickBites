// file first came to server (store in public/temp) then it reupload to cloudinary.

import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINAY_CLOUD_NAME,
  api_key: process.env.CLOUDINAY_API_KEY,
  api_secret: process.env.CLOUDINAY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return 'file not found';
    }
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    // file has been uploaded successfully
    console.log('file is uploaded on cloudinary');
    console.log(response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation failed
    return null;
  }
};

export { uploadOnCloudinary };
