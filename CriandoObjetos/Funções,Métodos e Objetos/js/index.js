(function () {

    var hotel = {
        name: 'park',
        cost: 240,
        discount: 15,
        calculateDiscount: function () {
            var offerRate = this.cost * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    var hotelName, roomsCost, specialOffer;

    hotelName = document.getElementById('hotelName');
    

    roomsCost = document.getElementById('roomRate');
   

    specialOffer = document.getElementById('specialRate');
    

    
    hotelName.textContent = hotel.name;
    roomsCost.textContent = '$' + hotel.cost.toFixed(2);
    specialOffer.textContent = '$' + hotel.calculateDiscount();


    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today){

        var weekFromToday, day, date, month, year, dayNames, monthNames;
        
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday'];

        monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br/> (' + date + ' ' + month + ' ' + year + ')';

        return expiryMsg;


    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);



}());



