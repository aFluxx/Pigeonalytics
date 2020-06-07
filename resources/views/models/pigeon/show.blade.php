@extends('app')

@section('title')
{{ $pigeon->ringnumber }}
@endsection

@section('content')
<single-pigeon-results-table :pigeon="{{ $pigeon }}" :results="{{ $results }}"></single-pigeon-results-table>
@endsection
