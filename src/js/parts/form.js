function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', sendForm);
    contactForm.addEventListener('submit', sendForm);



    function sendForm(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let formData = new FormData(form);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    let obj = {};
                    data.forEach(function(value, key) {
                        obj[key] = value;
                    })
                    let json = JSON.stringify(obj);
                 

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    })
                    request.send(json);
                })
            }

            let inn;
            if (event.target == form) {
                inn = input;
            }
            else if (event.target == contactForm) {
                inn = contactInput;
            }

          postData(formData)
            .then(function() {
                statusMessage.innerHTML = message.loading;
            })
            .then(function() {
                statusMessage.innerHTML = message.success;
            })
            .catch(function() {
                statusMessage.innerHTML = message.failure;
            })



            for (let i = 0; i < inn.length; i++) {
                    inn[i].value = '';
                }
    }

}

module.exports = form;