class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "usou magia"
        elif self.tipo == "guerreiro":
            ataque = "usou espada"
        elif self.tipo == "monge":
            ataque = "usou artes marciais"
        elif self.tipo == "ninja":
            ataque = "usou shuriken"
        else:
            ataque = "usou um ataque indefinido"

        mensagem = f"O {self.tipo} {self.nome} atacou usando {ataque}"
        print(mensagem)

# Exemplo de uso
heroi_mago = Heroi("Gandalf", 1500, "mago")
heroi_guerreiro = Heroi("Aragorn", 35, "guerreiro")

heroi_mago.atacar()
heroi_guerreiro.atacar()
