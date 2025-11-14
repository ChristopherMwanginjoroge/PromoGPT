import os
import uuid
from django.conf import settings

ELEVEN_KEY = os.getenv("ELEVENLABS_API_KEY", None)

def text_to_speech(text, voice="alloy"):
    """
    Convert text to TTS via ElevenLabs SDK or HTTP API.
    Returns relative filepath (media/tts/<file>.mp3)
    """
    out_dir = getattr(settings, "MEDIA_ROOT", "media")
    tts_dir = os.path.join(out_dir, "tts")
    os.makedirs(tts_dir, exist_ok=True)
    filename = f"{uuid.uuid4().hex}.mp3"
    filepath = os.path.join(tts_dir, filename)

    # Try to use elevenlabs package if available
    try:
        from elevenlabs import generate, set_api_key, save
        if ELEVEN_KEY:
            set_api_key(ELEVEN_KEY)
        audio = generate(text=text, voice=voice)
        save(audio, filepath)
        # return relative path
        return f"/media/tts/{filename}"
    except Exception:
        # Fallback: return text-only placeholder (or raise)
        raise RuntimeError("ElevenLabs TTS failed or SDK not installed")
