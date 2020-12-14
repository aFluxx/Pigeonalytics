@extends('app')

@section('title')
{{ $pigeon->ringnumber }}
@endsection

@section('content')
<pigeon-overview :pigeon="{{ $pigeon }}" :results-vitesse="{{ $resultsVitesse }}"
    :results-halve-fond="{{ $resultsHalveFond }}" :results-kleine-fond="{{ $resultsKleineFond }}"
    :results-fond="{{ $resultsFond }}" :results-grote-fond="{{ $resultsGroteFond }}" :all-results="{{ $allResults }}"
    :children-father="{{ $pigeon->fatherChildren }}" :children-mother="{{ $pigeon->motherChildren }}">
</pigeon-overview>
@endsection
