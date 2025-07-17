# Sottosistemi complessi
class CPU:
    def avvia(self):
        print("CPU avviata")

class Memoria:
    def carica(self, posizione, dati):
        print(f"Caricamento dei dati '{dati}' alla posizione {posizione}")

class Disco:
    
    x = 0
    
    def __init__(self, xI):
        self.x = xI
    
    def leggi(self, settore):
        print(f"Lettura dati dal settore {settore}")
        return f"dati_{settore}"

# Facade che semplifica l'uso del sistema
class ComputerFacade:
    def __init__(self):
        self.cpu = CPU()
        self.memoria = Memoria()
        self.disco = Disco(23)

    def avvia_computer(self):
        print("Avvio del computer in corso...")
        dati = self.disco.leggi(22)
        self.memoria.carica(25, dati)
        self.cpu.avvia()
        print("Computer avviato con successo.")

# Codice client semplificato
computer = ComputerFacade()
computer.avvia_computer()