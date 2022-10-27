import whisper
import os

model = whisper.load_model("medium")
result = model.transcribe(
    os.getcwd() + "/audio/Pershing_-_Address_from_France.ogg")
print(result['text'])
