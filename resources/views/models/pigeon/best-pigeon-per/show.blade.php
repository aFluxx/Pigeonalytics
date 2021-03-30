@extends('app')

@section('title')
Beste duif per
@endsection

@section('content')
<best-pigeon-per :items="{{ json_encode($pigeons) }}" :data="{{ json_encode($requestData) }}">
</best-pigeon-per>
@endsection
