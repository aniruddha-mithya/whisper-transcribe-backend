# Sample transcription using Whisper

This is a sample express server that uses whisper to transcribe audio files.
If you don't have Whisper installed, install it with the following command:

```#!bin/bash
pip install git+https://github.com/openai/whisper.git 
```

If the above command doesn't work try the same with pip3 or `/usr/local/bin/python3 -m pip install -U git+https://github.com/openai/whisper.git`

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

## Notes

* The audio folder contains a sample audio file that the transcribe.py file will attempt to transcribe. It is also the folder the express server will use to store files uploaded by the user. You can test out the various models by changing the model name on line 4. The available models are listed on the [Whisper Home page](https://github.com/openai/whisper).
* The "medium" model is chosen as it is suited for noisy audio as in the sample audio. The tiny and small models were not satisfactory in my testing. The medium model is a little resource heavy and you may want to close other processes when running this project.
* On Macs this runs on CPU and is probably slower than it would be with a GPU.
