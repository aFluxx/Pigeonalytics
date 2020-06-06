@extends('app')

@section('title')
Upload results
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Upload results</h2>

<form action="{{ route('result.store.upload') }}" enctype="multipart/form-data" method="POST"
    class="tw-w-full tw-max-w-lg">
    @csrf
    <label for="result_list" class="tw-label">Choose csv:</label>
    <input type="file" id="result_list" name="result_list" accept=".csv" class="tw-input" />

    <label for="result_race" class="tw-label">Choose race:</label>
    <select name="result_race" id="result_race" class="tw-input">
        @foreach($races as $race)
        <option value="{{ $race->id }}">{{ $race->name }}</option>
        @endforeach
    </select>

    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection
