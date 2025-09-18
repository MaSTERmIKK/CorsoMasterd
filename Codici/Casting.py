#Variabili e i loro tipi
nome = "Mirko "
nome_due = 'MirkoTraApici '

numeroInt = 10
numeroFloat = 1.65 

booleanoTRUE = True   # = 1
booleanoFALSE = False  # = 0

print(nome, nome_due, numeroInt, numeroFloat )
print( "  " )
print(booleanoTRUE, booleanoFALSE)

#Dinamismo della tipizzazione 
varDaCambiare = "Cambia "
print( varDaCambiare )

varDaCambiare = 10
print( varDaCambiare )

#Aggregazioni

#liste
listaMista = [1, "mirko", True ]
listaUnitaria = 1, 2, 3, 4

print(listaMista, listaUnitaria)

# le liste partono la loro indicizzazione da 0
print( listaMista[1] )

#le stringhe sono un tipo speciale e anche loro aprtonod a 0
print( nome[1] )

#prova input SBAGLIATA
# numer_2 = input() manca cast

numer_2 = int(input(" Inserisci un numero "))
numero_1 = 10

print(numero_1 + numer_2)

#casting Vari

numero_da_str = int("334")
numero_da_bool = int(True)

print(numero_da_str, numero_da_bool)


