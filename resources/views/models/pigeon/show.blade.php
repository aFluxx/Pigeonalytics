@extends('app')

@section('title')
{{ $pigeon->ringnumber }}
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">{{ $pigeon->ringnumber }}</h2>

<div id="table">
    <table class="tw-table-auto tw-striped">
        <thead>
            <tr>
                <th class="tw-text-left tw-px-2 tw-py-1">Dropzone</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Unloading</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Arrival</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Interval (min)</th>
                <th class="tw-text-left tw-px-2 tw-py-1">mpm</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($results as $result)
            <tr>
                <td class="tw-border tw-px-2 tw-py-1">{{ $result->race->dropzone->name }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $result->race->unloading_time }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $result->arrival_time }}</td>
                <td class="tw-border tw-px-2 tw-py-1 tw-text-right">{{ $result->interval }}</td>
                <td class="tw-border tw-px-2 tw-py-1 tw-text-right">{{ $result->mpm }}</td>
            </tr>
            @endforeach
        </tbody>
        </tbody>
    </table>
</div>
@endsection
