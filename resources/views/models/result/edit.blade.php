@extends('app')

@section('title')
Resultaat bewerken
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Resultaat bewerken</h2>

<form action="{{ route('result.update', $result->id) }}" enctype="multipart/form-data" method="POST" class="tw-w-full">
    @if($message ?? '')
    <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
    @endif
    @csrf

    <div class="tw-flex">
        <div class="tw-w-1/2 tw-pr-2">
            <label for="result_race" class="tw-label">Kies race:</label>
            <select name="result_race" id="result_race" class="tw-input">
                @foreach($races as $race)
                <option value="{{ $race->id }}" {{($race->id === $result->race->id) ? 'selected' : '' }}>
                    {{ $race->unloading_time }} -- {{ $race->dropzone->name }}
                    ({{ $race->category_formatted }})</option>
                @endforeach
            </select>

            <label for="result_place_personal" class="tw-label">Plaats (Persoonlijk):</label>
            @if($result->place_personal === 1000000)
            <input type="number" name="result_place_personal" id="result_place_personal" class="tw-input"
                value="{{ old('result_place_personal') }}">
            @else
            <input type="number" name="result_place_personal" id="result_place_personal" class="tw-input"
                value="{{ old('result_place_personal', $result->place_personal) }}">
            @endif

            <label for="result_ringnumber" class="tw-label">Ringnummer:</label>
            <input type="text" name="result_ringnumber" id="result_ringnumber" class="tw-input"
                value="{{ old('result_ringnumber', $result->pigeon->ringnumber) }}" disabled>

            <label for="result_arrival_time" class="tw-label">Aankomstuur:</label>
            <input type="datetime-local" name="result_arrival_time" id="result_arrival_time" step="1" class="tw-input"
                value="{{ old('result_arrival_time', \Carbon\Carbon::parse($result->arrival_time)->toDateTimeLocalString()) }}">

            <label for="result_nominated" class="tw-label">Getekende:</label>
            <input type="number" name="result_nominated" id="result_nominated" class="tw-input"
                value="{{ old('result_nominated', $result->nominated) }}">
        </div>

        @if(in_array($result->race->dropzone->discipline, ['gfo', 'fon', 'kle']))
        <div class="tw-flex tw-w-1/2 tw-pl-2">
            <div class="tw-w-1/2">
                <label for="result_place_club" class="tw-label">Plaats (Club):</label>
                @if($result->place_club === 1000000)
                <input type="number" name="result_place_club" id="result_place_club" class="tw-input"
                    value="{{ old('result_place_club') }}">
                @else
                <input type="number" name="result_place_club" id="result_place_club" class="tw-input"
                    value="{{ old('result_place_club', $result->place_club) }}">
                @endif

                <label for="result_place_provincial" class="tw-label">Plaats (Provinciaal):</label>
                @if($result->place_provincial === 1000000)
                <input type="number" name="result_place_provincial" id="result_place_provincial" class="tw-input"
                    value="{{ old('result_place_provincial') }}">
                @else
                <input type="number" name="result_place_provincial" id="result_place_provincial" class="tw-input"
                    value="{{ old('result_place_provincial', $result->place_provincial) }}">
                @endif
            </div>

            <div>
                <label for="result_place_zone" class="tw-label">Plaats (Zone):</label>
                @if($result->place_zone === 1000000)
                <input type="number" name="result_place_zone" id="result_place_zone" class="tw-input"
                    value="{{ old('result_place_zone') }}">
                @else
                <input type="number" name="result_place_zone" id="result_place_zone" class="tw-input"
                    value="{{ old('result_place_zone', $result->place_zone) }}">
                @endif

                <label for="result_place_national" class="tw-label">Plaats (Nationaal):</label>
                @if($result->place_national === 1000000)
                <input type="number" name="result_place_national" id="result_place_national" class="tw-input"
                    value="{{ old('result_place_national') }}">
                @else
                <input type="number" name="result_place_national" id="result_place_national" class="tw-input"
                    value="{{ old('result_place_national', $result->place_national) }}">
                @endif
            </div>
        </div>
        @endif

        @if(in_array($result->race->dropzone->discipline, ['vit', 'hfo']))
        <div class="tw-flex tw-w-1/2 tw-pl-2">
            <div class="tw-w-1/2">
                <label for="result_place_regio" class="tw-label">Plaats (Regio):</label>
                @if($result->place_regio === 1000000)
                <input type="number" name="result_place_regio" id="result_place_regio" class="tw-input"
                    value="{{ old('result_place_regio') }}">
                @else
                <input type="number" name="result_place_regio" id="result_place_regio" class="tw-input"
                    value="{{ old('result_place_regio', $result->place_regio) }}">
                @endif
            </div>

            <div>
                <label for="result_place_overkoepeling" class="tw-label">Plaats (Overkoepeling):</label>
                @if($result->place_overkoepeling === 1000000)
                <input type="number" name="result_place_overkoepeling" id="result_place_overkoepeling" class="tw-input"
                    value="{{ old('result_place_overkoepeling') }}">
                @else
                <input type="number" name="result_place_overkoepeling" id="result_place_overkoepeling" class="tw-input"
                    value="{{ old('result_place_overkoepeling', $result->place_overkoepeling) }}">
                @endif
            </div>
        </div>
        @endif

    </div>
    <input type="submit" value="Update result" class="tw-button" />
</form>
@endsection
