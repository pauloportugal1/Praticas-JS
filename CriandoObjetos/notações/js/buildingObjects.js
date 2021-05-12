
// LITERAL NOTATION

/*
var hotel = {
    name: 'Bourbon',
    rooms: 200,
    booked: 160,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
}

hotel.rooms = 300;
hotel.name = 'Ibis';

var elHotelName = document.querySelector('#hotelName');
elHotelName.textContent = hotel.name;

var elHotelAvailability = document.querySelector('#rooms');
elHotelAvailability.textContent = hotel.checkAvailability();
*/


// CONSTRUCTOR NOTATION

/*

var hotel = new Object();

hotel.name = "Raffain Palace";
hotel.rooms = 180;
hotel.booked = 96;
hotel.checkAvailability = function(){
    return this.rooms - this.booked;
};

hotel.name = 'Mabu';
hotel.rooms = 50;
hotel.booked = 46;

var elName = document.querySelector('#hotelName');
elName.textContent = hotel.name;

var elAvailability = document.querySelector('#rooms');
elAvailability.textContent = hotel.checkAvailability();
*/

// BUILDING MORE THAN ONE OBJECT

function Hotel(name, rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}

var mabuHotel = new Hotel('Mabu',200, 178);
var raffainHotel = new Hotel('Raffain', 300, 34);

/*
var elName = document.querySelector('#hotelName');
elName.textContent = mabuHotel.name;

var elAvailability = document.querySelector('#rooms');
elAvailability.textContent = mabuHotel.checkAvailability();

*/

var elName = document.querySelector('#hotelName');
elName.textContent = raffainHotel.name;

var elAvailability = document.querySelector('#rooms');
elAvailability.textContent = raffainHotel.checkAvailability();

