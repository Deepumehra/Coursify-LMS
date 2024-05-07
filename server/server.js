import { v2 } from 'cloudinary';
import Razorpay from 'razorpay';

import app from './app.js';
import connectToDB from './configs/dbConn.js';

// Cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const PORT = process.env.PORT;
// to get a plan id for razorpay
// const instance=new Razorpay({key_id:process.env.RAZORPAY_KEY_ID,key_secret:process.env.RAZORPAY_SECRET});
// instance.plans.create({
//   period:'yearly',
//   interval:1,
//   item:{
//     name:'Yearly plan',
//     amount:45000,
//     currency:'INR',
//     description:'This subscription will allow you to access all courses available on coursify for one year'
//   }
// })

app.listen(PORT, async () => {
  // Connect to DB
  await connectToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});