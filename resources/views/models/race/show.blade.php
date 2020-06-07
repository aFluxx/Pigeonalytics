@extends('app')

@section('title')
{{ $race->name }}
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">{{ $race->name }}</h2>
<div class="tw-flex tw-justify-between">
    <p><strong>Wind:</strong> {{ $race->wind }}</p>
    <p><strong>Wind Strength:</strong> {{ $race->wind_strength }}</p>
    <p><strong>Overcast:</strong> {{ $race->overcast }}</p>
    <p><strong>Rainfall:</strong> {{ $race->rainfall }}</p>
    <p><strong>Year:</strong> {{ $race->year }}</p>
    <p><strong>Type:</strong> {{ $race->type }}</p>
    <p><strong>Amount of Pigeons:</strong> {{ $race->amount_of_pigeons }}</p>
</div>
<single-race-results-table :results="{{ $race->results }}"></single-race-results-table>
@endsection
