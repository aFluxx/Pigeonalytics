@extends('app')

@section('title')
Beste duif "per wind"
@endsection

@section('content')
<best-pigeon-per-wind :items="{{ json_encode($pigeons) }}" :data="{{ json_encode($requestData) }}">
</best-pigeon-per-wind>
@endsection
