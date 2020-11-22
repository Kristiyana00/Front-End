let content = [
    {
      'Evidence Rating': "A",
      'Effect': "Power Output",
      'Efficacy': "3 Stars",
      'Consensus': "80% 18 studies",
      'Comments':
        "Random text",
    },
    {
      'Evidence Rating': "B",
      'Effect': "Weight",
      'Efficacy': "4 Stars",
      'Consensus': "100% 65 studies",
      'Comments':
        "Random text",
    },
  ];
  
  
  function tableHead(table, columnNames) {
    let table_head = table.createTHead();
    let row = table_head.insertRow();
    for (const name of columnNames) {
      const th = document.createElement("th");
      const text = document.createTextNode(name);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function createTable(table, content) {
    for (let element of content) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.createElement('table');
  table.setAttribute("border", "1");
  
  let tableHeadNames = Object.keys(content[0]);
  
  tableHead(table, tableHeadNames);
  createTable(table, content);
  
  let caption = table.createCaption();
  caption.innerText = "Table caption";
  
  document.body.appendChild(table);
