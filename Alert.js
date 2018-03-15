Alert = function (para,id) {

    var content = [];
    if (para.hasOwnProperty('icon')) {
        content.push('<p class="alert-box-icon"><i class="fa ' + para.icon + ' fa-fw fa-4x" aria-hidden="true"></i></p>');
    }
    if (para.hasOwnProperty('title')) {
        content.push('<p class="alert-box-title">' + para.title + '</p>');
    }
    if (para.hasOwnProperty('info')) {
        content.push('<p class="alert-box-info">' + para.info + '</p>');
    }
    var btn = [];
    if (para.hasOwnProperty('close')) {
        btn.push('<button class="btn-shadow " data-close="close">' + para.close + '</button>');
    }
    if (id) {
        var isAlertBoxExist = document.getElementById(id);
        if (isAlertBoxExist) {
            isAlertBoxExist.getElementsByClassName('alert-box-content')[0].innerHTML = content.join('');
            isAlertBoxExist.getElementsByClassName('alert-box-btn')[0].innerHTML = btn.join('');
            return;
        }
    }

    var html = '<div class="alert-box-background"></div>'
        + '<div class="alert-box">'
        + '<div class="alert-box-content">'
        + content.join('')
        + '</div>'
        + '<div class="alert-box-btn">'
        + btn.join('')
        + '</div>'
        + '</div>';
    var body = document.getElementsByTagName('body')[0];
    var alertBox = document.createElement('div');
    if (para.hasOwnProperty('id')) {
        alertBox.id = para.id;
    }
    alertBox.innerHTML = html;
    body.appendChild(alertBox);
    alertBox.getElementsByClassName('alert-box')[0].style.opacity = 1;
    alertBox.addEventListener('click', function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.dataset.close == 'close') {
            this.getElementsByClassName('alert-box')[0].style.opacity = 0;
            this.getElementsByClassName('alert-box-background')[0].style.opacity = 0;
            setTimeout(function () {
                alertBox.parentNode.removeChild(alertBox);
                if (para.hasOwnProperty('closefunction')) {
                    para.closefunction();
                }
            }, 500);
        }
    });

};