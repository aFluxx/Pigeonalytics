@extends('app')

@section('title')
Asduiven
@endsection

@section('content')
<ace-pigeons :items="{{ json_encode($acePigeons) }}" :data="{{ json_encode($requestData) }}"></ace-pigeons>
@endsection
