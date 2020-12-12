@extends('app')

@section('title')
Beste kwekers
@endsection

@section('content')
<best-breeders :items="{{ json_encode($weight) }}" :data="{{ json_encode($requestData) }}"></best-breeders>
@endsection
