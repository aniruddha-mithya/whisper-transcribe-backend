# Sample transcription using Whisper

This is a sample express server that uses whisper to transcribe audio files.
If you don't have Whisper installed, install it with the following command:

```#!bin/bash
pip install git+https://github.com/openai/whisper.git 
```

For more info, visit the [Whisper home page](https://github.com/openai/whisper).

> **_NOTE:_**  This project uses node v18. If you want to use the dev server, you'll need to have installed node v18 as it depends on the watch feature introduced in v18 instead of nodemon.

Use the following command to start the server:

```#!bin/bash
yarn start
```

Use the following command to start the dev server (requires node v18):

```#!bin/bash
yarn start:dev
```

The audio folder contains a sample audio file that the transcribe.py file will attempt to transcribe. It is also the folder the express server will use to store files uploaded by the user. You can test out the various models by changing the model name on line 4. The available models are listed on the [Whisper Home page](https://github.com/openai/whisper).
