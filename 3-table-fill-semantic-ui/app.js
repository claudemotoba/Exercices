const tableau = document.querySelector('table')
for (let i = 0; i < users.length; i++) {
    let tab = users[i]    
    let tr = document.createElement('tr');
    for (property in tab) {
        tr.innerHTML += `<td> ${tab[property]} </td>`
        tableau.append(tr)
      }
}
    
