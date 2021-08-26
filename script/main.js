function getImage (callback) {
  $('#cat-gallery').html('');
  $.ajax({
    url: 'https://api.thecatapi.com/v1/images/search',
    type: 'get',
    dataType: 'json',
    data: {
      'api_key': 'eb0bafae-2e9e-459b-9d99-2cdd21793d3f',
    },
    success: function (result) {
      result = result[0].url;
      
      callback(result);
    }
  });
}  

const appendElement = (result) => {
  $('#cat-gallery').append(`
    <div class="col-md-3">
      <div class="card" style="width: 18rem;">
        <img src="${result}" class="card-img-top" alt="cat-image">
      </div>
    </div>
  `);
}

const init = () => {
  for (let i = 1; i <= 20; i++) {
    getImage(appendElement);
  }
}

$('#search-again').on('click', function () {
  init();
});

$( document ).ready(function() {
  init();
});

