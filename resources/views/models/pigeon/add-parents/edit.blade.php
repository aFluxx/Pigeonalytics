@extends('app')

@section('title')
Ouder toevoegen voor {{ $pigeon->ringnumber }}
@endsection

@section('content')
<div class="tw-m-6 tw-p-4">
    <h3 class="tw-text-xl">Ouder toevoegen voor {{ $pigeon->ringnumber }}</h3>

    <parent-select :pigeon-id={{ $pigeon->id }} :pigeons="{{ $pigeons }}"></parent-select>


    <a href="{{ route('add-parents.index') }}">Nieuwe duif opzoeken</a>
</div>
@endsection
