@extends('app')

@section('title')
Edit race
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Edit race</h2>
<form action="{{ route('race.update', $race->id) }}" enctype="multipart/form-data" method="POST"
    class="tw-w-full tw-max-w-lg">
    @if($message ?? '')
    <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
    @endif
    @csrf
    <div class="tw-flex">
        <div class="tw-w-1/2 tw-pr-2">
            <label for="race_dropzone" class="tw-label">Choose dropzone:</label>
            <select name="race_dropzone" id="race_dropzone" class="tw-input">
                @foreach($dropzones as $dropzone)
                <option value="{{ $dropzone->id }}" {{($race->dropzone->id === $dropzone->id) ? 'selected' : ''}}>
                    {{ $dropzone->name }}</option>
                @endforeach
            </select>

            <label for="race_unloading_time" class="tw-label">Unloading time:</label>
            <input type="datetime-local" name="race_unloading_time" id="race_unloading_time" step="1" class="tw-input"
                value="{{ old('race_unloading_time', \Carbon\Carbon::parse($race->unloading_time)->toDateTimeLocalString()) }}">

            <label for="race_category" class="tw-label">Category</label>
            <select name="race_category" id="race_category" class="tw-input">
                <option value="youngster" {{($race->category ==='youngster') ? 'selected' : ''}}>Youngsters</option>
                <option value="yearlings" {{($race->category ==='yearlings') ? 'selected' : ''}}>Yearlings</option>
                <option value="old_birds" {{($race->category ==='old_birds') ? 'selected' : ''}}>Old birds</option>
                <option value="mix_yearling_old" {{($race->category ==='mix_yearling_old') ? 'selected' : ''}}>Mix
                    (yearling/old)</option>
                <option value="mix" {{($race->category ==='mix') ? 'selected' : ''}}>Mix</option>
            </select>

            <label for="race_type" class="tw-label">Type</label>
            <select name="race_type" id="race_type" class="tw-input">
                <option value="training" {{($race->type ==='training') ? 'selected' : ''}}>Training</option>
                <option value="competition" {{($race->type ==='competition') ? 'selected' : ''}}>Competition</option>
            </select>

            <label for="race_wind" class="tw-label">Wind</label>
            <select name="race_wind" id="race_wind" class="tw-input">
                <option value="na" {{($race->wind === 'na') ? 'selected' : ''}}>Not applicable</option>
                <option value="north" {{($race->wind === 'north') ? 'selected' : ''}}>North</option>
                <option value="north_east" {{($race->wind === 'north_east') ? 'selected' : ''}}>North East</option>
                <option value="east" {{($race->wind === 'east') ? 'selected' : ''}}>East</option>
                <option value="south_east" {{($race->wind === 'south_east') ? 'selected' : ''}}>South East</option>
                <option value="south" {{($race->wind === 'south') ? 'selected' : ''}}>South</option>
                <option value="south_west" {{($race->wind === 'south_west') ? 'selected' : ''}}>South West</option>
                <option value="west" {{($race->wind === 'west') ? 'selected' : ''}}>West</option>
                <option value="north_west" {{($race->wind === 'north_west') ? 'selected' : ''}}>North West</option>
            </select>

            <label for="race_wind_strength" class="tw-label">Wind Strength</label>
            <select name="race_wind_strength" id="race_wind_strength" class="tw-input">
                <option value="na" {{($race->wind_strength ==='na') ? 'selected' : ''}}>Not applicable</option>
                <option value="windless" {{($race->wind_strength ==='windless') ? 'selected' : ''}}>Windless</option>
                <option value="light_breeze" {{($race->wind_strength ==='light_breeze') ? 'selected' : ''}}>Light breeze
                    (licht)
                </option>
                <option value="gentle_breeze" {{($race->wind_strength ==='gentle_breeze') ? 'selected' : ''}}>Gentle
                    breeze
                    (matig)</option>
                <option value="strong_wind" {{($race->wind_strength ==='strong_wind') ? 'selected' : ''}}>Strong wind
                </option>
                <option value="storm_wind" {{($race->wind_strength ==='storm_wind') ? 'selected' : ''}}>Storm wind
                </option>
            </select>

            <label for="race_overcast" class="tw-label">Overcast</label>
            <select name="race_overcast" id="race_overcast" class="tw-input">
                <option value="na" {{($race->overcast ==='na') ? 'selected' : ''}}>Not applicable</option>
                <option value="no_clouds" {{($race->overcast ==='no_clouds') ? 'selected' : ''}}>No clouds</option>
                <option value="very_light_clouds" {{($race->overcast ==='very_light_clouds') ? 'selected' : ''}}>Very
                    light
                    clouds</option>
                <option value="light_clouds" {{($race->overcast ==='light_clouds') ? 'selected' : ''}}>Light clouds
                </option>
                <option value="moderate_clouds" {{($race->overcast ==='moderate_clouds') ? 'selected' : ''}}>Moderate
                    clouds
                </option>
                <option value="heavy_clouds" {{($race->overcast ==='heavy_clouds') ? 'selected' : ''}}>Heavy clouds
                </option>
                <option value="very_heavy_clouds" {{($race->overcast ==='very_heavy_clouds') ? 'selected' : ''}}>Very
                    heavy
                    clouds</option>
            </select>

            <label for="race_rainfall" class="tw-label">Rainfall</label>
            <select name="race_rainfall" id="race_rainfall" class="tw-input">
                <option value="na" {{($race->rainfall ==='na') ? 'selected' : ''}}>Not applicable</option>
                <option value="no_rain" {{($race->rainfall ==='no_rain') ? 'selected' : ''}}>No rain</option>
                <option value="very_light_rain" {{($race->rainfall ==='very_light_rain') ? 'selected' : ''}}>Very light
                    rain
                </option>
                <option value="light_rain" {{($race->rainfall ==='light_rain') ? 'selected' : ''}}>Light rain</option>
                <option value="moderate_rain" {{($race->rainfall ==='moderate_rain') ? 'selected' : ''}}>Moderate rain
                </option>
                <option value="heavy_rain" {{($race->rainfall ==='heavy_rain') ? 'selected' : ''}}>Heavy rain</option>
                <option value="very_heavy_rain" {{($race->rainfall ==='very_heavy_rain') ? 'selected' : ''}}>Very heavy
                    rain</option>
                <option value="downpour_hail" {{($race->rainfall ==='downpour_hail') ? 'selected' : ''}}>Downpour / Hail
                </option>
            </select>
        </div>

        <div>
            <label for="race_amount_of_pigeons_personal" class="tw-label">Amount of pigeons (Personal)</label>
            @if($race->amount_of_pigeons_personal === 1000000)
            <input type="number" id="race_amount_of_pigeons_personal" name="race_amount_of_pigeons_personal"
                class="tw-input" value="{{ old('race_amount_of_pigeons_personal') }}" />
            @else
            <input type="number" id="race_amount_of_pigeons_personal" name="race_amount_of_pigeons_personal"
                class="tw-input"
                value="{{ old('race_amount_of_pigeons_personal', $race->amount_of_pigeons_personal) }}" />
            @endif

            <div id="fon_races" class="tw-hidden">
                <label for="race_amount_of_pigeons_club" class="tw-label">Amount of pigeons (Club):</label>
                @if($race->amount_of_pigeons_club === 1000000)
                <input type="number" name="race_amount_of_pigeons_club" id="race_amount_of_pigeons_club"
                    class="tw-input" value="{{ old('race_amount_of_pigeons_club') }}">
                @else
                <input type="number" name="race_amount_of_pigeons_club" id="race_amount_of_pigeons_club"
                    class="tw-input" value="{{ old('race_amount_of_pigeons_club', $race->amount_of_pigeons_club) }}">
                @endif

                <label for="race_amount_of_pigeons_provincial" class="tw-label">Amount of pigeons (Provincial):</label>
                @if($race->amount_of_pigeons_provincial === 1000000)
                <input type="number" name="race_amount_of_pigeons_provincial" id="race_amount_of_pigeons_provincial"
                    class="tw-input" value="{{ old('race_amount_of_pigeons_provincial') }}">
                @else
                <input type="number" name="race_amount_of_pigeons_provincial" id="race_amount_of_pigeons_provincial"
                    class="tw-input"
                    value="{{ old('race_amount_of_pigeons_provincial', $race->amount_of_pigeons_provincial) }}">
                @endif

                <label for="race_amount_of_pigeons_zone" class="tw-label">Amount of pigeons (Zone):</label>
                @if($race->amount_of_pigeons_zone === 1000000)
                <input type="number" name="race_amount_of_pigeons_zone" id="race_amount_of_pigeons_zone"
                    class="tw-input" value="{{ old('race_amount_of_pigeons_zone') }}">
                @else
                <input type="number" name="race_amount_of_pigeons_zone" id="race_amount_of_pigeons_zone"
                    class="tw-input" value="{{ old('race_amount_of_pigeons_zone', $race->amount_of_pigeons_zone) }}">
                @endif

                <label for="race_amount_of_pigeons_national" class="tw-label">Amount of pigeons (National):</label>
                @if($race->amount_of_pigeons_national === 1000000)
                <input type="number" name="race_amount_of_pigeons_national" id="race_amount_of_pigeons_national"
                    class="tw-input" value="{{ old('race_amount_of_pigeons_national') }}">
                @else
                <input type="number" name="race_amount_of_pigeons_national" id="race_amount_of_pigeons_national"
                    class="tw-input"
                    value="{{ old('race_amount_of_pigeons_national', $race->amount_of_pigeons_national) }}">
                @endif
            </div>

            <div id="hfo_races" class="tw-hidden">
                <label for="race_amount_of_pigeons_regio" class="tw-label">Amount of pigeons (Regio):</label>
                @if($race->amount_of_pigeons_regio === 1000000)
                <input type="number" id="race_amount_of_pigeons_regio" name="race_amount_of_pigeons_regio"
                    class="tw-input" value="{{ old('race_amount_of_pigeons_regio') }}" />
                @else
                <input type="number" id="race_amount_of_pigeons_regio" name="race_amount_of_pigeons_regio"
                    class="tw-input"
                    value="{{ old('race_amount_of_pigeons_regio', $race->amount_of_pigeons_regio) }}" />
                @endif

                <label for="race_amount_of_pigeons_overkoepeling" class="tw-label">Amount of pigeons
                    (Overkoepeling):</label>
                @if($race->amount_of_pigeons_regio === 1000000)
                <input type="number" id="race_amount_of_pigeons_overkoepeling"
                    name="race_amount_of_pigeons_overkoepeling" class="tw-input"
                    value="{{ old('race_amount_of_pigeons_overkoepeling') }}" />
                @else
                <input type="number" id="race_amount_of_pigeons_overkoepeling"
                    name="race_amount_of_pigeons_overkoepeling" class="tw-input"
                    value="{{ old('race_amount_of_pigeons_overkoepeling', $race->amount_of_pigeons_overkoepeling) }}" />
                @endif
            </div>
        </div>

    </div>
    <input type="submit" value="Submit" class="tw-button" />
