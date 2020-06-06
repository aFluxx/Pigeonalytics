@extends('app')

@section('title')
All dropzones
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">Create a new dropzone</h2>
<table class="tw-table-auto tw-striped">
    <thead>
        <tr>
            <th class="tw-text-left tw-px-2 tw-py-1">Name</th>
            <th class="tw-text-left tw-px-2 tw-py-1">Distance</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($dropzones as $dropzone)
        <tr>
            <td class="tw-border tw-px-2 tw-py-1">{{ $dropzone->name }}</td>
            <td class="tw-border tw-px-2 tw-py-1">{{ $dropzone->distance }}</td>
        </tr>
        @endforeach
    </tbody>
    </tbody>
</table>
@endsection
