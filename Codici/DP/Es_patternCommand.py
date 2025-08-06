# Receiver: oggetto che sa eseguire le azioni
class Lampada:
    def accendi(self):
        print("La lampada è accesa.")

    def spegni(self):
        print("La lampada è spenta.")

# Interfaccia Command
class Comando:
    def esegui(self):
        pass

# Comandi concreti
class ComandoAccendi(Comando):
    def __init__(self, lampada):
        self.lampada = lampada

    def esegui(self):
        self.lampada.accendi()

class ComandoSpegni(Comando):
    def __init__(self, lampada):
        self.lampada = lampada

    def esegui(self):
        self.lampada.spegni()

# Invoker: l'oggetto che invoca il comando (es. un bottone)
class Pulsante:
    def __init__(self, comando):
        self.comando = comando

    def premi(self):
        self.comando.esegui()

# Uso del pattern Command
lampada = Lampada()

# Creo i comandi
comando_accendi = ComandoAccendi(lampada)
comando_spegni = ComandoSpegni(lampada)

# Associo i comandi ai pulsanti
pulsante_on = Pulsante(comando_accendi)
pulsante_off = Pulsante(comando_spegni)

# Simulazione dell'uso
pulsante_on.premi()   # Output: La lampada è accesa.
pulsante_off.premi()  # Output: La lampada è spenta.
