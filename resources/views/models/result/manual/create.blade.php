@extends('app')

@section('title')
Manually create a result
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Manually create a result</h2>

<form action="{{ route('result.store.manual') }}" enctype="multipart/form-data" method="POST"
    class="tw-w-full tw-max-w-lg">
    @if($message ?? '')
    <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
    @endif
    @csrf
    <label for="result_race" class="tw-label">Choose race:</label>
    <select name="result_race" id="result_race" class="tw-input">
        @foreach($races as $race)
        <option value="{{ $race->id }}">{{ $race->unloading_time }} -- {{ $race->dropzone->name }}
            ({{ $race->category_formatted }})
        </option>
        @endforeach
    </select>

    <label for="result_place_personal" class="tw-label">Place (Personal):</label>
    <input type="number" name="result_place_personal" id="result_place_personal" class="tw-input">

    <label for="result_ringnumber" class="tw-label">Ringnumber:</label>
    <input type="text" name="result_ringnumber" id="result_ringnumber" class="tw-input" placeholder="BE-18-4441444">

    <label for="result_arrival_time" class="tw-label">Arrival time:</label>
    <input type="datetime-local" name="result_arrival_time" id="result_arrival_time" step="1" class="tw-input">

    {{-- <label for="result_mpm" class="tw-label">mpm:</label>
    <input type="number" name="result_mpm" id="result_mpm" class="tw-input" step="0.001"> --}}

    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection
