import "../App.css";
import React from "react";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="text">
          <h2>M2 Ultra - The most powerful Apple Silicon chip yet</h2>

          <p className="summary">
            At WWDC 2023 today Apple unveiled the M2 Ultra, its most powerful
            Apple Silicon chip yet. With the M2 Pro and Max launching earlier
            this year, and rumors pointing to Apple finally bringing the M2
            generation to the Mac Studio and Mac Pro, the launch of the Ultra
            wasn’t a major surprise.
          </p>
        </div>
      </div>

      <div className="post">
        <div className="text">
          <h2>
            NameDrop, Journal app, Standby, Autocorrect, no more “hey Siri”
          </h2>

          <p className="summary">
            Apple is introducing a new journaling app simply called Journal.
            Using on-device machine learning, the iPhone creates personalized
            suggestions around your photos, activities, location, music,
            workouts, etc. Developers can take advantage of Journal and provide
            prompt suggestions from third-party app data.
          </p>
        </div>
      </div>

      <div className="post">
        <div className="text">
          <h2>
            Apple is introducing an overhaul of one of our most-used apps on the
            iPhone, the Messages app.
          </h2>

          <p className="summary">
            Notable tweaks: ability to view transcribed voice messages and an
            interface change that hides away iMessage apps. New feature: the
            safety-focused “Check In” option that will allow iPhone users to let
            their friends and family know they got home safely — or where they
            were last.
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
