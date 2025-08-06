# Interfaccia Strategy
class StrategiaPagamento:
    def paga(self, importo):
        pass

# Strategie concrete
class PagamentoConCarta(StrategiaPagamento):
    def paga(self, importo):
        print(f"Pagamento di €{importo} effettuato con Carta di Credito.")

class PagamentoConPayPal(StrategiaPagamento):
    def paga(self, importo):
        print(f"Pagamento di €{importo} effettuato con PayPal.")

class PagamentoConBitcoin(StrategiaPagamento):
    def paga(self, importo):
        print(f"Pagamento di €{importo} effettuato con Bitcoin.")

# Classe Contesto
class Carrello:
    def __init__(self):
        self._strategia = None

    def set_strategia_pagamento(self, strategia: StrategiaPagamento):
        self._strategia = strategia

    def checkout(self, importo):
        if not self._strategia:
            print("Errore: Nessuna strategia di pagamento selezionata.")
            return
        self._strategia.paga(importo)

# Esempio d'uso
carrello = Carrello()

# Imposto la strategia a PayPal
carrello.set_strategia_pagamento(PagamentoConPayPal())
carrello.checkout(49.99)

# Cambio la strategia a Bitcoin
carrello.set_strategia_pagamento(PagamentoConBitcoin())
carrello.checkout(149.99)
