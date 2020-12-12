@extends('app')

@section('title')
Beste kwekers
@endsection

@section('content')
<form action="{{ route('best-breeders.show') }}" method="GET" class="tw-p-4">
    <label for="van_jaar" class="tw-label">Van</label>
    <select name="van_jaar" id="van_jaar" class="tw-input">
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

    <label for="tot_jaar" class="tw-label">Tot</label>
    <select name="tot_jaar" id="tot_jaar" class="tw-input">
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

    <label for="which_coefficient" class="tw-label">Categorie</label>
    <select name="which_coefficient" id="which_coefficient" class="tw-input">
        <option value="coefficient_provincial">Provinciaal</option>
        <option value="coefficient_zone">Zone</option>
        <option value="coefficient_national">Nationaal</option>
    </select>

    <label for="threshold" class="tw-label">Threshold</label>
    <input type="number" name="threshold" class="tw-input">

    <input type="submit" value="Submit" class="tw-button" />
</form>

@endsection
