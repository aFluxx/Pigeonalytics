@extends('app')

@section('title')
Average MPM
@endsection

@section('content')
<average-year-mpm :data="{{ json_encode($data) }}"></average-year-mpm>
@endsection
