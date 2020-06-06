@extends('app')

@section('title')
My Races
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">My races</h2>
<div>
    <table class="tw-table-auto tw-striped">
        <thead>
            <tr>
                <th class="tw-text-left tw-px-2 tw-py-1">Dropzone</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Unloading time</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Wind</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Overcast</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Rainfall</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Year</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Type</th>
                <th class="tw-text-left tw-px-2 tw-py-1">Amount of pigeons</th>
                <th class="tw-text-left tw-px-2 tw-py-1"></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($races as $race)
            <tr>
                <td class="tw-border tw-px-2 tw-py-1">{{ $race->dropzone->name }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $race->unloading_time }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $race->wind }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $race->overcast }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $race->rainfall }}</td>
                <td class="tw-border tw-px-2 tw-py-1 tw-text-right">{{ $race->year }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $race->type }}</td>
                <td class="tw-border tw-px-2 tw-py-1 tw-text-right">{{ $race->amount_of_pigeons }}</td>
                <td class="tw-border tw-px-2 tw-py-1"><a class="tw-link" href="{{ route('race.show', $race->id) }}">See
                        race details</a></td>
            </tr>
            @endforeach
        </tbody>
        </tbody>
    </table>
</div>
@endsection
