# Classe base (componente)
class Notificatore:
    def invia(self, messaggio):
        print(f"Invio notifica base: {messaggio}")

# Decorator base astratto
class NotificatoreDecorator(Notificatore):
    def __init__(self, notificatore):
        self._notificatore = notificatore

    def invia(self, messaggio):
        self._notificatore.invia(messaggio)

# Decorator concreto: invio via email
class NotificatoreEmail(NotificatoreDecorator):
    def invia(self, messaggio):
        super().invia(messaggio)
        print(f"Inviata anche email con messaggio: {messaggio}")

# Decorator concreto: invio via SMS
class NotificatoreSMS(NotificatoreDecorator):
    def invia(self, messaggio):
        super().invia(messaggio)
        print(f"Inviato anche SMS con messaggio: {messaggio}")

# Uso del decorator
notificatore_base = Notificatore()
notificatore_con_email = NotificatoreEmail(notificatore_base)
notificatore_completo = NotificatoreSMS(notificatore_con_email)

# Invio con catena di decoratori
notificatore_completo.invia("Attenzione! Aggiornamento richiesto.")