const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const userRoutes=require('./routes/user-routes')
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("running");
});

app.use(
    cors({ 
      origin: "http://localhost:4200",
    })
  );

app.use(userRoutes);
// app.post('/users', async (req, res) => {
//     try {
//         await addUser(req.body);
//         res.send("User added successfully");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error adding user");
//     }
// });

// app.get('/users', async (req, res) => {
//    console.log("data :",req.body);
//   let user= await getUsers();
//    res.send(user)
   
// });



async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/User'); 
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}


connectDb();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
