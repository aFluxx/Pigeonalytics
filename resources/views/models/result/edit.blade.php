@extends('app')

@section('title')
Edit result
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Edit result</h2>

<form action="{{ route('result.update', $result->id) }}" enctype="multipart/form-data" method="POST" class="tw-w-full">
    @if($message ?? '')
    <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
    @endif
    @csrf

    <div class="tw-flex">
        <div class="tw-w-1/2 tw-pr-2">
            <label for="result_race" class="tw-label">Choose race:</label>
            <select name="result_race" id="result_race" class="tw-input">
                @foreach($races as $race)
                <option value="{{ $race->id }}" {{($race->id === $result->race->id) ? 'selected' : '' }}>
                    {{ $race->unloading_time }} -- {{ $race->dropzone->name }}
                    ({{ $race->category_formatted }})</option>
                @endforeach
            </select>

            <label for="result_place_personal" class="tw-label">Place (Personal):</label>
            @if($result->place_personal === 1000000)
            <input type="number" name="result_place_personal" id="result_place_personal" class="tw-input"
                value="{{ old('result_place_personal') }}">
            @else
            <input type="number" name="result_place_personal" id="result_place_personal" class="tw-input"
                value="{{ old('result_place_personal', $result->place_personal) }}">
            @endif

            <label for="result_ringnumber" class="tw-label">Ringnumber:</label>
            <input type="text" name="result_ringnumber" id="result_ringnumber" class="tw-input"
                value="{{ old('result_ringnumber', $result->pigeon->ringnumber) }}" disabled>

            <label for="result_arrival_time" class="tw-label">Arrival time:</label>
            <input type="datetime-local" name="result_arrival_time" id="result_arrival_time" step="1" class="tw-input"
                value="{{ old('result_arrival_time', \Carbon\Carbon::parse($result->arrival_time)->toDateTimeLocalString()) }}">

            <label for="result_nominated" class="tw-label">Nominated (GT):</label>
            <input type="number" name="result_nominated" id="result_nominated" class="tw-input"
                value="{{ old('result_nominated', $result->nominated) }}">
        </div>

        <div class="tw-flex tw-w-1/2 tw-pl-2">
            <div class="tw-w-1/2">
                <label for="result_place_club" class="tw-label">Place (Club):</label>
                @if($result->place_club === 1000000)
                <input type="number" name="result_place_club" id="result_place_club" class="tw-input"
                    value="{{ old('result_place_club') }}">
                @else
                <input type="number" name="result_place_club" id="result_place_club" class="tw-input"
                    value="{{ old('result_place_club', $result->place_club) }}">
                @endif

                <label for="result_place_provincial" class="tw-label">Place (Provincial):</label>
                @if($result->place_provincial === 1000000)
                <input type="number" name="result_place_provincial" id="result_place_provincial" class="tw-input"
                    value="{{ old('result_place_provincial') }}">
                @else
                <input type="number" name="result_place_provincial" id="result_place_provincial" class="tw-input"
                    value="{{ old('result_place_provincial', $result->place_provincial) }}">
                @endif
            </div>

            <div>
                <label for="result_place_zone" class="tw-label">Place (Zone):</label>
                @if($result->place_zone === 1000000)
                <input type="number" name="result_place_zone" id="result_place_zone" class="tw-input"
                    value="{{ old('result_place_zone') }}">
                @else
                <input type="number" name="result_place_zone" id="result_place_zone" class="tw-input"
                    value="{{ old('result_place_zone', $result->place_zone) }}">
                @endif

                <label for="result_place_national" class="tw-label">Place (National):</label>
                @if($result->place_national === 1000000)
                <input type="number" name="result_place_national" id="result_place_national" class="tw-input"
                    value="{{ old('result_place_national') }}">
                @else
                <input type="number" name="result_place_national" id="result_place_national" class="tw-input"
                    value="{{ old('result_place_national', $result->place_national) }}">
                @endif
            </div>
        </div>
    </div>
    <input type="submit" value="Update result" class="tw-button" />
</form>
@endsection
