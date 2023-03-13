window.onload = () => {
  var dataObj = {};
  var items = [];
  document.getElementById('product').onchange = (evt) => {
    const selected = evt.target.options[evt.target.selectedIndex];
    const selectedPrice = selected.dataset.price;
    document.getElementById('price').value = selectedPrice;
  };

  document.getElementById('addBtn').onclick = () => {
    const select = document.getElementById('product');
    let totalPrice = 0;

    if (select.selectedIndex == 0
      || document.getElementById('price').value == ''
      || document.getElementById('quantity').value == '') {
      alert("Please select project or input quantity!");
    } else {
      const pID = select[select.selectedIndex].value;
      const pPrice = document.getElementById('price').value;
      const pName = select[select.selectedIndex].innerHTML;
      const pQtt = document.getElementById('quantity').value;
      totalPrice += parseInt(pPrice) * parseInt(pQtt);
      items.push({ "id": pID, "quantity": pQtt });

      const pList = document.getElementById('productList');
      if (pList.children.length == 0) {
        genProductListTitle(pList);
        genProductTbl(pList);

        addProductRow(pID, pPrice, pName, pQtt);
      } else {
        addProductRow(pID, pPrice, pName, pQtt);
      }

      select.selectedIndex = 0;
      document.getElementById('price').value = "";
      document.getElementById('quantity').value = "";
    }
    document.getElementById('total').value = totalPrice + parseInt(document.getElementById('total').value);
  };

  document.getElementById('calBtn').onclick = async () => {
    //cal
    calculateReturnedCash(dataObj, items);
    //convert to money

    //save order & order items
    //fetch('localhost:8000/orders')
    // const rawResponse = await fetch('http://localhost:8000/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(dataObj)
    // });
    // const content = await rawResponse.json();

    // console.log(content);
  }
}

function calculateReturnedCash(dataObj, items) {
  const receive = document.getElementById("receive").value;
  const total = document.getElementById('total').value;
  if (receive == 0 || total == 0) {
    alert("Please input received cash!");
  } else {
    let returned = receive - total;
    dataObj.total = total;
    dataObj.received_cash = receive;
    dataObj.return_cash = returned;
    dataObj.items = items;

    document.getElementById('return').value = returned;
    const exchange = document.getElementById('exchange');
    let strExChange = 'Change: ' + denominationUSA(returned);
    exchange.innerHTML = strExChange;
  }
}

function denominationUSA(number) {
  let str = '';
  const dollars = [100, 50, 20, ,10 ,5 , 2, 1];
  const coins = [50, 25, 10, 5, 1];

  let tmp = number.toString().split('.');
  if (tmp[0]) {
    let dl = parseInt(tmp[0]);
    dollars.forEach(item => {
      let t = parseInt(dl / item);
      if (t) {
        str += `, ${t*item}$`;
      }
      dl = dl % item;
    });
  }
  if (tmp[1]) {
    let cent;
    if (tmp[1].length === 1) cent = parseInt(tmp[1]) * 10;
    else cent = parseInt(tmp[1]);

    coins.forEach(item => {
      let c = parseInt(cent / item);
      if (c) {
        str += `, ${c * item}¢`;
      }
      cent = cent % item;
    });
  }
  return str.substring(2);
}

function genProductListTitle(pList) {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Purchased List';
  pList.appendChild(h2);
}

function genProductTbl(pList) {
  const productTbl = document.createElement('table');
  productTbl.id = 'productTbl';
  productTbl.className = 'table table-sm table-bordered';

  const tHead = document.createElement('thead');
  tHead.innerHTML = `<tr>
    <th colspan="1" class="float-right">#</th>
    <th colspan="1" class="center">Product</th>
    <th colspan="1" class="float-right">Unit cost</th>
    <th colspan="1" class="float-right">Quantity</th>
    <th colspan="1" class="float-right">Total</th>
    </tr>
  `;
  productTbl.appendChild(tHead);

  const tBody = document.createElement('tbody');
  tBody.id = "tBodyId";

  productTbl.appendChild(tBody);

  pList.appendChild(productTbl);
}

function addProductRow(pID, pPrice, pName, pQtt) {
  let tBody = document.getElementById('tBodyId');
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td class="float-right">${pID}</td>
  <td class="center">${pName}</td>
  <td class="float-right">${pPrice}</td>
  <td class="float-right">${pQtt}</td>
  <td class="float-right">${pPrice*pQtt}</td>
  `;

  if (tBody) {
    tBody.appendChild(tr);
  } else {
    tBody = document.createElement('tbody');
    tBody.id = 'tBodyId';
    tBody.appendChild(tr);
  }
}
