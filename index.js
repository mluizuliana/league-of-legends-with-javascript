const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        personagem.classList.add('selecionado');

    removerSelecaoDoPersonagem(personagem);
    
    alterarImagemDoPersonagemSelecionado(personagem);

    alterarNomePersonagemSelecionado(personagem);

    alterarDescricaoPersonagemSelecionado(personagem);

        function alterarImagemDoPersonagemSelecionado(personagem) {
            const imagemPersonagemGrande = document.querySelector('.personagem-grande');

            const idPersonagem = personagem.attributes.id.value;
            imagemPersonagemGrande.src = `./${idPersonagem}.png`;
        }

        function removerSelecaoDoPersonagem() {
            const personagemSelecionado = document.querySelector('.selecionado');
            personagemSelecionado.classList.remove('selecionado');
        }
    })

});

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}
