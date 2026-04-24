function openPlace(place){
  window.location.href = "place.html?place=" + encodeURIComponent(place);
}

function openBooking(place){
  window.location.href = "booking.html?place=" + encodeURIComponent(place);
}

function openHotelBooking(hotel){
  window.location.href = "booking.html?hotel=" + encodeURIComponent(hotel);
}
