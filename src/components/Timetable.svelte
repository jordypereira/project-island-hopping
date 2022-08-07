<script>
  import { timetableData } from "../data/events"
</script>

<!-- Timetable -->
<section class="my-8 mx-auto">
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {#each timetableData as item}
      <div class="mx-auto px-8 text-center">
        <h3 class="text-2xl text-bold">{item.location}</h3>
        <h4 class="text-lg mb-3 text-gray-700">{item.date}</h4>
        <ul>
          {#each item.events as event}
            <li>
              <span>{event.text}</span>
              {#if event.points}
                <!-- https://developers.google.com/maps/documentation/urls/get-started#search-action -->
                <a
                  class="text-blue-700"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${event.points}`}
                >
                  Veibeskrivelse
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
