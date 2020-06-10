@extends('app')

@section('title')
Edit {{ $dropzone->name }}
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Edit {{ $dropzone->name }}</h2>
<form action="{{ route('dropzone.update', $dropzone->id) }}" enctype="multipart/form-data" method="POST"
    class="tw-w-full tw-max-w-lg">
    @if($message ?? '')
    <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
    @endif
    @csrf
    <label for="dropzone_name" class="tw-label">Name</label>
    <input type="text" id="dropzone_name" name="dropzone_name" class="tw-input"
        value="{{ old('dropzone_name', $dropzone->name) }}" />

    <label for="dropzone_distance" class="tw-label">Distance</label>
    <input type="number" id="dropzone_distance" name="dropzone_distance" class="tw-input"
        value="{{ old('dropzone_distance', $dropzone->distance) }}" />

    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection
