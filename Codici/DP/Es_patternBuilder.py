# Prodotto finale
class Computer:
    def __init__(self):
        self.cpu = None
        self.ram = None
        self.storage = None

    def descrizione(self):
        print(f"CPU: {self.cpu}, RAM: {self.ram}, Storage: {self.storage}")

# Builder astratto
class ComputerBuilder:
    def reset(self):
        pass
    def set_cpu(self, cpu):
        pass
    def set_ram(self, ram):
        pass
    def set_storage(self, storage):
        pass
    def get_result(self):
        pass

# Builder concreto
class GamingComputerBuilder(ComputerBuilder):
    def __init__(self):
        self.reset()

    def reset(self):
        self.computer = Computer()

    def set_cpu(self, cpu="Intel i9"):
        self.computer.cpu = cpu

    def set_ram(self, ram="32GB"):
        self.computer.ram = ram

    def set_storage(self, storage="1TB SSD"):
        self.computer.storage = storage

    def get_result(self):
        return self.computer

# Director: coordina la costruzione
class Director:
    def __init__(self, builder: ComputerBuilder):
        self.builder = builder

    def costruisci_pc_gaming(self):
        self.builder.reset()
        self.builder.set_cpu()
        self.builder.set_ram()
        self.builder.set_storage()

# Utilizzo del builder pattern
builder = GamingComputerBuilder()
director = Director(builder)

director.costruisci_pc_gaming()
pc_gaming = builder.get_result()
pc_gaming.descrizione()