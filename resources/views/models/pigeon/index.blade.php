@extends('app')

@section('title')
Mijn duiven
@endsection

@section('content')
<pigeon-list :pigeons="{{ $pigeons }}"></pigeon-list>
@endsection
