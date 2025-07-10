# Esempio di Singleton in Python con metodo __new__

class LoggerSingleton:
    _istanza = None  # Attributo di classe per tenere l’unica istanza

    def __new__(cls):
        if cls._istanza is None:
            print("Creo una nuova istanza del Logger")
            cls._istanza = super(LoggerSingleton, cls).__new__(cls)
        return cls._istanza

    def __init__(self):
        self.logs = []

    def scrivi_log(self, messaggio):
        self.logs.append(messaggio)

    def mostra_logs(self):
        for log in self.logs:
            print(log)

# Creazione di due oggetti apparentemente diversi
logger1 = LoggerSingleton()
logger2 = LoggerSingleton()

logger1.scrivi_log("Avvio del programma")
logger2.scrivi_log("Errore in riga 42")

# Verifica che entrambi siano lo stesso oggetto
print(logger1 is logger2)  # Output: True

# Mostra i log da uno dei due
logger1.mostra_logs()