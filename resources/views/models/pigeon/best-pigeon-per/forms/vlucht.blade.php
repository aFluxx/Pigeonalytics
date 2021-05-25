<form action="{{ route('best-pigeon-per.show') }}" method="GET">
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

    <label for="which_coefficient" class="tw-label">Categorie</label>
    <select name="which_coefficient" id="which_coefficient" class="tw-input">
        <option value="coefficient_provincial">Provinciaal</option>
        <option value="coefficient_zone">Zone</option>
        <option value="coefficient_national">Nationaal</option>
    </select>

    <label for="year" class="tw-label">Vlucht</label>
    <select name="dropzone" id="dropzone" class="tw-input">
        @foreach($dropzones as $dropzone)
        <option value="{{ $dropzone->id }}">{{ $dropzone->name }}</option>
        @endforeach
    </select>

    <input type="submit" value="Zoek op 'per vlucht'" class="tw-button" />
</form>
