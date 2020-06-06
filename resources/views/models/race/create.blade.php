@extends('app')

@section('title')
Create New Race
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Create New Race</h2>
<form action="{{ route('race.store') }}" enctype="multipart/form-data" method="POST" class="tw-w-full tw-max-w-lg">
    @csrf
    <label for="race_dropzone" class="tw-label">Choose dropzone:</label>
    <select name="race_dropzone" id="race_dropzone" class="tw-input">
        @foreach($dropzones as $dropzone)
        <option value="{{ $dropzone->id }}">{{ $dropzone->name }}</option>
        @endforeach
    </select>

    <label for="race_unloading_time" class="tw-label">Unloading time:</label>
    <input type="datetime-local" name="race_unloading_time" id="race_unloading_time" step="1" class="tw-input">

    <label for="race_wind" class="tw-label">Wind</label>
    <select name="race_wind" id="race_wind" class="tw-input">
        <option value="north">North</option>
        <option value="north_east">North East</option>
        <option value="east">East</option>
        <option value="south_east">South East</option>
        <option value="south">South</option>
        <option value="south_west">South West</option>
        <option value="west">West</option>
        <option value="north_west">North West</option>
    </select>

    <label for="race_overcast" class="tw-label">Overcast</label>
    <select name="race_overcast" id="race_overcast" class="tw-input">
        <option value="no_clouds">No clouds</option>
        <option value="very_light_clouds">Very light clouds</option>
        <option value="light_clouds">Light clouds</option>
        <option value="moderate_clouds">Moderate clouds</option>
        <option value="heavy_clouds">Heavy clouds</option>
        <option value="very_heavy_clouds">Very heavy clouds</option>
    </select>

    <label for="race_rainfall" class="tw-label">Rainfall</label>
    <select name="race_rainfall" id="race_rainfall" class="tw-input">
        <option value="no_rain">No rain</option>
        <option value="very_light_rain">Very light rain</option>
        <option value="light_rain">Light rain</option>
        <option value="moderate_rain">Moderate rain</option>
        <option value="heavy_rain">Heavy rain</option>
        <option value="very_heavy_rain">Very heavy rain</option>
        <option value="downpour_hail">Downpour / Hail</option>
    </select>

    <label for="race_year" class="tw-label">Year</label>
    <select name="race_year" id="race_year" class="tw-input">
        <option value="2016">2020</option>
        <option value="2016">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
    </select>

    <label for="race_type" class="tw-label">Type</label>
    <select name="race_type" id="race_type" class="tw-input">
        <option value="training">Training</option>
        <option value="competition">Competition</option>
    </select>

    <label for="race_amount_pigeons" class="tw-label">Amount of pigeons</label>
    <input type="number" id="race_amount_pigeons" name="race_amount_pigeons" class="tw-input" />

    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection
