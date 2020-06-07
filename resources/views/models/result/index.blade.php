@extends('app')

@section('title')
All Results
@endsection

@section('content')
<all-results-data-table :results="{{ $results }}"></all-results-data-table>
@endsection
