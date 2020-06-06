@extends('app')

@section('title')
Manually create a result
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Manually create a result</h2>

<form action="{{ route('result.store.manual') }}" enctype="multipart/form-data" method="POST"
    class="tw-w-full tw-max-w-lg">
    @csrf
    <label for="result_race" class="tw-label">Choose race:</label>
    <select name="result_race" id="result_race" class="tw-input">
        @foreach($races as $race)
        <option value="{{ $race->id }}">{{ $race->dropzone->name }} {{ $race->unloading_time }}</option>
        @endforeach
    </select>

    <label for="result_ringnumber" class="tw-label">Ringnumber:</label>
    <input type="text" name="result_ringnumber" id="result_ringnumber" class="tw-input" placeholder="BE-18-4441444">

    <label for="result_arrival_time" class="tw-label">Arrival time:</label>
    <input type="datetime-local" name="result_arrival_time" id="result_arrival_time" step="1" class="tw-input">

    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection
