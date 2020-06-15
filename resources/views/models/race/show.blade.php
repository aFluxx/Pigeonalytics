@extends('app')

@section('title')
{{ $race->name }}
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2 tw-text-2xl tw-mb-1">
    {{ $race->dropzone->name }} ({{ $race->category_formatted }})
</h2>
<h2 class="tw-font-bold tw-text-2xl tw-mb-2 tw-text-xl tw-mb-1">
    Date: {{ Carbon\Carbon::parse($race->unloading_time)->format('Y-m-d') }}
</h2>
<h2 class="tw-font-bold tw-text-2xl tw-mb-2 tw-text-xl tw-mb-3">
    Unloading time: {{ Carbon\Carbon::parse($race->unloading_time)->format('H:i:s') }}
</h2>
<div class="tw-flex tw-justify-between">
    <p><strong>Wind:</strong> {{ $race->wind_formatted }}</p>
    <p><strong>Wind Strength:</strong> {{ $race->wind_strength_formatted }}</p>
    <p><strong>Overcast:</strong> {{ $race->overcast_formatted }}</p>
    <p><strong>Rainfall:</strong> {{ $race->rainfall_formatted }}</p>
    <p><strong>Year:</strong> {{ $race->year }}</p>
    <p><strong>Type:</strong> {{ $race->type_formatted }}</p>
</div>
@if($race->amount_of_pigeons_regio === 1000000 || $race->amount_of_pigeons_regio === null)
<fond-results :results="{{ $race->results }}"></fond-results>
@else
<halve-fond-results :results="{{ $race->results }}"></halve-fond-results>
@endif

<a href="{{ route('race.close', $race->id) }}">Close race</a>
@endsection
