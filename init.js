const mongoose = require ("mongoose");
const Chat = require ("./models/chat.js");

main()
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

  let allChats=[
    {
        from: "Alice",
        to: "Bob",
        message: "Hello Bob",
        created_at : new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        message: "Hello Alice",
        created_at : new Date()
    },
    {
        from: "Alice",
        to: "Bob",
        message: "How are you Bob",
        created_at : new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        message: "I am fine Alice",
        created_at : new Date()
    },
    {
        from: "Alice",
        to: "Bob",
        message: "Good to hear that",
        created_at : new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        message: "How about you",
        created_at : new Date()
    },
    {
        from: "Alice",
        to: "Bob",
        message: "I am good too",
        created_at : new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        message: "Great",
        created_at : new Date()
    },
    {
        from: "Alice",
        to: "Bob",
        message: "I am going to sleep now",
        created_at : new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        message: "Good night",
        created_at : new Date()
    }
]

Chat.insertMany(allChats);


