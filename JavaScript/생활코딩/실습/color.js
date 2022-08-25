function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        target.style.backgroundColor = 'darkslategrey';
        target.style.color = 'white';
        self.value = 'day';

        var aList = document.querySelectorAll('a');
        for (i = 0; i < aList.length; i++) {
            aList[i].style.color = 'powderblue';
        }
    }
    else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';

        var aList = document.querySelectorAll('a');
        for (i = 0; i < aList.length; i++) {
            aList[i].style.color = 'blue';
        }
    }
}