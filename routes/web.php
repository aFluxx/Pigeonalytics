<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'RaceController@index');

Route::get('/dropzone', 'DropzoneController@index')->name('dropzone.list');
Route::get('/dropzone/create', 'DropzoneController@create')->name('dropzone.create');
Route::post('/dropzone/store', 'DropzoneController@store')->name('dropzone.store');
Route::get('/dropzone/{dropzone}/edit', 'DropzoneController@edit')->name('dropzone.edit');
Route::post('/dropzone/{dropzone}/update', 'DropzoneController@update')->name('dropzone.update');

Route::get('/pigeon', 'PigeonController@index')->name('pigeon.list');
Route::get('/pigeon/{pigeon}', 'PigeonController@show')->name('pigeon.show');

Route::get('/race', 'RaceController@index')->name('race.list');
Route::get('/race/create', 'RaceController@create')->name('race.create');
Route::post('/race/store', 'RaceController@store')->name('race.store');
Route::get('/race/{race}', 'RaceController@show')->name('race.show');
Route::get('/race/{race}/edit', 'RaceController@edit')->name('race.edit');
Route::post('/race/{race}/update', 'RaceController@update')->name('race.update')->middleware('web');
Route::get('/race/{race}/close', 'RaceController@closeRace')->name('race.close');

Route::get('/result', 'ResultController@index')->name('result.list');
Route::get('/result/vit', 'ResultController@indexVitesse')->name('result.vitesse');
Route::get('/result/hfo', 'ResultController@indexHalveFond')->name('result.halvefond');
Route::get('/result/kle', 'ResultController@indexKleineFond')->name('result.kleinefond');
Route::get('/result/fon', 'ResultController@indexFond')->name('result.fond');
Route::get('/result/gro', 'ResultController@indexGroteFond')->name('result.grotefond');
Route::get('/result/manual/create', 'ResultManualController@create')->name('result.create.manual');
Route::post('/result/manual/store', 'ResultManualController@store')->name('result.store.manual');
Route::get('/result/upload/create', 'ResultUploadController@create')->name('result.create.upload');
Route::post('/result/upload/store', 'ResultUploadController@store')->name('result.store.upload');
Route::get('/result/kbdb/create', 'ResultKbdbController@create')->name('result.create.kbdb');
Route::post('/result/kbdb/store', 'ResultKbdbController@store')->name('result.store.kbdb');
Route::get('/result/{result}/edit', 'ResultController@edit')->name('result.edit');
Route::post('/result/{result}/update', 'ResultController@update')->name('result.update');

Route::get('/rapport/average-year-mpm', 'AverageYearMpmController@index')->name('rapport.average-year-mpm');

Route::get('/api/dropzone/{dropzone}/get-discipline', 'DropzoneApiController@getDiscipline');

Auth::routes(['register' => false]);

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/import/compu', 'ImportController@index')->name('import.compu');
Route::get('/import/compu/handle', 'ImportController@handle')->name('import.compu.handle');


Route::get('/best-breeders', 'BestBreedersController@index')->name('best-breeders.index');
Route::get('/best-breeders/show', 'BestBreedersController@show')->name('best-breeders.show');

Route::get('/ace-pigeons', 'AcePigeonController@index')->name('ace-pigeons.index');
Route::get('/ace-pigeons/show', 'AcePigeonController@show')->name('ace-pigeons.show');

Route::get('/best-pigeon-per', 'BestPigeonPerController@index')->name('best-pigeon-per.index');
Route::get('/best-pigeon-per/show', 'BestPigeonPerController@show')->name('best-pigeon-per.show');

Route::get('/add-parents', 'AddParentsController@index')->name('add-parents.index');
Route::get('/add-parents/pigeon/{pigeon}', 'AddParentsController@edit')->name('add-parents.edit');
Route::post('/add-parents/pigeon/{pigeon}', 'AddParentsController@store')->name('add-parents.store');

Route::get('/best-wind', 'BestWindController@index')->name('best-wind.index');
