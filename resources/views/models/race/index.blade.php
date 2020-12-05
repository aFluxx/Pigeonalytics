@extends('app')

@section('title')
Mijn races
@endsection

@section('content')
<race-list :races="{{ $races }}"></race-list>
@endsection
