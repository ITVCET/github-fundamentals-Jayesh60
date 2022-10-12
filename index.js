const express = require("express");
const firebase = require("firebase");


const app = express();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApnBfTEf2nbxumtAbTVvJpFmZ4z0vJ4tU",
    authDomain: "nodejsconnection123.firebaseapp.com",
    projectId: "nodejsconnection123",
    storageBucket: "nodejsconnection123.appspot.com",
    messagingSenderId: "914769861066",
    appId: "1:914769861066:web:4864839bf73692a1af9733",
    measurementId: "G-XN0F0042T5"
  };

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

app.get('./', (req, res)=>{
    (async ()=> {
        try{
            let response=[]
            await db.collection('user').get().then(querysnapshot =>{
                let docs = querysnapshot.docs;
                for (let doc of docs){
                    response.push(doc.data());

                }
                return res.status(200).send(response)
            })
        }catch(err){
            res.status(500).send(err)
        }
    })
})


const port = process.env.port || 5000
    app.listen(port,()=>{
        console.log("server running on port", port) 
    })