@extends('app')

@section('title')
Average MPM
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Average MPM</h2>

<average-year-mpm :data="{{ json_encode($data) }}"></average-year-mpm>
@endsection
