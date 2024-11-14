import mongoose from "mongoose";
import express from "express";

const musicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    place: {
      type: Number,
      required: true,
    },
    wins: {
      type: Number,
      required: true,
    },
    games: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    rank_id: {
      type: String,
      required: true,
    },
    rank_name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    season_games: {
      type: Number,
      required: true,
    },
    season_wins: {
      type: Number,
      required: true,
    },
    season_points: {
      type: Number,
      required: true,
    },
    isChampion: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "music" }
);

const app = express();

const Music = mongoose.model("Music", musicSchema);

app.use("/", async (req, res) => {
    try {
        const teams = await Music.find({});
        res.status(200).json(teams);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
});

app.listen(5001, () => {
  connectDB();
  console.log("Server is running on port 5001");
});

const connectDB = async () => {
  try {
      console.log("Connecting to MongoDB...");
      const conn = await mongoose.connect("mongodb+srv://dzmitrybeinia:FhtO7IwKZTFBNSyp@dzbe-mongo-cluster.kfphd.mongodb.net/test?retryWrites=true&w=majority&appName=dzbe-mongo-cluster");
      console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
  }
};