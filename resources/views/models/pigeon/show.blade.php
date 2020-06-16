@extends('app')

@section('title')
{{ $pigeon->ringnumber }}
@endsection

@section('content')
<results-hfo :pigeon="{{ $pigeon }}" :results="{{ $resultsVit }}"></results-hfo>
<hr class="tw-my-12" />
<results-fon :pigeon="{{ $pigeon }}" :results="{{ $resultsFon }}"></results-fon>
<hr class="tw-my-12" />
<single-pigeon-results-table :pigeon="{{ $pigeon }}" :results="{{ $results }}"></single-pigeon-results-table>
@endsection
