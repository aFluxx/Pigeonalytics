@extends('app')

@section('title')
All Results
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">All Results</h2>
<all-results-data-table :results="{{ $results }}"></all-results-data-table>
@endsection
