$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: { get_param: 'value' },
    beforeSend: function() {
       $('#loader').show();
    },
    complete: function(){
       $('#loader').hide();
    },
    success: function (data) {
      $('#demo').html('<div id="testing" class="owl-carousel"></div>');
      for (var i=0; i < data.length; ++i) {
        $(".owl-carousel").append('<div class="item">' +
          '# ' + data[i].id +
            '<h3 class="title">' + data[i].title.substring(0,20) + '</h3>' +
            '<p class="body">' + data[i].body + '</p>' +
          '</>'
        );
      }
      var owl = $("#testing");
      owl.owlCarousel({
        items: 4,
        navigation: true,
        pagination: true,
        margin: 20,
        nav:true,
        dots: true,
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:4
          }
        }
      });
    }
  });
});
