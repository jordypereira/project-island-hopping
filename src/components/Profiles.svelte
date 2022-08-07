<script>
  import { Image } from "@astrojs/image"
  import { profiles } from "../data/profiles"
</script>

<section class="my-8 flex space-y-8 flex-col">
  {#each profiles as { id, alt, text }, index}
    <article
      class="flex justify-center w-full flex-wrap lg:flex-nowrap"
      class:lg:flex-row-reverse={index % 2 !== 0}
    >
      <div>
        <Image
          width={192}
          height={288}
          class="lg:max-w-48 h-auto"
          src={import(`../assets/images/profiles/${id}-192w.jpg`)}
          {alt}
        />
      </div>
      <p
        class="flex items-center p-4 lg:p-0"
        class:lg:ml-6={index % 2 === 0}
        class:lg:mr-6={index % 2 !== 0}
      >
        {text}
      </p>
    </article>
  {/each}
  )) }
</section>
