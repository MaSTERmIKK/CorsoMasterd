# Classe Soggetto (Publisher)
class Subject:
    def __init__(self):
        self._observers = []  # Lista degli osservatori

    def aggiungi_observer(self, observer):
        self._observers.append(observer)

    def rimuovi_observer(self, observer):
        self._observers.remove(observer)

    def notifica_observers(self, messaggio):
        for observer in self._observers:
            observer.aggiorna(messaggio)

# Classe Osservatore (Subscriber)
class Observer:
    def aggiorna(self, messaggio):
        pass  # Interfaccia generica

# Osservatore concreti
class UtenteApp(Observer):
    def __init__(self, nome):
        self.nome = nome

    def aggiorna(self, messaggio):
        print(f"[{self.nome}] Notifica ricevuta: {messaggio}")

class Logger(Observer):
    def aggiorna(self, messaggio):
        print(f"[LOGGER] Registrazione evento: {messaggio}")

# Uso del pattern Observer
if __name__ == "__main__":
    # Creo il soggetto
    notiziario = Subject()

    # Creo osservatori
    utente1 = UtenteApp("Alice")
    utente2 = UtenteApp("Bob")
    logger = Logger()

    # Registro gli osservatori
    notiziario.aggiungi_observer(utente1)
    notiziario.aggiungi_observer(utente2)
    notiziario.aggiungi_observer(logger)

    # Invio una notifica a tutti
    notiziario.notifica_observers("Nuova versione dell'app disponibile!")