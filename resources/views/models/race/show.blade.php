@extends('app')

@section('title')
{{ $race->name }}
@endsection

@section('content')
<div class="tw-flex tw-justify-between p-4">
    <h2 class="tw-font-bold tw-text-2xl tw-mb-1">
        {{ $race->dropzone->name }} ({{ $race->category_formatted }})
    </h2>
    <h2 class="tw-font-bold tw-text-xl tw-mb-1">
        Datum: {{ Carbon\Carbon::parse($race->unloading_time)->format('Y-m-d') }}
    </h2>
    <h2 class="tw-font-bold tw-text-xl tw-mb-3">
        Lossingsuur: {{ Carbon\Carbon::parse($race->unloading_time)->format('H:i:s') }}
    </h2>
</div>

<div class="tw-flex tw-justify-between p-4">
    <p><strong>Wind:</strong> {{ $race->wind_formatted }}</p>
    <p><strong>Windkracht:</strong> {{ $race->wind_strength_formatted }}</p>
    <p><strong>Bewolking:</strong> {{ $race->overcast_formatted }}</p>
    <p><strong>Regen:</strong> {{ $race->rainfall_formatted }}</p>
    <p><strong>Jaar:</strong> {{ $race->year }}</p>
    <p><strong>Type:</strong> {{ $race->type_formatted }}</p>
</div>

<results-table type="race" discipline="{{ $race->dropzone->discipline }}" :results="{{ $race->results }}">
</results-table>

<div class="tw-flex tw-justify-between p-4">
    @auth
    <a href="{{ route('race.close', $race->id) }}">Race afsluiten</a>
    @endauth
</div>

@endsection
