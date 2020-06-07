@extends('app')

@section('title')
All dropzones
@endsection

@section('content')
<dropzone-list :dropzones="{{ $dropzones }}"></dropzone-list>
@endsection
