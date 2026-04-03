// dados_niver.js
const dadosRaw = `Ingrid Graziela Fernandes Anerão,06/01/1997,,ingrid.jpg,Filha do Amarildo|Filha da Solamita|Irmã da Carol|Irmã do Guilherme|Irmã do Leandro|Mãe do Nícolas
Maria Amarilza Anerão,14/01/1969,,amarilza.jpg,Irmã do Amarildo|Irmã do Amauri|Filha de Maria Cristina Anerão|Filha de Arvelino Anerão||
Sandra Regina Moller de Campos,22/01/1964,20/07/2020,sandra.jpg,Prima do Amarildo|Filha de Rosa Lia Moller Anerão|Filha de Alfredo Moller|Irmã da Sonia|Irmã da Suzi|
Horácio Anerão,24/01/1930,12/09/2004,horacio.jpg,Tio do Amarildo|Irmão de Arvelino Anerão|Pai do Humberto Anerão|Filho de José Anerão|Filho de Rosa Frachelli Anerão|
Rosa Frachelli Anerão,01/02/1901,15/01/1971,rosa_frachelli.jpg,Avó paterna do Amarildo|Mãe de Arvelino Anerão|Esposa de José Anerão|||
Braz Gestich,03/02/1944,08/05/2023,braz.jpg,Tio do Amarildo|Irmão de Maria Cristina Anerão|Pai do Reginaldo|Pai do João Paulo|Pai da Valeria|
Humberto Donizete Anerão,22/02/1961,14/07/2021,humberto.png,Primo do Amarildo|Filho de Horácio Anerão||||
Priscila Toledo Reti,03/03/1990,,priscila.jpg,❤️Amiga da Carol|||||
Valeria Aparecida Gestich,07/03/1988,,valeria.jpg,Prima do Amarildo|Filha de Braz Gestich|Filha de Maria José Gestich|Irmã do Reginaldo|Irmã do João Paulo|
Santa Anerão da Silva,10/03/1920,27/10/1975,santa_anerao.jpg,Tia do Amarildo|Irmã de Arvelino Anerão|Filha de José Anerão|Filha de Rosa Frachelli Anerão||
José Wilson Cosme de Oliveira,13/03/1970,,wilson_cosme.jpg,Já foi casado com Amarilza|||||
Iria Ribeiro Anerão,23/03/1930,10/01/1979,iria.jpg,Tia do Amarildo|Esposa de João Anerão|Mãe de Paulo de Assis Anerão|||
Zulmira Borges Gestich,25/03/1907,19/09/1964,zulmira.JPG,Avó materna do Amarildo|Mãe de Maria Cristina Anerão|Esposa de João Gestich|||
Nicolas Miguel Anerão Fonseca,25/03/2014,,nicolas.jpg,Neto do Amarildo|Filho da Ingrid|Filho do Dionatas|||
José Amarildo Anerão,30/03/1963,,amarildo.jpg,Criador desse sistema|Irmão do Amauri|Imão da Amarilza|Pai da Carol|Pai da Ingrid|Pai do Guilherme
Ivanira Ferreira Lima,01/04/1973,,ivanira.jpg,Mãe do Juninho|Mãe da Karina|Mãe do Luiz|||
Maria de Lourdes Malaquias Gestich,07/04/1955,,maria_lourdes.jpg,Tia do Amarildo|Esposa de Antonio Gestich||||
Rosa Aparecida Anerão de Jesus,08/04/1950,20/09/2021,rosa_aparecida.jpg,Prima do Amarildo|Filha de joão Anerão|Filha de Iria Ribeiro Anerão|||
Aurora Ribeiro Ribeiro,16/04/1946,,aurora.jpg,Tia do Amarildo|Irmã de Maria Cristina Anerão|Mãe da Regina|Mãe da Rita|Esposa de Arlindo Francisco|
Arlindo Francisco Ribeiro,16/04/1948,24/10/2001,arlindo.jpg,Tio do Amarildo|Esposo da Aurora Ribeiro|Pai da Regina|Pai da Rita||
Dionatas Willian de Souza Fonseca,18/04/1992,,dionatas.jpg,Pai do Nícolas|||||
Carolina Gabriela Fernandes Anerão,04/05/1994,,carolina.jpg,Filha do Amarildo|Filha da Solamita|Irmã da Ingrid|Irmã do Guilherme|Irmã do Leandro|
José Reginaldo Gestich,29/05/1980,,jose_reginaldo.jpg,Primo do Amarildo|Filho de Braz Gestich|Filho de Maria José Gestich|Irmão do João Paulo|Imão da Valeria
Karina Kristina Lima Anerão,30/05/1996,,karina.jpg,Sobrinha do Amarildo|Filha do Amauri|Filha da Ivanira|Irmã do Juninho|Irmã do Luiz|
Genésio de Souza,11/06/1947,08/02/2000,genesio.jpg,Padrinho da Ingrid|Esposo da Leonor Oliveira de Souza||||
Rosa Nobre,15/06/1953,24/10/1975,rosa_nobre.jpg,Sobrinha de Arvelino Anerão|||||
Amélia Anerão Doneda,15/06/1926,23/02/2020,amelia.png,Tia do Amarildo|Irmã de Arvelino Anerão|Filha de José Anerão|Filha de Rosa Frachelli Anerão||
João Paulo Gestich,19/06/1984,,joao_paulo.jpg,Primo do Amarildo|Filho de Braz Gestich|Filho de Maria José Gestich|Irmão do Reginaldo|Imão da Valeria|
João Gestich,24/06/1895,04/05/1980,joao_gestich.jpg,Avô materno do Amarildo|Pai de Maria Cristina Anerão|Esposo de Zulmira Borges Gestich|||
Leonor Oliveira de Souza,29/06/1951,21/03/2019,leonor.jpg,Madrinha da Ingrid|Esposa de Genésio de Souza||||
Guilherme Gabriel Fernandes Anerão,06/07/2009,,guilherme.jpg,Filho do Amarildo|Filho da Solamita|Irmã da Carol|Irmã da Ingrid|Irmã do Leandro|
Elias Gestich,27/07/1948,,elias.jpg,Tio do Amarildo|Irmão de Maria Cristina Anerão|Filho de João Gestich|Filho de Zulmira Borges Gestich||
Antonio Fernandes de Lima,18/08/1943,28/02/2019,antonio_lima.jpg,Pai da Solamita|Esposo de Aparecida Ordália|Avô da Carol|Avô da Ingrid|Avô do Guilherme|Avô do Leandro
João Anerão,24/08/1924,30/01/2007,joao_anerao.png,Tio do Amarildo|Irmão de Arvelino Anerão|Pai de Paulo de Assis Anerão|Esposo de Iria Ribeiro Anerão|Filho de José Anerão|Filho de Rosa Frachelli Anerão
José Anerão,25/08/1889,11/08/1976,jose_anerao.jpg,Avô paterno do Amarildo|Pai de Arvelino Anerão|Esposo da Rosa Frachelli Anerão|||
Antonio Anerão (Tonico),05/09/1931,02/05/2014,antonio_anerao.jpg,Tio do Amarildo|Irmão de Arvelino Anerão|Filho de José Anerão|Filho de Rosa Frachelli Anerão||
Laura Rachel Dias Lins Anerão,05/09/1982,,laura.jpg,Esposa do Juninho|||||
Aparecida Ordália Garcia de Lima,07/09/1943,,aparecida.jpg,Esposa de Antonio Fernandes de Lima|Mãe da Solamita e do Sandro|Avó da Carol|Avó da Ingrid|Avó do Guilherme|Avó do Leandro
Aparecida Anerão Bellintani,08/09/1953,23/08/2025,aparecida_anerao_bellintani.jpg,Prima do Amarildo|Filha de João Anerão|Filha de Iria Ribeiro Anerão|🖤🎗Faleceu Recentemente||
Maria Cristina Anerão,10/09/1941,12/03/2023,cristina.jpg,Mãe do Amarildo|Mãe do Amauri|Mãe da Amarilza|Esposa de Arvelino Anerão|Filha de João Gestich|Filha de Zulmira Borges Gestich
João Bellintani,13/09/1925,03/11/1973,joao_bellintani.jpg,Padrinho da Amarilza|||||
Maximiro Pinto,15/09/1915,02/03/1996,maximiro_pinto.jpg,Tio do Amarildo|Cunhado de Arvelino Anerão|Esposo de Maria Pinto Anerão|||
Leandro Henrique de Lima Neto,29/09/1990,,leandro.jpg,Filho da Solamita|Irmão da Carol|Irmão da Ingrid|Irmão do Guilherme||
Paulo de Assis Anerão,18/10/1962,,paulo.jpg,Primo do Amarildo|Flho de João Anerão|Filho de Iria Ribeiro Anerão|||
Antonio Amauri Anerão,19/10/1965,,amauri.jpg,Irmão do Amarildo|Irmão da Amarilza|Pai do Juninho - Karina - Luiz|Filho de Arvelino Anerão|Filho de Maria Cristina Anerão|
Sonia Regina Moller,21/10/1975,10/10/2019,sonia.jpg,Prima do Amarildo|Filha de Rosa Lia Moller Anerão|Filha de Alfredo Moller|Irmã da Sandra|Irmã da Suzi|
Antonio Amauri Anerão Junior,24/10/1991,,amauri_jr.jpg,Sobrinho do Amarildo|Filho do Amauri|Filho da Ivanira|Irmão da Karina|Irmão do Luiz|
Solamita Fernandes de Lima,30/10/1972,,solamita.jpg,Mãe do Leandro|Mãe da Carol|Mãe da Ingrid|Mãe do Guilherme|Filha de Antonio Fernandes de Lima|Filha de Aparecida Ordália Garcia de Lima
Vicente Gestich,13/11/1938,27/05/2022,vicente.jpg,Tio do Amarildo|Irmão de Maria Cristina Anerão|Filho de João Gestich|Filho da Zulmira Borges Gestich||
Luiz Fernando Lima Anerão,27/11/2005,,luiz.jpg,Sobrinho do Amarildo|Irmão do Juninho|Irmão da Karina|Filho do Amauri|Filho da Ivanira|
Arvelino Anerão,29/11/1937,02/07/2007,arvelino.png,Pai do Amarildo|Pai do Amauri|Pai da Amarilza|Esposo de Maria Cristina Anerão|Filho de José Anerão|Filho de Rosa Frachelli Anerão
Sandro Fernandes de Lima,29/11/1974,23/12/2016,sandro.jpg,Irmão da Solamita|Filho de Aparecida Ordália Garcia de Lima|Filho de Antonio Fernandes de Lima|||
Antonio Gestich,02/12/1951,,antonio_gestich.jpg,Tio do Amarildo|Filho de João Gestich|Filho de Zulmira Borges Gestich|||
Cleici Aparecida Anerão,09/12/1963,13/03/2025,cleici.jpg,Prima do Amarildo|Sobrinha de Arvelino Anerão|Filha de Adelino Anerão|Filha de Maria de Lourdes Mendes Anerão||
Rosa Lia Anerão Moller,15/12/1943,,rosalina.jpg,Tia do Amarildo|Mãe da Sandra|Mãe da Sonia|Mãe da Suzi|Irmã de Arvelino Anerão|Esposa de Alfredo Moller
Rita de Cássia Ribeiro,18/12/1974,,rita.jpg,Prima do Amarildo|Filha da Aurora Ribeiro|Filha de Arlindo Francisco Ribeiro|Irmã da Regina||
Regina Aparecida Ribeiro,21/12/1971,,regina.jpg,Prima do Amarildo|Filha da Aurora Ribeiro|Filha de Arlindo Francisco Ribeiro|Irmã da Rita||
NATAL DO MENINO JESUS 25/12,25/12/0001,,jesus.jpg,Rei dos Reis|Paz na Terra|Amor Eterno|Luz do Mundo|Salvador do Mundo|Divindade\`;