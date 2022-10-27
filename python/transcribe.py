import whisper
import os

model = whisper.load_model("medium")
audio = whisper.load_audio(
    os.getcwd() + "/audio/Pershing_-_Address_from_France.ogg")
audio = whisper.pad_or_trim(audio)
result = model.transcribe(audio)
print(result['text'])
