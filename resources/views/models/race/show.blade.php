@extends('app')

@section('title')
{{ $race->name }}
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2 tw-text-2xl tw-mb-1">
    {{ $race->dropzone->name }} ({{ $race->category }})
</h2>
<h2 class="tw-font-bold tw-text-2xl tw-mb-2 tw-text-xl tw-mb-1">
    Date: {{ Carbon\Carbon::parse($race->unloading_time)->format('Y-m-d') }}
</h2>
<h2 class="tw-font-bold tw-text-2xl tw-mb-2 tw-text-xl tw-mb-3">
    Unloading time: {{ Carbon\Carbon::parse($race->unloading_time)->format('H:i:s') }}
</h2>
<div class="tw-flex tw-justify-between">
    <p><strong>Wind:</strong> {{ $race->wind }}</p>
    <p><strong>Wind Strength:</strong> {{ $race->wind_strength }}</p>
    <p><strong>Overcast:</strong> {{ $race->overcast }}</p>
    <p><strong>Rainfall:</strong> {{ $race->rainfall }}</p>
    <p><strong>Year:</strong> {{ $race->year }}</p>
    <p><strong>Type:</strong> {{ $race->type }}</p>
</div>
<single-race-results-table :results="{{ $race->results }}"></single-race-results-table>
@endsection
