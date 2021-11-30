# Checkpoint 02 - Front-end II

> Projeto to-do Parte I e II

### 📌 Objetivo

Olá Houser, tudo bem com você? Esta atividade tem como objetivo servir como segundo instrumento avaliativo da disciplina. Se atente às instruções e bom trabalho. O entregável é uma aplicação de to-do (lista de coisas afazer). O projeto terá 2 páginas. O projeto será realizado em grupos.

<br/>

## 👨‍🏫 Instruções e requisitos do entregável	
	
A primeira página deve ter um formulário com os inputs: 
- [x] Data de criação: o usuário não poderá alterar esse input, mas ele deve ser exibido.
- [x] Data limite da tarefa: data que o usuário deseja terminar aquela tarefa.
- [x] Descrição: texto da tarefa.
- [x] Botão de submit.

<br/>

## ✅ Validações:
- [x] Nenhum campo pode ser vazio.
- [x] A descrição deve ter mais que 10 caracteres.
- [x] OPCIONAL: a data limite da tarefa deve ser hoje ou no futuro.
- [x] Quando o usuário não preencher corretamente deve ser exibido um alerta indicando que existem erros na criação da tarefa.

<br/>

## ⚙ Funcionalidades:
- [x] Quando o usuário clicar em submit, se ele passar pela validação, a anotação deve ser exibida na tela por meio de um card.
- [x] No card da anotação deve ter um botão para excluir a anotação. - Quando ele for clicado deverá ser exibido um aviso confirmando a intenção de excluir a anotação. Se o usuário confirmar a intenção de excluir, o card desta nota deve desaparecer.
- [x] Ainda no card da anotação deverá existir um checkbox que ao ser clicado faz o texto daquela anotação ficar tachado. Tarefa concluída.
- [x] Opcional: Escolher cor do fundo do card - (versão dark)

<br/>

---

<br/>

Agora nós vamos criar uma outra página, onde iremos consumir uma api de lista de tarefas.
- [ ] O end-point “https://jsonplaceholder.typicode.com/todos/” responde com um JSON com 200 tarefas. Essas 200 tarefas devem ser consumidas pelo JS e renderizadas também como cards na página.
- [ ] Nas tarefas onde o atributo “completed": true” o texto do atributo title deve estar tachado. Pois significa que a tarefa ja foi completada.
- [ ] Nas tarefas onde o atributo “completed": false” o texto do atributo title deve estar em negrito. Pois significa que a tarefa está a fazer. 
- [ ] Exiba também o conteúdo do atributo “id”.




## 📦 Entrega:
- [ ] Devem ser entregues os arquivos HTML5, CSS3 e Javascript do projeto via Git/Github. Você deverá enviar o link do repositório por este formulário: https://forms.gle/CFCEmSgYeFBKXyL16 
- Data de entrega (Previsão inicial):
- Turma 01 -> 07/12/2021
- Turma 02 -> 03/12/2021

## 🎉 Conclusão
- [ ] Parabéns! Você acaba de finalizar o segundo checkpoint de Front End II!
