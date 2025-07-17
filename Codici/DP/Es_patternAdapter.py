# Classe con interfaccia già esistente (aspettata dal client)
class LettoreAudio:
    def riproduci(self, nome_file):
        print(f"Riproduzione del file audio: {nome_file}")

# Classe incompatibile (es. una libreria legacy)
class LettoreMp4:
    def play_video(self, file_video):
        print(f"Riproduzione del video MP4: {file_video}")

# Adapter che adatta LettoreMp4 all'interfaccia di LettoreAudio
class Mp4ToAudioAdapter(LettoreAudio):
    def __init__(self, lettore_mp4):
        self.lettore_mp4 = lettore_mp4

    def riproduci(self, nome_file):
        # Conversione dell'interfaccia: da riproduci() a play_video()
        self.lettore_mp4.play_video(nome_file)

# Codice client
def client_riproduci_audio(lettore: LettoreAudio, file):
    lettore.riproduci(file)

# Uso normale con LettoreAudio
lettore_audio = LettoreAudio()
client_riproduci_audio(lettore_audio, "musica.mp3")

# Uso di una classe incompatibile adattata
lettore_legacy = LettoreMp4()
adapter = Mp4ToAudioAdapter(lettore_legacy)
client_riproduci_audio(adapter, "video.mp4")