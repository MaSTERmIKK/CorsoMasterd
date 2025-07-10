# Classe prodotto: definisce l'interfaccia comune
class Pizza:
    def prepara(self):
        pass

# Classi concrete che estendono Pizza
class Margherita(Pizza):
    def prepara(self):
        print("Preparazione della pizza Margherita...")
class Diavola(Pizza):
    def prepara(self):
        print("Preparazione della pizza Diavola...")

# Classe creatore astratto (potrebbe anche essere un'interfaccia)
class Pizzeria:
    def crea_pizza(self):
        pass

# Sottoclassi concrete della factory
class PizzeriaMargherita(Pizzeria):
    def crea_pizza(self):
        return Margherita()
class PizzeriaDiavola(Pizzeria):
    def crea_pizza(self):
        return Diavola()

# Funzione client che usa il Factory Method
def ordina_pizza(pizzeria: Pizzeria):
    pizza = pizzeria.crea_pizza()
    pizza.prepara()

# Uso del Factory Method
ordina_pizza(PizzeriaMargherita())  # Output: Preparazione della pizza Margherita...
ordina_pizza(PizzeriaDiavola())     # Output: Preparazione della pizza Diavola...