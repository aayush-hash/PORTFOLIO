import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
      senderName: {
        type: String,
        minLength: [2, "Name must contain at least 2 characters!"],
      },
      email: {
        type: String,
        required: [true, "Email is required!"],
        match: [
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          "Please provide a valid email address!",
        ],
      },
      subject: {
        type: String,
        minLength: [2, "Subject must contain at least 2 characters!"],
      },
      message: {
        type: String,
        minLength: [2, "Message must contain at least 2 characters!"],
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    });
    
    export const Message = mongoose.model("Message", messageSchema);
    