document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            descricao: formData.get('descricao'),
            telefone: formData.get('telefone')
        };

        try {
            const response = await fetch('http://localhost:8080/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Erro ao realizar cadastro.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar com o servidor.');
        }
    });
});