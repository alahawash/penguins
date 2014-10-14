<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="penguins" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="penguins" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="penguins" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="penguins" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Penguins App</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{ HTML::style('bower_components/html5-boilerplate/css/normalize.css') }}
    {{ HTML::style('bower_components/html5-boilerplate/css/main.css') }}
    {{ HTML::style('bower_components/bootstrap/dist/css/bootstrap.min.css') }}
    {{ HTML::style('app.css') }}

    {{ HTML::script('bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js') }}
    </head>
<body>

    <div class="container" style="width: 580px">
        <br/>
        <div ng-view></div>
    </div>
    {{ HTML::script('bower_components/angular/angular.js') }}
    {{ HTML::script('bower_components/angular-route/angular-route.js') }}
    {{ HTML::script('bower_components/webcam-directive/app/scripts/webcam.js') }}
    {{ HTML::script('bower_components/kineticjs/kinetic.js') }}
    {{ HTML::script('app.js') }}
    {{ HTML::script('pages/menu/menu.js') }}
    {{ HTML::script('pages/capture/capture.js') }}
</body>
</html>
