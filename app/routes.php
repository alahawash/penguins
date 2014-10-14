<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function () {
    return View::make('main');
});

Route::post('/save', function () {
    $data = Input::get('data');
    $email = Input::get('email');

    $filteredData = substr($data, strpos($data, ",") + 1);

    //Decode the string
    $unencodedData = base64_decode($filteredData);

    $filename = md5($email) . '.png';
    $pathToFile = 'app/assets/'. $filename;
    //Save the image
    file_put_contents($pathToFile, $unencodedData);

    Mail::send('emails.penguins', [], function($message) use ($email, $pathToFile)
    {
        $message->to($email)->subject('Welcome to the Beach Mall! Enjoy the new Penguins of Madagascar in 3D coming soon in theatres');
        $message->attach($pathToFile);
    });
});
