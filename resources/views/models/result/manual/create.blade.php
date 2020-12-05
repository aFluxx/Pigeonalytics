@extends('app')

@section('title')
Manueel resultaat aanmaken
@endsection

@section('content')
<div class="p-4">
    <h2 class="tw-font-bold tw-text-2xl tw-mb-2">Manueel resultaat aanmaken</h2>

    <form action="{{ route('result.store.manual') }}" enctype="multipart/form-data" method="POST"
        class="tw-w-full tw-max-w-lg">
        @if($message ?? '')
        <p class="tw-bg-green-300 tw-text-green-700">{{ $message ?? '' }}</p>
        @endif
        @csrf
        <label for="result_race" class="tw-label">Kies race:</label>
        <select name="result_race" id="result_race" class="tw-input">
            @foreach($races as $race)
            <option value="{{ $race->id }}">{{ $race->unloading_time }} -- {{ $race->dropzone->name }}
                ({{ $race->category_formatted }})
            </option>
            @endforeach
        </select>

        <label for="result_place_personal" class="tw-label">Plaats (Persoonlijk):</label>
        <input type="number" name="result_place_personal" id="result_place_personal" class="tw-input">

        <label for="result_ringnumber" class="tw-label">Ringnummer:</label>
        <input type="text" name="result_ringnumber" id="result_ringnumber" class="tw-input" placeholder="BE-18-4441444">

        <label for="result_arrival_time" class="tw-label">Uur van aankomst:</label>

        <input type="time" id="result_arrival_time" name="result_arrival_time" step="1" class="tw-input">

        <input type="checkbox" id="result_arrival_date_required" name="result_arrival_date_required"
            onchange="toggleCheckbox(this)">
        <label for="result_arrival_date_required" class="tw-label">Overnachtingsvlucht</label>

        <input type="date" id="result_arrival_date" name="result_arrival_date" step="1" class="tw-input tw-hidden">

        {{-- <label for="result_mpm" class="tw-label">mpm:</label>
    <input type="number" name="result_mpm" id="result_mpm" class="tw-input" step="0.001"> --}}

        <input type="submit" value="Submit" class="tw-button" />
    </form>
</div>
@endsection

@push('scripts-after-main')
<script>
    function toggleCheckbox(element) {
        var checkBox = document.getElementById("result_arrival_date_required");
        var text = document.getElementById("result_arrival_date");

        if (checkBox.checked == true){
            text.classList.remove("tw-hidden");
        } else {
            text.classList.add("tw-hidden");
        }
    }
</script>
@endpush
