<nav class="tw-bg-gray-300 tw-py-4">
    <div class="tw-container tw-flex tw-flex-row tw-justify-between tw-mx-auto">

        <div>
            <h2 class="tw-font-bold tw-text-xl">1. Dropzone</h2>
            <ul>
                <li>
                    <a class="tw-link" href="{{ route('dropzone.list') }}">All
                        Dropzones</a>
                </li>
                @auth
                <li>
                    <a class="tw-link" href="{{ route('dropzone.create') }}">Create
                        Dropzone</a>
                </li>
                @endauth
            </ul>
        </div>

        <div>
            <h2 class="tw-font-bold tw-text-xl">2. Race</h2>
            <ul>
                <li>
                    <a class="tw-link" href="{{ route('race.list') }}">All Races</a>
                </li>
                @auth
                <li>
                    <a class="tw-link" href="{{ route('race.create') }}">Create race</a>
                </li>
                @endauth
            </ul>
        </div>

        <div>
            <h2 class="tw-font-bold tw-text-xl">3. Results</h2>
            <ul>
                <li>
                    <a class="tw-link" href="{{ route('result.list') }}">All Results</a>
                </li>
                @auth
                <li>
                    <a class="tw-link" href="{{ route('result.create.upload') }}">Create
                        Results (upload)</a>
                </li>
                <li>
                    <a class="tw-link" href="{{ route('result.create.manual') }}">Create
                        Results (manual)</a>
                </li>
                @endauth
            </ul>
        </div>

        <div>
            <h2 class="tw-font-bold tw-text-xl">4. Pigeon</h2>
            <ul>
                <li>
                    <a class="tw-link" href="{{ route('pigeon.list') }}">All Pigeons</a>
                </li>
                <li>
                    <a class="tw-link" href="{{ route('rapport.average-year-mpm') }}">Average MPM</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="tw-container tw-flex tw-flex-row tw-justify-between tw-mx-auto">
        <a href="javascript:history.back()">Go Back</a>
    </div>

</nav>
