<form action="{{ route('best-pigeon-per-wind.show') }}" method="GET">
    <label for="year" class="tw-label">Jaar</label>
    <select name="year" id="year" class="tw-input">
        <option value="all">Alle jaren</option>
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

    <label for="race_wind" class="tw-label">Wind</label>
    <select name="race_wind" id="race_wind" class="tw-input">
        <option value="na">Not applicable</option>
        <option value="north">North</option>
        <option value="north_north_east">North North East</option>
        <option value="north_east">North East</option>
        <option value="east_north_east">East North East</option>
        <option value="east">East</option>
        <option value="east_south_east">East South East</option>
        <option value="south_east">South East</option>
        <option value="south_south_east">South South East</option>
        <option value="south">South</option>
        <option value="south_south_west">South South West</option>
        <option value="south_west">South West</option>
        <option value="west_south_west">West South West</option>
        <option value="west">West</option>
        <option value="west_north_west">West North West</option>
        <option value="north_west">North West</option>
        <option value="north_north_west">North North West</option>
    </select>

    <input type="submit" value="Zoek op 'per wind'" class="tw-button" />
</form>
