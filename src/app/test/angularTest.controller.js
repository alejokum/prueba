(function() {
  'use strict';

  angular
    .module('angularTest')
    .controller('TestController', TestController);

    TestController.$inject = ['dataService','$ocLazyLoad', '$splash'];


    // en el caso de usar el scope TestController.$inject = ["$scope"]; para no perder la referencia al scope al momento
    // de minificar el archivo

      function TestController(dataService,$ocLazyLoad, $splash) {


        var url= "http://www.enobasistemas.com/cmstesting/img/banners/";
        var urlnoticias="http://www.enobasistemas.com/cmstesting/img/blogs/"
        var urlmarcas="http://www.enobasistemas.com/cmstesting/img/marcas/";
        var vm=this;
        var arrayurl=[];
        // carga de estilo para los botones
        $ocLazyLoad.load (['app/button-isi/css/isi.css','app/button-isi/css/normalize.css','app/button-isi/css/vicons-font.css']);
        // carga de dependencias para utilizar el el menu de navegacion
        $ocLazyLoad.load (['app/navigation/css/reset.css','app/navigation/css/style.css','app/navigation/js/modernizr.js','app/navigation/js/jquery.mobile.custom.min.js',
        'app/navigation/js/main.js']);
        //carga del archivo splash.css para las modales
        $ocLazyLoad.load (['app/splash/splash.css']);
        // carga de modal-morp
        $ocLazyLoad.load (['bower_components/ngMorph/dist/angular-morph.min.js','app/morp/styles/morp.css']);
        // carga de dependencias para el blurry effect
        $ocLazyLoad.load (['app/blurry/blurry.load.js','app/blurry/blurry.load.css']);
        // carga de dependencias para utilizar el slick carousel
        $ocLazyLoad.load (['bower_components/slick-carousel/slick/slick.js','bower_components/angular-slick/dist/slick.js',
          'bower_components/slick-carousel/slick/slick.css','bower_components/slick-carousel/slick/slick-theme.css']);

        this.openSplash = function () {
          $splash.open({
            title: 'Hi there!',
            message: "This sure is a fine modal, isn't it?"
          });
        };


        dataService
          .getAll()
          .then(function(slider) {
            console.dir(slider[1].titulo);
            console.dir(slider);
            for (var i = 0; i < slider.length; i++) {
            var urlbanner= url + slider[i].banner;
            arrayurl.push(urlbanner);
            }
            console.dir(arrayurl);
            // console.dir(data);
            vm.banners= arrayurl;

          }, function(error){
            console.log("Se ha producido un error");
          });

          // Noticias

          dataService
            .noticias()
            .then(function(noticia) {
              for (var i = 0; i < noticia.length; i++) {
              noticia[i].Blog.miniatura= urlnoticias + noticia[i].Blog.miniatura;
              }
              console.dir(noticia);
              vm.noticias=noticia;
            }, function(error){
              console.log("Se ha producido un error");
            });

            dataService
              .marcas()
              .then(function(marcas) {

                for (var i = 0; i < marcas.length; i++) {
                marcas[i].Brand.miniatura= urlmarcas + marcas[i].Brand.miniatura;
                }
                console.dir(marcas);
                vm.marcas=marcas
                // console.dir(marcas[1].Brand.miniatura);
              }, function(error){
                console.log("Se ha producido un error");
              });


        //   vm.gotoElement = function (eID){
        //     console.log('entro aqui');
        //     $location('conocenos');
        //    topService.scrollTo(eID);
         //
        //  };

      }
})();
