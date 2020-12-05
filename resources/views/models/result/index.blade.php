@extends('app')

@section('title')
Alle resultaten
@endsection

@section('content')
<result-overview :results-vitesse="{{ $resultsVitesse }}" :results-halve-fond="{{ $resultsHalveFond }}"
    :results-kleine-fond="{{ $resultsKleineFond }}" :results-fond="{{ $resultsFond }}"
    :results-grote-fond="{{ $resultsGroteFond }}">
</result-overview>
@endsection
