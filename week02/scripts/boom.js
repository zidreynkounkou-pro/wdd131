const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');



button.addEventListener('click', function () {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    
    if (input.value.trim() !== '') {
        deleteButton.setAttribute('aria-label', 'Close');
        deleteButton.textContent = '❌';
         li.append(deleteButton);

    }


    else {
         input.focus();
    }
   
    list.append(li);
    input.value = '';   
    input.focus();

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.value = '';
        input.focus();
    });

});


