@extends('app')

@section('title')
All Results
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">All Results</h2>

<table class="tw-table-auto tw-stripe">
    <thead>
        <tr>
            <th class="tw-text-left tw-px-2 tw-py-1">Pigeon</th>
            <th class="tw-text-left tw-px-2 tw-py-1">Dropzone</th>
            <th class="tw-text-left tw-px-2 tw-py-1">Unloading</th>
            <th class="tw-text-left tw-px-2 tw-py-1">Arrival</th>
            <th class="tw-text-left tw-px-2 tw-py-1">Interval (min)</th>
            <th class="tw-text-left tw-px-2 tw-py-1">mpm</th>
        </tr>
    </thead>
    <tbody>
        @foreach($results as $result)
        <tr>
            <td class="tw-border tw-px-2 tw-py-1"><a class="tw-link"
                    href="{{ route('pigeon.show', $result->pigeon->id) }}">{{ $result->pigeon->ringnumber }}</a></td>
            <td class="tw-border tw-px-2 tw-py-1">{{ $result->race->dropzone->name }}</td>
            <td class="tw-border tw-px-2 tw-py-1">{{ $result->race->unloading_time }}</td>
            <td class="tw-border tw-px-2 tw-py-1">{{ $result->arrival_time }}</td>
            <td class="tw-border tw-px-2 tw-py-1 tw-text-right">{{ $result->interval }}</td>
            <td class="tw-border tw-px-2 tw-py-1  tw-text-right">{{ $result->mpm }}</td>
        </tr>
        @endforeach
    </tbody>
    </tbody>
</table>
@endsection
