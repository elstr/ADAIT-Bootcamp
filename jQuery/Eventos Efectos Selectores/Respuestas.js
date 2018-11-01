// // Eventos
// // Cambiar dinámicamente el css
$("p").on({
    mouseenter: function() {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function() {
      $(this).css("background-color", "lightblue");
    },
    click: function() {
      $(this).css("background-color", "yellow");
    }
  });
  
  // // Ocultar lentamente dos párrafos
  $(document).ready(function() {
    $("button").click(function() {
      $("p").hide(1000);
    });
  });
  <body>
    <button>Hide</button>
    <p>This is a paragraph with little content.</p>
    <p>This is another small paragraph.</p>
  </body>;
  
  // // Animar height de una caja de 80x80
  <div style="background:#98bf21;height:80px;width:80px;position:absolute;" />;
  $(document).ready(function() {
    $("div").animate({ height: "500px" });
  });
  
  // // Animar hasta 500x500 y opacity 0.4
  <div style="background:#98bf21;height:80px;width:80px;position:absolute;" />;
  $(document).ready(function() {
    $("div").animate({
      opacity: "0.4",
      height: "500px",
      width: "500px"
    });
  });
  
  // // Animar fontsize
  <div style="background:#98bf21;height:200px;width:600px;position:absolute;" />;
  $(document).ready(function() {
    $("div").animate({ fontSize: "100px" }, "slow");
  });
  
  
  // // Frenar el slideDown de un panel 
  
  $(document).ready(function(){
      $("#flip").click(function(){
          $("#panel").slideDown(5000);
      });
      $("#stop").click(function(){
          $("#panel").stop();
      });
  });
   
  <style> 
  #panel, #flip {
      padding: 5px;
      font-size: 18px;
      text-align: center;
      background-color: #555;
      color: white;
      border: solid 1px #666;
      border-radius: 3px;
  }
  
  #panel {
      padding: 50px;
      display: none;
  }
  </style>
   
  <button id="stop">Stop sliding</button>
  
  <div id="flip">Click to slide down panel</div>
  <div id="panel">Hello world!</div>
  