// $('#botao-atualiza').on('click', function(){
//   $.ajax({
//     url: 'http://mirrorfashion.caelum.com.br/treinamentos',
//     dataType: 'jsonp',
//     success: function(retorno){
//       $.each(retorno.treinamentos, function(){
//         var treinamento = this;
//         $('<li>').text(treinamento.nome).css({'color' : 'green'})
//                                 .appendTo('#lista');
//       });
//     }
//   });
// });

$('#botao-atualiza').on('click', function(){
  $.get('http://mirrorfashion.caelum.com.br/treinamentos', function(retorno){
    $.each(retorno.treinamentos, function(){
      var treinamento = this;
      $('<li>').css('color', 'green').text(treinamento.nome).appendTo('#lista');
    });
  }, 'jsonp');
});
