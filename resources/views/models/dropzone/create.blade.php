@extends('app')

@section('title')
Create new Dropzone
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Create new Dropzone</h2>
<form action="{{ route('dropzone.store') }}" enctype="multipart/form-data" method="POST" class="tw-w-full tw-max-w-lg">
    @if($message ?? '')
    <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
    @endif
    @csrf
    <label for="dropzone_name" class="tw-label">Name</label>
    <input type="text" id="dropzone_name" name="dropzone_name" class="tw-input" />

    <label for="dropzone_distance" class="tw-label">Distance</label>
    <input type="number" id="dropzone_distance" name="dropzone_distance" class="tw-input" />

    <label for="dropzone_discipline" class="tw-label">Discipline</label>
    <select name="dropzone_discipline" id="dropzone_discipline" class="tw-input">
        <option value="vit">Vitesse</option>
        <option value="hfo">Halve fond</option>
        <option value="kle">Kleine fond</option>
        <option value="fon">Fond</option>
        <option value="gfo">Grote fond</option>
    </select>

    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection
