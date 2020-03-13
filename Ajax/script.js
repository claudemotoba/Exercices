const ul = document.querySelector('#sectors')
const button = document.querySelector('#btn')

button.addEventListener('click', function() {
    ul.innerHTML = 'chargement...'
    fetch(' http://172.30.1.31:8000/api/sectors').then(function(result) {
        const lis = document.createElement('li')
        lis.innerHTML = ' '
        ul.appendChild(lis)
        return result.json()
    }).then(function(data) {
        ul.innerHTML=''
        for (const i of data) {
            const li = document.createElement('li')

            li.innerHTML=`${i.name}`;
            ul.appendChild(li)
        }

    })
})