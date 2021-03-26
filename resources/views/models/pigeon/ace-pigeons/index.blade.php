@extends('app')

@section('title')
Asduiven
@endsection

@section('content')
<h3 class="tw-text-xl tw-p-4">Asduiven opzoeken</h3>
<form action="{{ route('ace-pigeons.show') }}" method="GET" class="tw-p-4">
    <label for="year" class="tw-label">Jaar</label>
    <select name="year" id="year" class="tw-input">
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
    </select>

    <label for="which_category" class="tw-label">Klasse</label>
    <select name="which_category" id="which_category" class="tw-input">
        <option value="youngster">Jongen</option>
        <option value="yearlings">Jaarlingen</option>
        <option value="old_birds">Oude</option>
    </select>

    <label for="amount_of_races" class="tw-label">Aantal races</label>
    <input type="number" name="amount_of_races" class="tw-input">

    <input type="submit" value="Submit" class="tw-button" />
</form>

@endsection
