


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

        // Esconde o botão de submit e mostra o botão de saving
        document.getElementById('submitBtn').classList.add('hidden');
        document.getElementById('savingBtn').classList.remove('hidden');

        try {
            const response = await fetch('https://server-qeki.onrender.com/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                
                // Esconde o botão de saving e mostra o botão de confirm
                document.getElementById('savingBtn').classList.add('hidden');
                document.getElementById('confirmBtn').classList.remove('hidden');
                document.getElementById('confirmBtn').disabled = false;
                document.getElementById('confirmBtn').classList.remove('cursor-not-allowed');
                document.getElementById('confirmBtn').classList.add('cursor-pointer');
            } else {
                
                // Esconde o botão de saving e mostra o botão de retry
                document.getElementById('savingBtn').classList.add('hidden');
                document.getElementById('retryBtn').classList.remove('hidden');
            }
        } catch (error) {
            console.error('Erro:', error);
            
            // Esconde o botão de saving e mostra o botão de retry
            document.getElementById('savingBtn').classList.add('hidden');
            document.getElementById('retryBtn').classList.remove('hidden');
        }
    });

    document.getElementById('retryBtn').addEventListener('click', function() {
        // Esconde o botão de retry e mostra o botão de submit novamente
        document.getElementById('retryBtn').classList.add('hidden');
        document.getElementById('submitBtn').classList.remove('hidden');
    });
});