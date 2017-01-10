
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="http://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
<script class="localJSAssets" src="app/assets/js/tether.js"></script>
<script src="https://unpkg.com/huebee@1/dist/huebee.pkgd.min.js"></script>
<script class="localJSAssets" src="app/assets/js/paralex.js"></script>
<script class="localJSAssets" src="app/assets/js/bootstrap.min.js"></script>
<script class="localJSAssets" src="Gulpfile.js"></script>
 <script class="localJSAssets" src="app/assets/js/action.js"></script>
     <script>
      var directoryName = 'project/'.toLowerCase();
      var baseUrl = window.location.href.slice(0, window.location.href.indexOf(directoryName)) + directoryName; 
         window.onload = function() {
        var links = document.getElementsByClassName('localLinks'); 
        var scripts = document.getElementsByClassName('localJSAssets');
        var images = document.getElementsByTagName('img');
        var allScripts = [];
        
        for (var i = 0; i < images.length; i++) {
          images[i].src = `${baseUrl}${images[i].getAttribute('src')}`;
        }
        
        for (var i = 0; i < links.length; i++) {
          links[i].href = baseUrl + links[i].getAttribute('href');
        }
        
        for (var i = 0; i < scripts.length; i++) {
          allScripts.push(scripts[i]);
        }
        
        for (var i = 0; i < allScripts.length; i++) {
       
          var script = document.createElement('script'); 
          script.src = baseUrl + allScripts[i].getAttribute('src');
          // script.classList.add('localJSAssets')
          document.getElementsByTagName('body')[0].appendChild(script);
          var paras = document.getElementsByClassName('localJSAssets');
          while(paras[0]) {
              paras[0].parentNode.removeChild(paras[0]);
          }
        }
      }
  </script>