@extends('app')

@section('title')
Create New Race
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Create New Race</h2>
<form action="{{ route('race.store') }}" enctype="multipart/form-data" method="POST" class="tw-w-full tw-max-w-lg">
    @if($message ?? '')
    <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
    @endif
    @csrf
    <div class="tw-flex">
        <div class="tw-w-1/2 tw-pr-2">
            <label for="race_dropzone" class="tw-label">Choose dropzone:</label>
            <select name="race_dropzone" id="race_dropzone" class="tw-input">
                @foreach($dropzones as $dropzone)
                <option value="{{ $dropzone->id }}">{{ $dropzone->name }}</option>
                @endforeach
            </select>

            <label for="race_unloading_time" class="tw-label">Unloading time:</label>
            <input type="datetime-local" name="race_unloading_time" id="race_unloading_time" step="1" class="tw-input">

            <label for="race_category" class="tw-label">Category</label>
            <select name="race_category" id="race_category" class="tw-input">
                <option value="youngster">Youngsters</option>
                <option value="yearlings">Yearlings</option>
                <option value="old_birds">Old birds</option>
                <option value="mix">Mix</option>
            </select>

            <label for="race_type" class="tw-label">Type</label>
            <select name="race_type" id="race_type" class="tw-input">
                <option value="training">Training</option>
                <option value="competition">Competition</option>
            </select>

            <label for="race_wind" class="tw-label">Wind</label>
            <select name="race_wind" id="race_wind" class="tw-input">
                <option value="na">Not applicable</option>
                <option value="north">North</option>
                <option value="north_east">North East</option>
                <option value="east">East</option>
                <option value="south_east">South East</option>
                <option value="south">South</option>
                <option value="south_west">South West</option>
                <option value="west">West</option>
                <option value="north_west">North West</option>
            </select>

            <label for="race_wind_strength" class="tw-label">Wind Strength</label>
            <select name="race_wind_strength" id="race_wind_strength" class="tw-input">
                <option value="na">Not applicable</option>
                <option value="windless">Windless</option>
                <option value="light_breeze">Light breeze (licht)</option>
                <option value="gentle_breeze">Gentle breeze (matig)</option>
                <option value="strong_wind">Strong wind</option>
                <option value="storm_wind">Storm wind</option>
            </select>

            <label for="race_overcast" class="tw-label">Overcast</label>
            <select name="race_overcast" id="race_overcast" class="tw-input">
                <option value="na">Not applicable</option>
                <option value="no_clouds">No clouds</option>
                <option value="very_light_clouds">Very light clouds</option>
                <option value="light_clouds">Light clouds</option>
                <option value="moderate_clouds">Moderate clouds</option>
                <option value="heavy_clouds">Heavy clouds</option>
                <option value="very_heavy_clouds">Very heavy clouds</option>
            </select>

            <label for="race_rainfall" class="tw-label">Rainfall</label>
            <select name="race_rainfall" id="race_rainfall" class="tw-input">
                <option value="na">Not applicable</option>
                <option value="no_rain">No rain</option>
                <option value="very_light_rain">Very light rain</option>
                <option value="light_rain">Light rain</option>
                <option value="moderate_rain">Moderate rain</option>
                <option value="heavy_rain">Heavy rain</option>
                <option value="very_heavy_rain">Very heavy rain</option>
                <option value="downpour_hail">Downpour / Hail</option>
            </select>
        </div>

        <div>
            <div id="fon_races" class="tw-hidden">
                <label for="race_amount_pigeons_personal" class="tw-label">Amount of pigeons (Personal)</label>
                <input type="number" id="race_amount_pigeons_personal" name="race_amount_pigeons_personal"
                    class="tw-input" />

                <label for="race_amount_pigeons_club" class="tw-label">Amount of pigeons (Club):</label>
                <input type="number" id="race_amount_pigeons_club" name="race_amount_pigeons_club" class="tw-input" />

                <label for="race_amount_pigeons_provincial" class="tw-label">Amount of pigeons (Provincial):</label>
                <input type="number" id="race_amount_pigeons_provincial" name="race_amount_pigeons_provincial"
                    class="tw-input" />

                <label for="race_amount_pigeons_zone" class="tw-label">Amount of pigeons (Zone):</label>
                <input type="number" id="race_amount_pigeons_zone" name="race_amount_pigeons_zone" class="tw-input" />

                <label for="race_amount_pigeons_national" class="tw-label">Amount of pigeons (National):</label>
                <input type="number" id="race_amount_pigeons_national" name="race_amount_pigeons_national"
                    class="tw-input" />
            </div>

            <div id="hfo_races" class="tw-hidden">
                <label for="race_amount_pigeons_regio" class="tw-label">Amount of pigeons (Regio):</label>
                <input type="number" id="race_amount_pigeons_regio" name="race_amount_pigeons_regio" class="tw-input" />

                <label for="race_amount_pigeons_overkoepeling" class="tw-label">Amount of pigeons
                    (Overkoepeling):</label>
                <input type="number" id="race_amount_pigeons_overkoepeling" name="race_amount_pigeons_overkoepeling"
                    class="tw-input" />
            </div>
        </div>
    </div>

    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection

@push('scripts-after-main')
<script>
    var selectedDropzone = $('#race_dropzone');

    var hfo = ['vit', 'hfo'];
    var fon = ['kle', 'fon', 'gfo'];

    selectedDropzone.on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;

        $.ajax({
            url: '/api/dropzone/' + valueSelected + '/get-discipline',
            context: document.body
        }).done(function(res) {
            console.log(res);
            console.log(hfo.includes(res));
            console.log(fon.includes(res));
            if(hfo.includes(res)) {
                console.log('h');
                $('#fon_races').removeClass('tw-block');
                $('#fon_races').addClass('tw-hidden');

                $('#hfo_races').removeClass('tw-hidden');
                $('#hfo_races').addClass('tw-block');
            } else if (fon.includes(res)) {
                console.log('t');
                $('#hfo_races').removeClass('tw-block');
                $('#hfo_races').addClass('tw-hidden');

                $('#fon_races').removeClass('tw-hidden');
                $('#fon_races').addClass('tw-block');
            }
        });
    });
</script>
@endpush
