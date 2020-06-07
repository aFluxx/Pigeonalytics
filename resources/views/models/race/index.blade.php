@extends('app')

@section('title')
My Races
@endsection

@section('content')
<race-list :races="{{ $races }}"></race-list>
@endsection
