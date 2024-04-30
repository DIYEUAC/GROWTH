document.addEventListener("DOMContentLoaded", function() {
    const students = 
    [
        { "name": "CONDORI SAAVEDRA ANGELA BRIGUITTE", 
        "certificateURL": "https://drive.google.com/file/d/1vr9LHJYIbP5w6i2EBjLOeBQY-2Hxxz1l/view?usp=sharing", 
        "password": "021100353i"},

        { "name": "ROMANI MORA GIAN MARX RODRIGO", 
        "certificateURL": "https://drive.google.com/file/d/1mSg5W3hh1DtRxI9DtjnIpSU7tnjFZxJB/view?usp=sharing", 
        "password": "021101323f"},

        { "name": "ESCALANTE PONCE ANDREE JULIO", 
        "certificateURL": "https://drive.google.com/file/d/1g0wIRGeyffNNL2tUkqXyR_ZhfcCTIq-6/view?usp=sharing", 
        "password": "021100406e"},

        { "name": "LAYME SONCCO BLANCA NELIDA", 
        "certificateURL": "https://drive.google.com/file/d/1bwKsnkb5L6rp1sNb64j2TEZWEM5jDd-T/view?usp=sharing", 
        "password": "021100576h"},

        { "name": "QUISPE CHIPA JEFFERSON SHAMER",
        "certificateURL": "https://drive.google.com/file/d/1AL0ls6wA_rTCNlNnpylxWRisHKJ2uj3B/view?usp=sharing", 
        "password": "020200580h"},

        { "name": "SALAS FLOREZ MIGUEL ANGEL", 
        "certificateURL": "https://drive.google.com/file/d/1HfZnqTITcooUIaaXPBvWxzkhGXBzMtIb/view?usp=sharing", 
        "password": "016201055k"},

        { "name": "ABARCA ARCOS RODOLFO", 
        "certificateURL": "https://drive.google.com/file/d/1T9HpuZYzTXqYkTxMDy8C8sJmF1H6uCYz/view?usp=sharing", 
        "password": "019200521e"},

        { "name": "ROMUACCA HUAMAN MIJAIL KEVIN", 
        "certificateURL": "https://drive.google.com/file/d/16nBkl2CpULA2KGQaO4mO8Nj9rT0x0afy/view?usp=sharing", 
        "password": "017201428k"},

        { "name": "COLLANA QUINTANO ROBINSON CLETO", 
        "certificateURL": "https://drive.google.com/file/d/1vHv7E7uCgOWZq-SXAK0XJDO27TThJKQq/view?usp=sharing", 
        "password": "017200695e"},

        { "name": "TABOADA MEJIA JHAROL MANUEL", 
        "certificateURL": "https://drive.google.com/file/d/1eSMDi3M3AvZg9MhHLlKNUmN3h7fNxxar/view?usp=sharing", 
        "password": "017201521k"},

        { "name": "CCOPA MAMANI JOSE ANTONIO", 
        "certificateURL": "https://drive.google.com/file/d/1fLd0Gu5e79dYVJdKNXMhEml21sx2C5uK/view?usp=sharing", 
        "password": "019101320a"},

        { "name": "ALLER SOLIS JAMPIER", 
        "certificateURL": "https://drive.google.com/file/d/1XNJ95KK6T6PaHj-GqNpGR63Mo0peE1tO/view?usp=sharing", 
        "password": "019101265k"},

        { "name": "CHOQUEHUANCA ARCODO WENDY JULISSA", 
        "certificateURL": "https://drive.google.com/file/d/17GqM1_BlYw56XQyOg07X01f7jCZMfaiC/view?usp=sharing", 
        "password": "021100320c"},

        { "name": "SONCCO CONDORI EDGAR", 
        "certificateURL": "https://drive.google.com/file/d/13UixltGT-wOlr_3K_ogzJgydxXbv7Q_3/view?usp=sharing", 
        "password": "020101920e"},

        { "name": "OCHOA GALINDO ANGEL", 
        "certificateURL": "https://drive.google.com/file/d/1munHbTbGcorfAJZLwsRBWu4kPGKoRiiJ/view?usp=sharing", 
        "password": "020201099a"},

        { "name": "CONDORI LAURA MARIA INES", 
        "certificateURL": "https://drive.google.com/file/d/1aK0r3mcBqHH5xU2LPwLbLioZmUaaOaSh/view?usp=sharing",
        "password": "021100350j"},

        { "name": "JANCCO JAIMES ALEJANDRO MANUEL", 
        "certificateURL": "https://drive.google.com/file/d/18ImYrM8NFzha_Icyfd1b2z9MrO5hqB1U/view?usp=sharing", 
        "password": "020100254a"},

        { "name": "RODRIGUEZ PASAPERA JUAN EZEQUIEL", 
        "certificateURL": "https://drive.google.com/file/d/1WOTg1w-jobR4NiMQBJoFbtJCetHYoUDF/view?usp=sharing", 
        "password": "021101319i"},

        { "name": "CARDEÑA HUILLCA MILAGROS ALINA", 
        "certificateURL": "https://drive.google.com/file/d/1llngJnSdb4EVPaUlvc86LvVZEscIp-cQ/view?usp=sharing", 
        "password": "021101159a"},

        { "name": "CAVIEDES DURAN MAYRA GABRIELA", 
        "certificateURL": "https://drive.google.com/file/d/1QNhxyuN_tFZieQ0W6Xj5bFp0WTTVe05B/view?usp=sharing", 
        "password": "021100273e"},

        { "name": "VALENZUELA ESCALANTE ESTHER", 
        "certificateURL": "https://drive.google.com/file/d/1zjwVy3nTXbJuEreOc-2Mci-j0779mpiM/view?usp=sharing", 
        "password": "020102011i"},

        { "name": "MORMONTOY PRADO VIDAMI",
        "certificateURL": "https://drive.google.com/file/d/1YyVkmtEQoSYQTiHNrVTAAtqz1xW1J9qu/view?usp=sharing", 
        "password": "019100782a"},

        { "name": "MENDOZA RIOS VLADIMIR ARMANDO", 
        "certificateURL": "https://drive.google.com/file/d/1JoIr_DahDDJlKeVBpStPBHGVTOnYQFYT/view?usp=sharing", 
        "password": "017100446c"},

        { "name": "ATENCIO CHUCTAYA MELANI NICOLL", 
        "certificateURL": "https://drive.google.com/file/d/1_mD0dAZGULgudgOjTJhBJ_EPZ6ci3prV/view?usp=sharing", 
        "password": "019101237g"},

        { "name": "PACHECO HUAMANI MADAI HASLY", 
        "certificateURL": "https://drive.google.com/file/d/1LdqNfK_b5uSV-yaeHeOlXE3AzOCbCPPt/view?usp=sharing", 
        "password": "021101454c"},

        { "name": "MERCADO TTITO MARIA FERNANDA", 
        "certificateURL": "https://drive.google.com/file/d/1_pOLEvLXwsWdlSu3ba2c4L-HD6vtXjLX/view?usp=sharing", 
        "password": "019101858a"},

        { "name": "ESPINOZA SALCEDO JOSE ANTONIO", 
        "certificateURL": "https://drive.google.com/file/d/1VrTPGwq7HXDhMPRLF_gioNa6d3o4nzSn/view?usp=sharing", 
        "password": "021100411i"},

        { "name": "BRAÑEZ FRANCO MARITZA LUCERO", 
        "certificateURL": "https://drive.google.com/file/d/1GKebcGh2ZqMRxV51hp0a8F5G13EiiYNx/view?usp=sharing", 
        "password": "021101148j"},

        { "name": "RODAS GOMEZ JEANS POOL", 
        "certificateURL": "https://drive.google.com/file/d/1X5iHisdgadvDIXJ11fVacbaAGm5wxSan/view?usp=sharing", 
        "password": "020200609f"},

        { "name": "HUACAC MAYTA FRANSHESKA HALONDRA", 
        "certificateURL": "https://drive.google.com/file/d/1xi_ZxCl3f70kFJM9cZS8rHV-5wacSDvg/view?usp=sharing", 
        "password": "021100495h"},

        { "name": "CORRALES HUALLPA MATTHEW RYZARD", 
        "certificateURL": "https://drive.google.com/file/d/16eYjzSlIJuHbFQDsUHMWXyeO27LqOouq/view?usp=sharing", 
        "password": "021101181g"},

        { "name": "PAUCARMAYTA MACERA INTI PRACKASH", 
        "certificateURL": "https://drive.google.com/file/d/1OMV9z9GvwPGIZTRuUxgLoY1Becoy9uiN/view?usp=sharing", 
        "password": "020100533h"},

        { "name": "RODRIGUEZ SAAVEDRA ASTRID JULIET", 
        "certificateURL": "https://drive.google.com/file/d/1Am_q24cifuFmAdyrGTnXPqcrqbHXcZjK/view?usp=sharing", 
        "password": "019201671k"},

        { "name": "VERA PACHECO KAROLINE", 
        "certificateURL": "https://drive.google.com/file/d/1s6bMff_u2qKQ_edZO-xgQWQL_W7L46u7/view?usp=sharing", 
        "password": "020201259i"},

        { "name": "JURURO ORELLANA ROY ERICK", 
        "certificateURL": "https://drive.google.com/file/d/1iZlww0gdQmh5osZEfPBtWYWqzsqrbgcI/view?usp=sharing", 
        "password": "020200424f"},

        { "name": "YAURI QUISPE YEIFER", 
        "certificateURL": "https://drive.google.com/file/d/1byQROUxVn0T2y4USzXlpNDRqj9EREC1L/view?usp=sharing", 
        "password": "020201278c"},

        { "name": "VALLE VELIZ KARLA VIVIANA", 
        "certificateURL": "https://drive.google.com/file/d/1_iDSHBBeAMkcycs85zWiQu0zsoiKujU_/view?usp=sharing", 
        "password": "020201490b"},

        { "name": "RUBINA AREVALO BRIYETH CATHERINE", 
        "certificateURL": "https://drive.google.com/file/d/1iK91pEiT_yDjRFf6hgtRklctRhalPH89/view?usp=sharing", 
        "password": "021101326e"},

        { "name": "CASA HUAMAN ANGELO", 
        "certificateURL": "https://drive.google.com/file/d/1jsnNxe4e4JElm9Qm8HdDsaefzQZmtidW/view?usp=sharing", 
        "password": "018200513c"},

        { "name": "SULLCA CHUMBES GROVER JOHAN", 
        "certificateURL": "https://drive.google.com/file/d/196TzaXLCZpF4FO5He432GfrQonBpkM5P/view?usp=sharing", 
        "password": "019101079b"},

        { "name": "HUAMAN FORTON MARIA JESUS", 
        "certificateURL": "https://drive.google.com/file/d/1xrCN2yG9dW_hw2DvHmG0Zp0VohGfPh-B/view?usp=sharing", 
        "password": "021100511c"},

        { "name": "CONDORI OLIVERA FRANSI ESTHER", 
        "certificateURL": "https://drive.google.com/file/d/1ZAuZZs7CsNs8fRdtjRrGvpAIXlLbP5wh/view?usp=sharing", 
        "password": "019100386i"},

        { "name": "MAMANI TORRES ARIANA KYARALY", 
        "certificateURL": "https://drive.google.com/file/d/1_U3-X_Rd3uglhPlajwpjFkIK_gUAfneR/view?usp=sharing", 
        "password": "021100619i"},

        { "name": "RAMIREZ FARFAN NATALIA", 
        "certificateURL": "https://drive.google.com/file/d/15AAP5rqxkKDrv-gjjKuNCCMW5bhasZtU/view?usp=sharing", 
        "password": "021100789a"},

        { "name": "VARGAS GOMEZ LUZ YAMILET", 
        "certificateURL": "https://drive.google.com/file/d/1LhLDs-5Reh4wn9fVKhjXUpesG_PZ1WOK/view?usp=sharing", 
        "password": "021100931b"},

        { "name": "PILLCO MAURE HAYLLI RIBALDO", 
        "certificateURL": "https://drive.google.com/file/d/1ISda-z0CO0BVZx82KoeoiGs8q2__YfJk/view?usp=sharing", 
        "password": "021100734b"},

        { "name": "VILLARRUEL VALDIVIA JUAN CARLOS", 
        "certificateURL": "https://drive.google.com/file/d/1rQLokagucIDfH7FHTgOqiVeY_1TP3JRD/view?usp=sharing", 
        "password": "020201265i"},

        { "name": "ARAPA FLORES STEVE BRAYAN", 
        "certificateURL": "https://drive.google.com/file/d/1X3fdEp3GjlFx_25LDn27uIce77gLxL1x/view?usp=sharing", 
        "password": "021100156i"},

        { "name": "HUAYLLAPUMA CHALLCO ASHLY MAYLU", 
        "certificateURL": "https://drive.google.com/file/d/1XPEJ8kEjuVPCJl9Kfq5GRHDf4WmKLLMx/view?usp=sharing", 
        "password": "021100540c"},

        { "name": "ACUÑA LOAYZA LORENA ODALIZ", 
        "certificateURL": "https://drive.google.com/file/d/1s6NChstJq61AKonXtpiMC_QKbcm6_5nG/view?usp=sharing", 
        "password": "020200135d"},

        { "name": "AYOSO LOAIZA ROSSALI VERONICA", 
        "certificateURL": "https://drive.google.com/file/d/1_lK9GSuDijRFZn96KIU82lFA72YOOcbg/view?usp=sharing", 
        "password": "021100192e"},

        { "name": "LOAIZA GUTIERREZ ESTHEFANI", 
        "certificateURL": "https://drive.google.com/file/d/19MaKvzy_enWU4__2werMn4hTFcS1h99L/view?usp=sharing", 
        "password": "021100590k"},

        { "name": "CORDOVA BENDEZU JAZMIN PAOLA", 
        "certificateURL": "https://drive.google.com/file/d/1WbBT_TOtH478NTszMvZMeGIGy33_KqIS/view?usp=sharing", 
        "password": "021100356h"},

        { "name": "TORRES CABRERA ROCIO FERNANDA", 
        "certificateURL": "https://drive.google.com/file/d/1QAhZmbBG8ecU2CdD0JQe8sqSXZvH6YWj/view?usp=sharing", 
        "password": "021100893c"},

        { "name": "SOLIS VALVERDE DANIELA ALEJANDRA", 
        "certificateURL": "https://drive.google.com/file/d/1yq8n4HGU3LTkm5kHSCPqyzDTDD6XSLoS/view?usp=sharing", 
        "password": "021100864c"},

        { "name": "CHILE POZO ADRIANA ABIGAIL", 
        "certificateURL": "https://drive.google.com/file/d/1I2s77Oj6UthQ4G74hv8-KYBjNkWH-2eJ/view?usp=sharing", 
        "password": "021101174k"},

        { "name": "TURPO MADERA RIGOBERTO", 
        "certificateURL": "https://drive.google.com/file/d/1Vtl8B0Za2uYDNpNcogjsX20HDFQXhVfC/view?usp=sharing", 
        "password": "020102217f"},

        { "name": "PACHECO ESTHER, GUZMAN", 
        "certificateURL": "https://drive.google.com/file/d/1gXBpegU9Q8LNRitqjIaWRHHPfaC4mrSr/view?usp=sharing", 
        "password": "eguzman"},

        { "name": "CALDERON GONZALES WERNER ALFONSO", 
        "certificateURL": "https://drive.google.com/file/d/13c_J_KR7XhQeeP-dUPXcf9UHJ4a41G2s/view?usp=sharing", 
        "password": "wcalderon"},

        { "name": "CARLOTTO GUTIERREZ ED", 
        "certificateURL": "https://drive.google.com/file/d/1Hy7R2_skllg9fzCIA-C6OjlC6PwzdcDX/view?usp=sharing", 
        "password": "egutierrezc"},

        { "name": "PONCE FERNANDEZ BACA MANUEL ABRAHAM", 
        "certificateURL": "https://drive.google.com/file/d/1MeAGokAuRELDRo07AE-9_WS1-MBbE_Av/view?usp=sharing", 
        "password": "mponcef"},

        { "name": "HOLGUIN HERRERA MELISA BETYS", 
        "certificateURL": "https://drive.google.com/file/d/1Dgdnx5ItSOaqWFrUMAULVyMWMWlhgRO6/view?usp=sharing", 
        "password": "mholguin"},

        { "name": "CANAHUIRE MONTUFAR EDGARD ABRAHAM", 
        "certificateURL": "https://drive.google.com/file/d/1Dgdnx5ItSOaqWFrUMAULVyMWMWlhgRO6/view?usp=sharing", 
        "password": "acanahuire"},

        { "name": "ASTETE CALDERON GABRIELA", 
        "certificateURL": "https://drive.google.com/file/d/1RFVfaF52zMoTeMMQnqe-cs6Wx9P5PsI6/view?usp=sharing", 
        "password": "gastete"}
    ];

    const studentsTableBody = document.getElementById("studentsTableBody");

    const openPdfWithPassword = (url, password) => {
        // Buscar el estudiante por contraseña
        const student = students.find(student => student.password === password);
        if (student) {
            // Abrir el PDF en una nueva ventana si la contraseña es correcta
            window.open(url, "_blank");
        } else {
            alert("Contraseña incorrecta");
        }
    };

    const renderStudents = (students) => {
        studentsTableBody.innerHTML = ""; // Limpiar tabla
        students.forEach((student, index) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = student.name;

            const downloadCell = document.createElement("td");
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Descargar";
            downloadButton.className = "btn btn-primary btn-center"; // Utilizamos nuestras clases personalizadas de CSS
            downloadButton.addEventListener("click", () => {
                // Mostrar modal para ingresar contraseña antes de descargar el PDF
                const passwordModal = new bootstrap.Modal(document.getElementById("passwordModal"));
                passwordModal.show();

                // Al hacer clic en "Aceptar", verificar la contraseña e iniciar la descarga si es correcta
                document.getElementById("submitPasswordBtn").addEventListener("click", () => {
                    const passwordInput = document.getElementById("passwordInput").value;
                    openPdfWithPassword(student.certificateURL, passwordInput);
                    passwordModal.hide();
                });
            });
            downloadCell.appendChild(downloadButton);

            row.appendChild(nameCell);
            row.appendChild(downloadCell);

            studentsTableBody.appendChild(row);
        });
    };

    // Filtrar estudiantes según el término de búsqueda
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchTerm));
        renderStudents(filteredStudents);
    });

    // Renderizar todos los estudiantes al cargar la página
    renderStudents(students);
});
