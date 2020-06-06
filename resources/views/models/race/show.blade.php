@extends('app')

@section('title')
{{ $race->name }}
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">{{ $race->name }}</h2>
<div>
    <p><strong>Unloading:</strong> {{ $race->unloadingTime }}</p>
    <p><strong>Wind:</strong> {{ $race->wind }}</p>
    <p><strong>Overcast:</strong> {{ $race->overcast }}</p>
    <p><strong>Rainfall:</strong> {{ $race->rainfall }}</p>
    <p><strong>Year:</strong> {{ $race->year }}</p>
    <p><strong>Type:</strong> {{ $race->type }}</p>
    <p><strong>Amount of Pigeons:</strong> {{ $race->amountPigeons }}</p>
    <p><strong>Dropzone:</strong> {{ $race->dropzone->name }}</p>
</div>

<div class="tw-mt-6">
    <table class="tw-table-auto tw-striped">
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
            @foreach($race->results as $result)
            <tr>
                <td class="tw-border tw-px-2 tw-py-1"><a class="tw-link"
                        href="{{ route('pigeon.show', $result->pigeon->id) }}">{{ $result->pigeon->ringnumber }}</a>
                </td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $result->race->dropzone->name }}</td>
                <td class="tw-border tw-px-2 tw-py-1">{{ $result->race->unloadingTime }}</td>
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
