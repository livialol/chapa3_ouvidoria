// Handle Denúncia Form
const ENDPOINT_DENUNCIA = 'https://formspree.io/f/mvgowzry';
const ENDPOINT_SUGESTAO = 'https://formspree.io/f/mwpkrvbj';

const denunciaForm = document.getElementById('denunciaForm');

denunciaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeProfessor = document.getElementById('nomeProfessor').value.trim();
    const departamentoProfessor = document.getElementById('departamento_professor').value.trim();
    const local = document.getElementById('local').value.trim();
    const horario = document.getElementById('horario').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    // Monta o objeto com os dados
    const data = {
        tipo: 'Denúncia',
        nomeProfessor,
        departamentoProfessor,
        local,
        horario,
        descricao
    };

    // Envia os dados para o serviço de formulário
    fetch(ENDPOINT_DENUNCIA, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Denúncia enviada com sucesso!');
            denunciaForm.reset();
        } else {
            alert('Erro ao enviar denúncia. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar denúncia. Tente novamente.');
    });
});

// Handle Sugestão Form
const sugestaoForm = document.getElementById('sugestaoForm');

sugestaoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const sugestaoDescricao = document.getElementById('sugestao_descricao').value.trim();

    // Monta o objeto com os dados
    const data = {
        tipo: 'Sugestão',
        sugestaoDescricao
    };

    // Envia os dados para o serviço de formulário
    fetch(ENDPOINT_SUGESTAO, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Sugestão enviada com sucesso!');
            sugestaoForm.reset();
        } else {
            alert('Erro ao enviar sugestão. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar sugestão. Tente novamente.');
    });
});