</form>
@endsection

@push('scripts-after-main')
<script>
    var dropzoneId = {!! json_encode($race->dropzone->id) !!};

    $(function() {
        $.ajax({
            url: '/api/dropzone/' + dropzoneId + '/get-discipline',
            context: document.body
        }).done(function(res) {
            if(hfo.includes(res)) {
                $('#fon_races').removeClass('tw-block');
                $('#fon_races').addClass('tw-hidden');

                $('#hfo_races').removeClass('tw-hidden');
                $('#hfo_races').addClass('tw-block');
            } else if (fon.includes(res)) {
                $('#hfo_races').removeClass('tw-block');
                $('#hfo_races').addClass('tw-hidden');

                $('#fon_races').removeClass('tw-hidden');
                $('#fon_races').addClass('tw-block');
            }
        });
    });

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
            if(hfo.includes(res)) {
                $('#fon_races').removeClass('tw-block');
                $('#fon_races').addClass('tw-hidden');

                $('#hfo_races').removeClass('tw-hidden');
                $('#hfo_races').addClass('tw-block');
            } else if (fon.includes(res)) {
                $('#hfo_races').removeClass('tw-block');
                $('#hfo_races').addClass('tw-hidden');

                $('#fon_races').removeClass('tw-hidden');
                $('#fon_races').addClass('tw-block');
            }
        });
    });
</script>
@endpush
