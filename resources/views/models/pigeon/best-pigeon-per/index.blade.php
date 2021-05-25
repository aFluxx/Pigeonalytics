@extends('app')

@section('title')
Beste duif per
@endsection

@section('content')
<h3 class="tw-text-xl tw-p-4">Beste duif per vlucht/windrichting opzoeken</h3>

<div class="tw-flex tw-w-full">
    <div class="tw-w-1/2 tw-p-4">
        <h3 class="tw-text-lg tw-font-bold tw-mb-2">Beste duif per vlucht</h3>
        @include('models.pigeon.best-pigeon-per.forms.vlucht')
    </div>

    <div class="tw-w-1/2 tw-p-4">
        <h3 class="tw-text-lg tw-font-bold tw-mb-2">Beste duif per wind</h3>
        @include('models.pigeon.best-pigeon-per.forms.wind')
    </div>
</div>

@endsection
