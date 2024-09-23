

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('email-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {
            nome: formData.get('cont_nome'),
            email: formData.get('cont_email'),
            mensagem: formData.get('cont_mensagem')
        };

        // Esconde o botão de enviar e mostra o botão de enviando
        document.getElementById('sendBtn').classList.add('hidden');
        document.getElementById('sendingBtn').classList.remove('hidden');

        try {
            const response = await fetch('http://localhost:8080/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Esconde o botão de enviando e mostra o botão de sucesso
                document.getElementById('sendingBtn').classList.add('hidden');
                document.getElementById('successBtn').classList.remove('hidden');
                document.getElementById('successBtn').disabled = false;
            } else {
                // Esconde o botão de enviando e mostra o botão de tentar novamente
                document.getElementById('sendingBtn').classList.add('hidden');
                document.getElementById('retry').classList.remove('hidden');
            }
        } catch (error) {
            console.error('Erro:', error);
            // Esconde o botão de enviando e mostra o botão de tentar novamente
            document.getElementById('sendingBtn').classList.add('hidden');
            document.getElementById('retry').classList.remove('hidden');
        }
    });

    document.getElementById('retry').addEventListener('click', function() {
        // Esconde o botão de tentar novamente e mostra o botão de enviar novamente
        document.getElementById('retry').classList.add('hidden');
        document.getElementById('sendBtn').classList.remove('hidden');
    });
});