function generatabella() {
    const contenitore = document.getElementById('contenitore-tabella');
    contenitore.innerHTML = ''; 

    const checkboxselezionati = document.querySelectorAll('#form-servizi input[type="checkbox"]:checked');

    if (checkboxselezionati.length === 0) {
        alert("Plese select a service");
        return;
    }


    const tabella = document.createElement('table');
    tabella.classList.add('tabella-stile');

    const rigaintestazione = document.createElement('tr');
    rigaintestazione.classList.add('tr-stile');
    
    const thservizio = document.createElement('th');
    thservizio.textContent = "Service";
    
    const thprezzo = document.createElement('th');  
    thprezzo.textContent = "Price";

    rigaintestazione.appendChild(thservizio);
    rigaintestazione.appendChild(thprezzo);
    tabella.appendChild(rigaintestazione);

    const tbody = document.createElement('tbody');
   
    let prezzototale = 0;
    let fsconto = 0;
    let tot = 0;

    checkboxselezionati.forEach(function(box) {
        const nome = box.getAttribute('data-nome');
        const prezzo = parseFloat(box.value);

        prezzototale += prezzo;

        fsconto += prezzo*10/100;

        tot = prezzototale-fsconto;

        const riga = document.createElement('tr');

        const tdnome = document.createElement('td');
        tdnome.textContent = nome;

        const tdprezzo = document.createElement('td');
        tdprezzo.textContent = prezzo;

        riga.appendChild(tdnome);
        riga.appendChild(tdprezzo);
        tbody.appendChild(riga);
    });

    tabella.appendChild(tbody);

    const tfoot = document.createElement('tfoot');
    const rigatotale = document.createElement('tr');

    rigatotale.classList.add('tfoot-stile');

    
    const tdlabeltotale = document.createElement('td');
    tdlabeltotale.textContent = "TOT";

    const tdvaloretotale = document.createElement('td');
    tdvaloretotale.textContent = prezzototale;

    rigatotale.appendChild(tdlabeltotale);
    rigatotale.appendChild(tdvaloretotale);
    tabella.appendChild(rigatotale);


    const sconto = document.createElement('tr');
    sconto.classList.add('sconto-stile');

    const tdlabelsconto = document.createElement('td');
    tdlabelsconto.textContent = "NEW CUSTOMERS DISCOUNT (10%)";

    const tdsconto = document.createElement('td');
    tdsconto.textContent = "- " + fsconto;


    sconto.appendChild(tdlabelsconto);
    sconto.appendChild(tdsconto);
    tabella.appendChild(sconto);


    const nuovotot = document.createElement('tr');
    nuovotot.classList.add('nuovotot-stile');

    const tdlabelntot= document.createElement('td');
    tdlabelntot.textContent = "NEW TOTAL";

    const tdntot = document.createElement('td');
    tdntot.textContent = tot;


    nuovotot.appendChild(tdlabelntot);
    nuovotot.appendChild(tdntot);
    tabella.appendChild(nuovotot);




    contenitore.appendChild(tabella);
}