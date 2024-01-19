import express from 'express';
import cors from 'cors';
const app = express();

import bodyParser from 'body-parser';
import User from './model/Login.js'
import jwt from 'jsonwebtoken';

app.use(bodyParser.json()); 
app.use(cors());
import mongoose from 'mongoose';
import basicsRoute from './routes/basic.js'
import familyRoute from './routes/family.js'
// import pastRoute from './routes/past.js'
import medicalroute from './routes/medical.js'
// import signup from './routes/signup.js'
import bcrypt from 'bcrypt'

app.use(bodyParser.json());

const conn = (async () => {
    try {
        const res = await mongoose.connect("mongodb+srv://manoj:kulkarni@cluster0.llshroy.mongodb.net/");
        if (res) console.log("DB connected");
        else throw err;
    }
    catch(err)
    {
        console.log(err);
    }
    
});
conn();




app.use(express.json());
app.use("/basic",basicsRoute);
app.use("/family",familyRoute);
// app.use("/past",pastRoute);
app.use("/medical",medicalroute);
// app.use("/signup",signup);



app.post("/signup", async (req, res, next) => {
  console.log(req.body)
  const {
      name,
      email,
      password
  } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
      return res.status(422).json({
          message: "Please fill all the details"
      })
  }
  try {
      const userExist = await User.findOne({
          email
      });
      if (userExist) {
          return res.status(422).json({
              message: "Email already registered"
          });
      } else {
          const user = new User({
              name,
              email,
              password
          });

          bcrypt.hash(password, 10, (err, hashedPassword) => {
              user.set('password', hashedPassword);
              user.save();
              next();
          })
          res.status(201).json({
              message: "Registered Successfully"
          });
          console.log("Registered");
      }
  } catch (err) {
      console.log("Error")
      console.log(err);
  }
})

app.post("/login", async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    if (!email || !password) {
        return res.status(422).json({
            message: "Please fill all the details"
        })
    }
    try {
        const userLogin = await User.findOne({
            email
        });
        if (!userLogin) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        } else {
            const validateUser = await bcrypt.compare(password, userLogin.password);
            console.log(validateUser);  
            if (!validateUser) {
                res.status(400).send('Invalid Credentials');
            } else {
                const payload = {
                    userId: userLogin._id,
                    email: userLogin.email
                }
                const JWT_SECRET_KEY ="ircteamsmern"
                jwt.sign(payload, JWT_SECRET_KEY, {
                    expiresIn: 9000
                }, async (err, token) => {
                    // await userLogin.updateOne({ _id: userLogin._id }, { $set: { token } });
                    userLogin.token = token;
                    await userLogin.save();
                    console.log(userLogin)
                    next();
                })
                return res.status(201).json(userLogin);
            }
            return res.status(201).json({
                message: "Login  unsuccesfull"
            });
        }
    } catch (err) {
        console.log(err);
    }
})


  app.get('/api/getAllFormData', async (req, res) => {
    const { name } = req.query;
  
    try {
      // Fetch basic form data to get the "name" field
      const basicFormData = await FormBasicData.findOne({ name });
  
      if (!basicFormData) {
        return res.status(404).json({ message: 'Basic form data not found' });
      }
  
      // Use the "name" field to fetch data from other forms
      const familyFormData = await FormFamilyData.findOne({ name: basicFormData.name });
      const medicalFormData = await FormMedicalData.findOne({ name: basicFormData.name });
  
      if (!familyFormData || !medicalFormData) {
        return res.status(404).json({ message: 'Form data not found' });
      }
  
      return res.status(200).json({
        basicFormData,
        familyFormData,
        medicalFormData,
      });
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred while fetching form data' });
    }
  });


  app.get('/api/getAllFormData', async (req, res) => {
    const { name } = req.query;
  
    try {
      // Fetch basic form data to get the "name" field
      const basicFormData = await FormBasicData.findOne({ name });
  
      if (!basicFormData) {
        return res.status(404).json({ message: 'Basic form data not found' });
      }
  
      // Use the "name" field to fetch data from other forms
      const familyFormData = await FormFamilyData.findOne({ name: basicFormData.name });
      const medicalFormData = await FormMedicalData.findOne({ name: basicFormData.name });
  
      if (!familyFormData || !medicalFormData) {
        return res.status(404).json({ message: 'Form data not found' });
      }
  
      return res.status(200).json({
        basicFormData,
        familyFormData,
        medicalFormData,
      });
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred while fetching form data' });
    }
  });

  app.get('/user/:name', async (req, res) => {
    try {
      const userName = req.params.name;
      const user = await User.findOne({ name: userName });
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      res.send(user);
    } catch (error) {
      res.status(500).send('Something went wrong');
    }
  });
  
  


app.listen(5000,()=>{
    console.log("Server listen at 5000 port");
})

