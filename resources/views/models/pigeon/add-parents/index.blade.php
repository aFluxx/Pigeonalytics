@extends('app')

@section('title')
Ouders toevoegen
@endsection

@section('content')
<add-parents :pigeons="{{ $pigeons }}"></add-parents>
@endsection
