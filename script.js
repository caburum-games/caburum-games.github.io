new TypeIt('#typeit', {
    speed: 50,
    waitUntilVisible: true,
    cursorChar : '|'
  })
  .type('Welcome to Caburum Games!')
  .pause(500)
  .break()
  .break()
  .type('<a href="/darkdarkhouse">A Dark, Dark House</a>')
  .pause(50)
  .break()
  .type('<a href="https://caburum.ga/Chrome-Dino-Runner">Chrome Dino Runner 2</a>')
  .pause(50)
  .break()
  .type('<a href="https://caburum.ga/Depression-Game">Depression Game</a>')
  .pause(50)
  .break()
  /*.type('<a href="http://orteil.dashnet.org/igm/?g=www.caburum.ga/Computer-Clicker/game.txt">Computer Clicker Beta</a>')
  .pause(50)
  .break()*/
  .type('<a href="https://dos.caburum.ga">MS-DOS Games</a>')
  .pause(500)
  .break()
  .type('<a href="https://caburum.ga/html-game-tests">HTML Game Tests</a>')
  .pause(500)
  .break()
  .type('<a href="https://hexgl2.caburum.ga">HexGL2</a>')
  .pause(500)
  .break()
  .type('<a href="https://caburum.ga/cookieclicker">Cookie Clicker</a>')
//  .pause(500)
//  .break()
//  .break()
//  .type('<a href="https://calum.gq">Main Site</a>')
  .exec(async () => {
    $(".skip").remove();
  })
  .go();

$(document).ready(function() {
  $(".skip").on("click", function(){
      $("#typeit-container").remove();
      $("#text").removeClass("text");
      $(".skip").remove();
  }); 
});
