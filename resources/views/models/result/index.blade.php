@extends('app')

@section('title')
All Results
@endsection

@section('content')
<all-results-data-table :results="{{ $results }}"></all-results-data-table>
<hr class="tw-my-12" />
<all-results-hfo :results="{{ $resultsVit }}"></all-results-hfo>
<hr class="tw-my-12" />
<all-results-fon :results="{{ $resultsFon }}"></all-results-fon>
@endsection
