import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import clarifai from 'clarifai';

dotenv.config();

const app = new Clarifai.App({
    apiKey: process.env.SECRET_KEY
});
app = express();
// app.use(cors());
// app.use(express.json());



try.models.predict('face-detection',"data:image/jpeg;base64,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")
      .then(response => {
        console.log('hi', response)
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => {response.json()
            console.log(response)})
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  

//index.js file

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////

// // Your PAT (Personal Access Token) can be found in the portal under Authentification
// const PAT = process.env.SECRET_KEY;
// // Specify the correct user_id/app_id pairings
// // Since you're making inferences outside your app's scope
// const USER_ID = 'clarifai';
// const APP_ID = 'main';
// // Change these to whatever model and image URL you want to use
// const MODEL_ID = 'face-detection';
// const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
// const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

// ///////////////////////////////////////////////////////////////////////////////////
// // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
// ///////////////////////////////////////////////////////////////////////////////////

// const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

// const stub = ClarifaiStub.grpc();

// // This will be used by every Clarifai endpoint call
// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key " + PAT);

// stub.PostModelOutputs(
//     {
//         user_app_id: {
//             "user_id": USER_ID,
//             "app_id": APP_ID
//         },
//         model_id: MODEL_ID,
//         version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
//         inputs: [
//             { data: { image: { url: IMAGE_URL, allow_duplicate_url: true } } }
//         ]
//     },
//     metadata,me
//     (err, response) => {
//         if (err) {
//             throw new Error(err);
//         }

//         if (response.status.code !== 10000) {
//             throw new Error("Post model outputs failed, status: " + response.status.description);
//         }

//         // Since we have one input, one output will exist here
//         const output = response.outputs[0];

//         console.log("Predicted concepts:");
//         for (const concept of output.data.concepts) {
//             console.log(concept.name + " " + concept.value);
//         }
//     }

// );




app.listen(3000, ()=> console.log('Server is running on port http://localhost:3000'));