from flask import Flask, request, send_file
from flask_cors import CORS
import pandas as pd
import io

app = Flask(__name__)

# Configura o CORS para aceitar requisições tanto do seu site oficial no GitHub Pages 
# quanto de testes locais (caso abra o index.html direto no navegador)
CORS(app, origins=[
    "https://amarildo1963.github.io",
    "http://127.0.0.1:5500",  # Comum se usar a extensão Live Server do VS Code
    "http://localhost:5500"
])

@app.route('/exportar-excel', methods=['POST'])
def exportar_excel():
    dados = request.json
    
    # Cria o DataFrame com o Pandas a partir dos dados limpos enviados pelo HTML
    df = pd.DataFrame(dados)
    
    # Cria um stream de bytes na memória para salvar o arquivo temporariamente
    output = io.BytesIO()
    
    # Utiliza o xlsxwriter para ajustar os tamanhos das colunas dinamicamente
    with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
        df.to_excel(writer, sheet_name='Família Anerão', index=False)
        
        # Ajuste automático responsivo de colunas usando Python
        worksheet = writer.sheets['Família Anerão']
        for idx, col in enumerate(df.columns):
            series = df[col]
            # Mede o maior comprimento entre o título e os registros
            max_len = max((
                series.astype(str).map(len).max(),
                len(str(series.name))
            )) + 3 # Adiciona margem de segurança de 3 caracteres
            worksheet.set_column(idx, idx, max_len)
            
    output.seek(0)
    
    # Retorna o arquivo gerado diretamente para o navegador do usuário
    return send_file(
        output,
        mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        as_attachment=True,
        download_name='familia-anerao.xlsx'
    )

if __name__ == '__main__':
    # Inicializa o servidor local na porta 5000
    app.run(debug=True, port=5000)