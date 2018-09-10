Programas utilizados para a escrita e execucao dos programas js.
--------------------------------------------------------------
	- Nodejs;
	- Sublime Text 3;

Criar arquivo de build dos programas js para executar via node no console sublime:
---------------------------------------------------------------------------------
	-- No Sublime: Tools/Build System/New Build System
	-- Criar e salvar o arquivo com o conteudo:
	
	{
	  "cmd": ["C:/Program Files/nodejs/node.exe", "$file"],
	  "selector": "source.js"
	}

Fazer o build de um programa js no sublime:
-------------------------------------------
	-- Salve o programa js;
	-- Selecione o build system criado: Tools/Build System/escolher_o_build_system_que_foi_criado;
	-- Ctrl + B ou Tools/Build;
