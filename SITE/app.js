const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Se sua pasta de arquivos estáticos se chama public

// Rota para processar o formulário e salvar os dados em dados.json
app.post('/api/submit-form', (req, res) => {
    const { nome, email, mensagem } = req.body;
    const lead = { nome, email, mensagem };

    const dadosFilePath = path.join(__dirname, '../SISTEMA/dados.json'); // Caminho para o arquivo dados.json

    fs.readFile(dadosFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            res.status(500).json({ success: false, message: 'Erro interno do servidor' });
            return;
        }

        let leads = [];
        if (data) {
            leads = JSON.parse(data);
        }

        leads.push(lead);

        fs.writeFile(dadosFilePath, JSON.stringify(leads, null, 2), (err) => {
            if (err) {
                console.error('Erro ao salvar os dados:', err);
                res.status(500).json({ success: false, message: 'Erro interno do servidor' });
                return;
            }

            console.log('Lead salvo com sucesso:', lead);
            res.redirect('/contato.html'); // Redireciona de volta para a página de contato após enviar o formulário
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
