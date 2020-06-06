@extends('app')

@section('title')
My Pigeons
@endsection

@section('content')
<h2 class="tw-font-bold tw-text-2xl tw-mb-2">My pigeons</h2>
<div>
    <table class="tw-table-auto tw-striped">
        <thead>
            <tr>
                <th class="tw-text-left tw-px-2 tw-py-1">Ringnumber</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($pigeons as $pigeon)
            <tr>
                <td class="tw-border tw-px-2 tw-py-1"><a class="tw-link"
                        href="{{ route('pigeon.show', $pigeon->id) }}">{{ $pigeon->ringnumber }}</a></td>
            </tr>
            @endforeach
        </tbody>
        </tbody>
    </table>
</div>
@endsection
