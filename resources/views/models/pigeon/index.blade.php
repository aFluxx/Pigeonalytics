@extends('app')

@section('title')
My Pigeons
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">My pigeons</h2>
<pigeon-list :pigeons="{{ $pigeons }}"></pigeon-list>
@endsection
