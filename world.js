document.addEventListener('DOMContentLoaded', function(){
    let lookUpButtton = document.getElementById('lookup');
    let countryInput = document.getElementById('country');
    let result = document.getElementById('result');

    lookUpButtton.addEventListener('click', function(){
        var xhr = new XMLHttpRequest();
        var userInput = countryInput.value;
        var url = 'http://localhost/info2180-lab5/world.php?country=' + encodeURIComponent(userInput);

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.status == 200) {
                result.innerHTML = '';
                var response = JSON.parse(xhr.responseText);

                if (response.length !== 0) {
                    var ul = document.createElement('ul');

                    response.forEach(function (i) {
                        var li = document.createElement('li');
                        li.textContent = i.name + ' is ruled by ' + i.head_of_state;
                        ul.appendChild(li);
                    });

                    result.appendChild(ul);
                } else {
                    result.textContent = 'Country Not Found';
                }
            }
        };

        xhr.send();
    });

})

