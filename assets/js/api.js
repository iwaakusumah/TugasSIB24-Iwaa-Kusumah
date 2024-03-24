fetch('https://api.jikan.moe/v4/genres/anime')
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');

        const headerName = document.createElement('th');
        headerName.textContent = 'Name';
        headerRow.appendChild(headerName);

        const headerUrl = document.createElement('th');
        headerUrl.textContent = 'URL';
        headerRow.appendChild(headerUrl);

        const headerCounts = document.createElement('th');
        headerCounts.textContent = 'Counts';
        headerRow.appendChild(headerCounts);

        table.appendChild(headerRow);

        data.data.forEach(genre => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = genre.name;
            row.appendChild(nameCell);

            const urlCell = document.createElement('td');
            const urlLink = document.createElement('a');
            urlLink.href = genre.url;
            urlLink.textContent = genre.url;
            urlCell.appendChild(urlLink);
            row.appendChild(urlCell);

            const countsCell = document.createElement('td');
            countsCell.textContent = genre.count;
            row.appendChild(countsCell);

            table.appendChild(row);
        });

        const productContainer = document.querySelector('.product-container');
        productContainer.appendChild(table);
    })
    .catch(error => console.error('Error fetching data:', error));
